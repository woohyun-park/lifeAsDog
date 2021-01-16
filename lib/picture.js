let name = '';
let sex = '';
let mbtiList = [0, 0, 0, 0];
let mbti = '';
let mbtiCompare = [{"name": "버니즈 마운틴 독", "mbti": "1111"}, {"name": "치와와", "mbti": "1101"}, {"name": "시바", "mbti": "1110"}, {"name": "퍼그", "mbti": "1100"}, {"name": "슈나우저", "mbti": "1001"}, {"name": "푸들", "mbti": "1000"}, {"name": "삽살개", "mbti": "1011"}, {"name": "스피츠", "mbti": "1010"}, {"name": "래브라도 리트리버", "mbti": "0101"}, {"name": "보더콜리", "mbti": "0111"}, {"name": "웰시코기", "mbti": "0100"}, {"name": "그레이하운드", "mbti": "0110"}, {"name": "비숑 프리제", "mbti": "0001"}, {"name": "셰퍼드", "mbti": "0011"}, {"name": "로트와일러", "mbti": "0010"}, {"name": "골든리트리버", "mbti": "0000"}];
let mbtiPercent = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function start(){
  // let name = $(".main__button--name").getAttribute("value");
  name = document.getElementById('name').value;
  $(".main")[0].style.display = "none";
  $("#questionSex")[0].style.display = "block";
}
function questionSex(tempSex){
  if(tempSex == 0){
    sex = "남자";
  }
  else{
    sex = "여자";
  }
  console.log(sex);
  $(`#questionSex`)[0].style.display = "none";
  $("#question1")[0].style.display = "block";
}
function question(num, mbtiNum, add){
  mbtiList[mbtiNum] += add;
  $(`#question${num}`)[0].style.display = "none";
  if(num == 12){
    $(".picture")[0].style.display = "block";
    mbtiCalculate();
    editDistance();
  } else{
    $(`#question${num+1}`)[0].style.display = "block";
  }
}
async function init() {
  // the link to your model provided by Teachable Machine export panel
  $(".picture")[0].style.display = "none";
  $(".process")[0].style.display = "block";
  let URL = "";
  if(sex == '남자'){
    URL = "https://teachablemachine.withgoogle.com/models/dvl70unFQ/";
  }
  else{
    URL = "https://teachablemachine.withgoogle.com/models/beDTIzbd4/";
  }

  let model, webcam, labelContainer, maxPredictions;
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  // load the model and metadata
  // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
  // or files from your local hard drive
  // Note: the pose library adds "tmImage" object to your window (window.tmImage)
  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();
  // append elements to the DOM
  labelContainer = document.getElementById("label-container");
  for (let i = 0; i < maxPredictions; i++) { // and class labels
    labelContainer.appendChild(document.createElement("div"));
  }
  console.log("done init");
  let image = document.getElementById("face-image");
  const prediction = await model.predict(image, false);
  for(let i = 0; i < prediction.length; i++){
    mbtiPercent[i] = mbtiPercent[i] * 0.3 + prediction[i].probability.toFixed(2) * 0.7;
  }
  console.log("done predict");
  console.log(mbtiPercent);
  console.log(Math.max(...mbtiPercent));
  $(".result")[0].innerText = `당신은 ${Math.max(...mbtiPercent)}로 ${mbtiCompare[mbtiPercent.indexOf(Math.max(...mbtiPercent))].name}입니다`;
  $(".process")[0].style.display = "none";
  $(".result")[0].style.display = "block";

}

function mbtiCalculate(){
  for(let i = 0; i < 4; i++){
    if(mbtiList[i] > 1){
      mbti += "1";
    }
    else{
      mbti += "0";
    }
  }
}
function editDistance(){
  for(let i = 0; i < mbtiCompare.length; i++){
    for(let j= 0; j < 4; j++){
      if(mbtiCompare[i].mbti[j] == mbti[j]){
        mbtiPercent[i] += 0.25;
      }
    }
  }
}
function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}
var $ = function ( elem ) {
 var dom = document.querySelectorAll( elem ) , rtnVal = null ;
 if ( dom.length == 0 ) rtnVal = undefined ;
 if ( dom.length == 1 ) rtnVal = dom[0] ;
 if ( dom.length > 1 ) rtnVal = dom ;
 return rtnVal ;
} ;
