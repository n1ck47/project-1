const viewAll = document.getElementById('view-all');
const show1 = document.getElementsByClassName("sec-3-show-1")
const show2 = document.getElementsByClassName("sec-3-show-2")
const show3 = document.getElementsByClassName("sec-3-show-3")

let display = ['none','none','none']

function updateEmojiDisplay(){
    console.log(show1)

    show1[0].style.display = display[0]
    show1[1].style.display = display[0]
    show1[2].style.display = display[0]

    show2[0].style.display = display[1]
    show2[1].style.display = display[1]
    show2[2].style.display = display[1]
    show2[3].style.display = display[1]
    show2[4].style.display = display[1]
    show2[5].style.display = display[1]

    show3[0].style.display = display[2]
    show3[1].style.display = display[2]
    show3[2].style.display = display[2]
}

updateEmojiDisplay();

console.log(viewAll.children[0])

function show() {
  if(display[0] == 'none'){
    display[0] = 'inline-block';
    updateEmojiDisplay();
  }
  else if(display[1] == 'none'){
    display[1] = 'inline-block';
    updateEmojiDisplay();
  }
  else if(display[2] == 'none'){
    display[2] = 'inline-block';
    updateEmojiDisplay();
    viewAll.style.display = 'none';
  }
}

viewAll.addEventListener('click',show);