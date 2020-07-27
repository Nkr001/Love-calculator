$(document).ready(function () {
    $("#find").click(function () {
      let x = document.getElementById("boy").value;
      let y = document.getElementById("girl").value;
      var result;
      var arr;
      var arb;
      var sum = 0;
      if (x == y) {
        result = 100;
      }
      arr = x.split("");
      arb = y.split("");
      var alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      for (let ele of arr) {
        var letter = ele;
        var letterPosition = alphabet.indexOf(ele) + 1;
        sum += letterPosition;
      }
      for (let ele of arb) {
        var letter = ele;
        var letterPosition = alphabet.indexOf(ele) + 1;
        sum += letterPosition;
      }
      if (sum > 50 && sum < 100) {
        result = sum;
      } else if (sum < 50) {
        sum += 50;
        result = sum;
      } else if (sum > 100) {

        result = Math.floor((Math.random() * 100));
      } else {
        result = 90;
      }

      $("#h2").html(result);
    });
  });