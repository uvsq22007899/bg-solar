let inputLatin;
let arabicText = "";
let infoText = "Écris ton prénom :";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont("sans-serif");

  inputLatin = createInput("");
  inputLatin.position(20, 20);       
  inputLatin.size(220);
  inputLatin.input(updateArabic);    
}

function draw() {
  background(20);


  fill(200);
  textSize(18);
  text(infoText, width / 2, 50);


  fill(255, 200, 200);
  textSize(80);
  text(arabicText, width / 2, height / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function updateArabic() {
  const latin = inputLatin.value().toLowerCase();
  arabicText = latinToArabic(latin);
}

function latinToArabic(str) {
  const map = {
    "a": "ا",
    "b": "ب",
    "c": "ك",
    "d": "د",
    "e": "e",   
    "f": "ف",
    "g": "ج",
    "h": "ه",
    "i": "ي",
    "j": "ج",
    "k": "ك",
    "l": "ل",
    "m": "م",
    "n": "ن",
    "o": "و",
    "p": "ب",
    "q": "ق",
    "r": "ر",
    "s": "س",
    "t": "ت",
    "u": "و",
    "v": "ف",
    "w": "و",
    "x": "كس",
    "y": "ي",
    "z": "ز",
    " ": " "
  };

  let result = "";
  for (let char of str) {
    if (map[char]) {
      result += map[char];
    } else {
      result += char; 
    }
  }
  return result;
}
