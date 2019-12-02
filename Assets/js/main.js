const typing = function(txtElement, words, wait=2000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.Index = 0;
  this.wait= parseInt(wait, 10);
  this.type();
  this.reverse = false;
}
typing.prototype.type = function() {
  const wordInd = this.Index % this.words.length;
  const currTxt = this.words[wordInd];
  if(this.isDeleting) {
    this.txt = currTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = currTxt.substring(0, this.txt.length + 1);
  }
  this.txtElement.innerHTML = '<span class="txt">${this.txt}</span>';
  setTimeout(() => this.type(), 500)
}
document.addEventListener('DOMContentLoaded', init);
function init(){
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  new typing(txtElement, words, wait);
}
