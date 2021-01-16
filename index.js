let name = '';
let mbtiList = [0, 0, 0, 0];

function start(){
  // let name = $(".main__button--name").getAttribute("value");
  name = document.getElementById('name').value;
  $(".main").style.display = "none";
  $("#question1").style.display = "block";
}

function question(num, mbtiNum, add){
  mbtiList[mbtiNum] += add;
  $(`#question${num}`).style.display = "none";
  if(num == 12){
    $(".picture__test").style.display = "block";
  } else{
    $(`#question${num+1}`).style.display = "block";
  }
  console.log(mbtiList);
}

var $ = function ( elem ) {
 var dom = document.querySelectorAll( elem ) , rtnVal = null ;
 if ( dom.length == 0 ) rtnVal = undefined ;
 if ( dom.length == 1 ) rtnVal = dom[0] ;
 if ( dom.length > 1 ) rtnVal = dom ;
 return rtnVal ;
} ;
