var imgArray1 = [
  "assets/images/events/2023/research_innovation_club/apr23_1.jpeg",
  "assets/images/events/2023/research_innovation_club/apr23_2.jpeg",
  "assets/images/events/2023/research_innovation_club/apr23_3.jpeg",
  "assets/images/events/2023/research_innovation_club/apr23_4.jpeg",
];
var curIndex1 = 0;
var imgDuration1 = 5000;

function slideShow1() {
  document.getElementById("image1").src = imgArray1[curIndex1];
  curIndex1++;
  if (curIndex1 == imgArray1.length) {
    curIndex1 = 0;
  }
  setTimeout("slideShow1()", imgDuration1);
}
slideShow1();

var imgArray2 = [
  "assets/images/events/2023/cultural_club/apr23_1.jpeg",
  "assets/images/events/2023/cultural_club/apr23_2.jpeg",
];
var curIndex2 = 0;
var imgDuration2 = 5000;

function slideShow2() {
  document.getElementById("image2").src = imgArray2[curIndex2];
  curIndex2++;
  if (curIndex2 == imgArray2.length) {
    curIndex2 = 0;
  }
  setTimeout("slideShow2()", imgDuration2);
}
slideShow2();

var imgArray3 = [
  "assets/images/events/2023/personality_development_club/apr23_1.jpeg",
  "assets/images/events/2023/personality_development_club/apr23_2.jpeg",
  "assets/images/events/2023/personality_development_club/apr23_3.jpeg",
];
var curIndex3 = 0;
var imgDuration3 = 5000;

function slideShow3() {
  document.getElementById("image3").src = imgArray3[curIndex3];
  curIndex3++;
  if (curIndex3 == imgArray3.length) {
    curIndex3 = 0;
  }
  setTimeout("slideShow3()", imgDuration3);
}
slideShow3();

var imgArray4 = [
  "assets/images/events/2023/games/mar23_1.jpeg",
  "assets/images/events/2023/games/mar23_2.jpeg",
  "assets/images/events/2023/games/mar23_3.jpeg",
];
var curIndex4 = 0;
var imgDuration4 = 5000;

function slideShow4() {
  document.getElementById("image4").src = imgArray4[curIndex4];
  curIndex4++;
  if (curIndex4 == imgArray4.length) {
    curIndex4 = 0;
  }
  setTimeout("slideShow4()", imgDuration4);
}
slideShow4();
