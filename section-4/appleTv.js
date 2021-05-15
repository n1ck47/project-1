console.log(data);

bigCards = document.getElementById('big-cards');
bigCard = document.getElementsByClassName('big-card')[0];
bigCardHeaderImage = document.getElementsByClassName('big-card-header-image')[0];
bigCardHeaderText = document.getElementsByClassName('big-card-header-text')[0];
smallCards = document.getElementsByClassName('small-cards');

navigateLeft = document.getElementsByClassName('navigate-left')[0];
navigateRight = document.getElementsByClassName('navigate-right')[0];

const root = document.querySelector(':root');

function updateBigCard(index){
    root.style.setProperty('--big-image-big-card',`url('${data[index].big}')`);
    root.style.setProperty('--medium-image-big-card',`url('${data[index].medium}')`);
    root.style.setProperty('--small-image-big-card',`url('${data[index].small}')`);

    bigCardHeaderImage.style.backgroundImage = `url('${data[index].logo}')`
    bigCardHeaderText.innerHTML = data[index].name;
}

// Set the default big card image
let index = 0;
updateBigCard(index);


//Big Card Navigation
navigateLeft.addEventListener('click',()=>{
    if(index>0){
        index -=1;
    }
    else if(index==0){
        index = data.length -1;
    }
    updateBigCard(index);
})
navigateRight.addEventListener('click',()=>{
    if(index<data.length-1){
        index +=1;
    }else if(index == data.length -1){
        index = 0;
    }  
    updateBigCard(index);
})


//Traverse through the data and add small cards
data.forEach((currData,index)=>{

    //Add first row of small cards
    smallCard = document.createElement('div');
    smallCard.className = 'small-card';
    smallCard.style.backgroundImage = `url('${currData.big}')`
    headerText = document.createElement('div');
    headerText.className = 'small-card-header-text';
    headerText.innerHTML = currData.name;
    smallCard.appendChild(headerText);
    headerImage = document.createElement('div');
    headerImage.className = 'small-card-header-image';
    headerImage.style.backgroundImage = `url('${currData.logo}')`
    smallCard.appendChild(headerImage);
    smallCards[0].appendChild(smallCard);

    //Add second row of small cards
    smallCard = document.createElement('div');
    smallCard.className = 'small-card';
    smallCard.style.backgroundImage = `url('${currData.big}')`
    headerText = document.createElement('div');
    headerText.className = 'small-card-header-text';
    headerText.innerHTML = currData.name;
    smallCard.appendChild(headerText);
    headerImage = document.createElement('div');
    headerImage.className = 'small-card-header-image';
    headerImage.style.backgroundImage = `url('${currData.logo}')`
    smallCard.appendChild(headerImage);
    smallCards[1].appendChild(smallCard);
})





function handleInf(event) {
    if(bigCards.scrollLeft >= bigCards.scrollWidth - bigCards.offsetWidth - 100){
        bigCards.scrollLeft = 0;
    }
    console.log(bigCards.scrollLeft,bigCards.scrollWidth - bigCards.offsetWidth - 100);
}

//bigCards.addEventListener('scroll',handleInf);
bigCards.scrollLeft = bigCards.scrollWidth / 2;





let temp1 = 3, temp2 = 3;

let add1 = true, add2 = true;


smallCards[0].scrollLeft = smallCards[0].scrollWidth / 2;
smallCards[1].scrollLeft = smallCards[1].scrollWidth / 4;



// Slide animation for small cards
setInterval(()=>{
    // For Small Cards 1st
    // Start sliding Left
    if(smallCards[0].scrollLeft >= smallCards[0].scrollWidth - smallCards[0].offsetWidth - 100){
        add1 = false;
    }

    // Start sliding Right
    if(smallCards[0].scrollLeft == 0){
        add1 = true;
    }

    
    if(add1){
        smallCards[0].scrollLeft += temp1;  //Slide Right
    }
    else{
        smallCards[0].scrollLeft -= temp1;  //Slide Left
    }

    // For Small Cards 2nd

    // Start sliding Left
    if(smallCards[1].scrollLeft >= smallCards[1].scrollWidth - smallCards[1].offsetWidth - 10){
        add2 = false;
    }

    // Start sliding Right
    if(smallCards[1].scrollLeft == 0){
        add2 = true;
    }

    
    if(add2){
        smallCards[1].scrollLeft += temp2;  //Slide Right
    }
    else{
        smallCards[1].scrollLeft -= temp2;  //Slide Left
    }

},50)

// Change slide animation speed while mouse over
smallCards[0].addEventListener('mouseover',()=>{
    temp1 = 1;
})

smallCards[0].addEventListener('mouseleave',()=>{
    temp1 = 3;
})

smallCards[1].addEventListener('mouseover',()=>{
    temp2 = 1;
})

smallCards[0].addEventListener('mouseleave',()=>{
    temp2 = 3;
})


console.log(smallCards);
