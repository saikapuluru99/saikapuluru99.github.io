const typing = function(txtElement, words, wait=1000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait= parseInt(wait, 10);
  this.type();
  this.reverse = false;
}
typing.prototype.type = function() {
  const wordInd = this.wordIndex % this.words.length;
  const fullTxt = this.words[wordInd];
  if(this.reverse) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  console.log(this.txt);
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  let typeSpeed = 40;
  if(this.reverse) {
    typeSpeed /= 2;
  }
  if(!this.reverse && this.txt==fullTxt){
    typeSpeed = this.wait;
    this.reverse = true;
  } else if (this.reverse && this.txt == '') {

    this.reverse = false;
    this.wordIndex++;
    typeSpeed = 100;
  }
  setTimeout(() => this.type(), typeSpeed)
}
document.addEventListener('DOMContentLoaded', init);
function init(){
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  new typing(txtElement, words, wait);
}
