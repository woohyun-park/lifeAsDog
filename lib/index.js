let name = '';
let sex = '';
let mbtiList = [0, 0, 0, 0];
let mbti = '';
let mbtiCompare = [{"name": "버니즈 마운틴 독", "mbti": "1111", "header": "조용하고 헌신적인", "text": "<div class='result__text--bold'>버니즈<br>마운틴 독</div>주인 옆에서 애교를 부리기보단 무뚝뚝하게  주인 곁을 지키는 당신! 한번 시작한 일은 책임을 다해서 열심히 하는 데에 자부심을 가지고 있군요.", "list": ["골든 리트리버", "래브라도 리트리버"]},
{"name": "치와와", "mbti": "1101", "header": "한마디로 정의하기 어려운", "text": "<div class='result__text--bold'>치와와</div>때로는 섬세하고 때로는 가차없으면서 때로는 낯선 사람을 경계하는 모습을 보이지만 때로는 꼬리를 살랑살랑 흔들며 친근하게 다가가는 당신!  다양한 성향을 장점으로 승화시켜 당신을 돋보이게 하는군요.", "list": ["로트와일러", "셰퍼드"]},
{"name": "시바", "mbti": "1110", "header": "냉철하면서 호기심 넘치는", "text": "<div class='result__text--bold'>시바</div>바깥세상을 킁킁거리며 탐구하고 싶어 시도때도없이 주인에게 산책가자고 조르는 당신! 산책을 데리고 나가지 않는다고 집안 이곳저곳을 돌아다니며 말썽을 부려놓지는 말아요.", "list": ["비숑 프리제", "골든 리트리버"]},
{"name": "퍼그", "mbti": "1100", "header": "온화하고 너그러운", "text": "<div class='result__text--bold'>퍼그</div> 새로운 것을 좋아하면서도 배려하는것을 좋아하는 당신! 거절을 잘 못한다고 해서 낯선 사람이 맛있는걸 준다고 따라가면 안돼요.", "list": ["셰퍼드", "로트와일러"]},
{"name": "슈나우저", "mbti": "1001", "header": "단호하고 결단력있는", "text": "<div class='result__text--bold'>슈나우저</div>게으름피우지 않고 눈치가 빠른 당신! 주인에게 꼭 달라붙어있는 모습이 너무나 사랑스럽군요", "list": ["그레이하운드", "보더콜리"]},
{"name": "푸들", "mbti": "1000", "header": "수줍지만 열정이 넘치는", "text": "<div class='result__text--bold'>푸들</div>사람들의 장점을 바라봐줄줄 아는 당신! 가끔 주인에게 호되게 혼나도 금방 싱글벙글해지는 당신이 부럽군요.", "list": ["보더콜리", "그레이하운드"]},
{"name": "삽살개", "mbti": "1011", "header": "신중하고 독립적인", "text": "<div class='result__text--bold'>삽살개</div>혼자 있는 시간도 너무나 중요한 당신! 때로는 주인에게도 애교를 부려보는건 어떨까요?", "list": ["웰시코기", "래브라도 리트리버"]},
{"name": "스피츠", "mbti": "1010", "header": "느긋하고 독립적인", "text": "<div class='result__text--bold'>스피츠</div>혼자 가만히 누워서 사색에 잠기는 당신! 주인에게만은 사랑꾼인 모습이 아름답군요.", "list": ["래브라도 리트리버", "웰시코기"]},
{"name": "래브라도 리트리버", "mbti": "0101", "header": "외향적이고 인기많은", "text": "<div class='result__text--bold'>래브라도<br>리트리버</div>가족뿐만 아니라 모든 사람들에게 사랑받는 당신! 사람들 사이에서 행복한 당신이 보기 좋군요.", "list": ["스피츠", "삽살개"]},
{"name": "보더콜리", "mbti": "0111", "header": "진취적이고 리더쉽있는", "text": "<div class='result__text--bold'>보더콜리</div>산책을 나가면 언제나 앞장서서 주인을 인도하는 당신! 군중을 거느리는 모습이 위풍당당하군요.", "list": ["푸들", "슈나우저"]},
{"name": "웰시코기", "mbti": "0100", "header": "자유롭고 낙천적인", "text": "<div class='result__text--bold'>웰시코기</div>항상 장난감을 들고 초롱초롱한 눈빛으로 주인을 쳐다보는 당신! 가끔은 주인도 휴식이 필요하지 않을까요?", "list": ["삽살개", "스피츠"]},
{"name": "그레이하운드", "mbti": "0110", "header": "모험을 즐기고 활동적인", "text": "<div class='result__text--bold'>그레이<br>하운드</div>주인과의 놀이에서 절대 져주는법이 없는 당신! 가끔은 물고있는 장난감을 놔주는법도 필요한 법이지요.", "list": ["슈나우저", "푸들"]},
{"name": "비숑프리제", "mbti": "0001", "header": "선하고 정이 많은", "text": "<div class='result__text--bold'>비숑<br>프리제</div>주인의 기분대로 뭐든지 맞춰주는 당신! 당신을 반려견으로 둔 주인은 정말 복받은 사람이네요.", "list": ["시바", "버니즈 마운틴 독"]},
{"name": "셰퍼드", "mbti": "0011", "header": "굳건하고 대담한", "text": "<div class='result__text--bold'>셰퍼드</div>언제나 계획대로 완벽하게 일을 실행하는 당신! 당신을 반려견으로 둔 주인은 아주 든든하겠네요.", "list": ["퍼그", "치와와"]},
{"name": "로트와일러", "mbti": "0010", "header": "고집있고 외향적인", "text": "<div class='result__text--bold'>로트와일러</div>주인이 뭐라고 해도 당신이 맞다고 생각하면 맞다고 짖는 당신! 자신만의 길을 개척하는 당신이 멋있군요.", "list": ["치와와", "퍼그"]},
{"name": "골든 리트리버", "mbti": "0000", "header": "재기발랄하고 긍정적인", "text": "<div class='result__text--bold'>골든<br>리트리버</div>바보같이 사람들을 좋아하는 당신! 어린아이처럼 행복해보이는 모습이 사랑스럽군요.", "list": ["버니즈 마운틴 독", "시바"]}];
let mbtiPercent = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function start(){
  // let name = $(".main__button--name").getAttribute("value");
  name = document.getElementById('name').value;
  if(name == ''){
    alert("이름을 입력해주세요");
    return;
  }
  setTimeout(function(){
    $(".main")[0].style.display = "none";
    $("#questionSex")[0].style.display = "block";
  }, 300);
}

function questionSex(tempSex){
  if(tempSex == 0){
    sex = "남자";
  }
  else{
    sex = "여자";
  }
  setTimeout(function(){
    $(`#questionSex`)[0].style.display = "none";
    $("#question1")[0].style.display = "block";
  }, 300);
}
function question(num, mbtiNum, add){
  mbtiList[mbtiNum] += add;
  setTimeout(function(){
    $(`#question${num}`)[0].style.display = "none";
    if(num == 12){
      $(".picture")[0].style.display = "block";
      mbtiCalculate();
      editDistance();
    } else{
      $(`#question${num+1}`)[0].style.display = "block";
    }
  }, 300);
}
async function init() {
  // the link to your model provided by Teachable Machine export panel
  if($("#face-image")[0].getAttribute("isuplaoded") != "true"){
    alert("사진을 첨부해주세요");
    return;
  }
  setTimeout(function(){
    $(".picture")[0].style.display = "none";
    $(".process")[0].style.display = "block";
  });
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

  model = await tmImage.load(modelURL, metadataURL);
  let image = document.getElementById("face-image");
  const prediction = await model.predict(image, false);
  for(let i = 0; i < prediction.length; i++){
    mbtiPercent[i] = mbtiPercent[i] * 0.3 + prediction[i].probability.toFixed(2) * 0.7;
  }

  let dog = mbtiCompare[mbtiPercent.indexOf(Math.max(...mbtiPercent))];
  $(".result__title")[0].innerHTML = `${name}님은`;
  $(".result__text--header")[0].innerHTML = dog.header;
  $(".result__image>img")[0].src = `./img/dog/${dog.name}.png`;
  $(".result__image--small>img")[0].src = `./img/dog/${dog.list[0]}.png`;
  $(".result__image--small>img")[1].src = `./img/dog/${dog.list[1]}.png`;
  $(".result__text")[0].innerHTML = dog.text;
  $(".result__image--text")[0].innerHTML = `견생연분<br><b>${dog.list[0]}</b>`;
  $(".result__image--text")[1].innerHTML = `견생원수<br><b>${dog.list[1]}</b>`;
  $(".process")[0].style.display = "none";
  $(".result")[0].style.display = "block";
  $(".result__logo")[0].style.display = "block";
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

      $('.picture__upload--image').attr('src', e.target.result);
      $('.picture__upload--content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
    $("#face-image")[0].setAttribute("isuplaoded", "true");
    $('.picture__upload--text').hide();
  } else {
    removeUpload();
  }
}
