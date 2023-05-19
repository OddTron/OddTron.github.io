function sendAlert(){
    alert("Hello, World!");
}

function bigger(){
  const text = document.getElementById('Text Area')
   text.style.fontSize = '2em'
}

function fancy(){
  const text = document.getElementById('Text Area')
  text.style.fontWeight = 'bold'
  text.style.color = 'blue'
  text.style.textDecoration = 'underline'
  this.checked = false;
}

function boring(){
  const text = document.getElementById('Text Area')
  text.style.fontWeight = 'normal'
  text.style.color = 'black'
  text.style.textDecoration = 'none'
    this.checked = false;
}

function moo(){
  const text = document.getElementById('txtArea')
  text.style.textTransform = 'uppercase'
  const sent = text.value.split('.')
  for (let i = 0; i < sent.length - 1; i++) {
    sent[i] = sent[i] + '-Moo'
  }
  text.value = sent.join('.')
}