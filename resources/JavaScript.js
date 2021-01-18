var NumberOfWords = 6

var words = new BuildArray(NumberOfWords)

// define random words:
words[1] = "Pleasure"
words[2] = "Family"
words[3] = "Romance"
words[4] = "Knowledge"
words[5] = "Fortune"
words[6] = "Popularity"

function BuildArray(size){
  this.length = size
  for (var i = 1; i <= size; i++){
  this[i] = null}
  return this
}

function PickRandomWord(frm) {
  // Generate a random number between 1 and NumberOfWords
  var rnd = Math.ceil(Math.random() * NumberOfWords)

  // Display the word inside the text box
  frm.WordBox.value = words[rnd]
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
