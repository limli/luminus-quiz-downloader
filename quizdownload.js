qns = document.getElementsByClassName("question-view")

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

style = `
<style>
.option-content{display:flex;align-items: center;}
</style>
`
str = style;
for(let q of qns){
  const clonedQ = q.cloneNode(true);
  for(let box of clonedQ.querySelectorAll('input')){
    if((box.type == "checkbox" || box.type == "radio") && box.checked){
      box.setAttribute('checked', true);
    }
  }
  for(let box of clonedQ.querySelectorAll('textarea')){
    box.innerText = box.value;
  }
  str += clonedQ.innerHTML;
}

download("myquiz.html", str);
