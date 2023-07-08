var n1 = Math.random();

var dv1 = Math.floor(n1 * 6) + 1;

var n2 = Math.random();

var dv2 = Math.floor(n2 * 6) + 1;


if (dv1 === dv2) {
  document.getElementsByTagName("h1")[0].innerHTML = "DRAW !!!!!! 😍";
} else if (dv1 > dv2) {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 1 wins 🥇";
} else {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 2 wins 🥇";
}

var p1 = "images/dice"+dv1+".png";
var p2 = "images/dice"+dv2+".png";

document.querySelector(".img1").setAttribute("src",p1);
document.querySelector(".img2").setAttribute("src",p2);
