section4_bigCards = document.getElementById('section-4-big-cards');
section4_bigCard = document.getElementsByClassName('section-4-big-card')[0];
section4_bigCardHeaderImage = document.getElementsByClassName('section-4-big-card-header-image')[0];
section4_bigCardHeaderText = document.getElementsByClassName('section-4-big-card-header-text')[0];
section4_smallCards = document.getElementsByClassName('section-4-small-cards');

section4_navigateLeft = document.getElementsByClassName('section-4-navigate-left')[0];
section4_navigateRight = document.getElementsByClassName('section-4-navigate-right')[0];

const root = document.querySelector(':root');

function section4_updateBigCard(index){
    root.style.setProperty('--big-image-big-card',`url('${section4_data[index].big}')`);
    root.style.setProperty('--medium-image-big-card',`url('${section4_data[index].medium}')`);
    root.style.setProperty('--small-image-big-card',`url('${section4_data[index].small}')`);

    section4_bigCardHeaderImage.style.backgroundImage = `url('${section4_data[index].logo}')`
    section4_bigCardHeaderText.innerHTML = section4_data[index].name;

    document.getElementById('section-4-genre').innerHTML = section4_data[index].genre;
    document.getElementById('section-4-desc').innerHTML = section4_data[index].desc;
}

// Set the default big card image
let section4_index = 0;
section4_updateBigCard(section4_index);


//Big Card Navigation
section4_navigateLeft.addEventListener('click',()=>{
    if(section4_index>0){
        section4_index -=1;
    }
    else if(section4_index==0){
        section4_index = section4_data.length -1;
    }
    section4_updateBigCard(section4_index);
})
section4_navigateRight.addEventListener('click',()=>{
    if(section4_index<section4_data.length-1){
        section4_index +=1;
    }else if(section4_index == section4_data.length -1){
        section4_index = 0;
    }  
    section4_updateBigCard(section4_index);
})


//Traverse through the data and add small cards
section4_data.forEach((currData,index)=>{

    //Add first row of small cards
    section4_smallCard = document.createElement('div');
    section4_smallCard.className = 'section-4-small-card';
    section4_smallCard.style.backgroundImage = `url('${currData.big}')`
    section4_headerText = document.createElement('div');
    section4_headerText.className = 'section-4-small-card-header-text';
    section4_headerText.innerHTML = currData.name;
    section4_smallCard.appendChild(section4_headerText);
    section4_headerImage = document.createElement('div');
    section4_headerImage.className = 'section-4-small-card-header-image';
    section4_headerImage.style.backgroundImage = `url('${currData.logo}')`
    section4_smallCard.appendChild(section4_headerImage);
    section4_smallCards[0].appendChild(section4_smallCard);

    //Add second row of small cards
    section4_smallCard = document.createElement('div');
    section4_smallCard.className = 'section-4-small-card';
    section4_smallCard.style.backgroundImage = `url('${currData.big}')`
    section4_headerText = document.createElement('div');
    section4_headerText.className = 'section-4-small-card-header-text';
    section4_headerText.innerHTML = currData.name;
    section4_smallCard.appendChild(section4_headerText);
    section4_headerImage = document.createElement('div');
    section4_headerImage.className = 'section-4-small-card-header-image';
    section4_headerImage.style.backgroundImage = `url('${currData.logo}')`
    section4_smallCard.appendChild(section4_headerImage);
    section4_smallCards[1].appendChild(section4_smallCard);
})



section4_bigCards.scrollLeft = section4_bigCards.scrollWidth / 2;

let section4_smallCardSpeed1 = 3, section4_smallCardSpeed2 = 3;

let add1 = true, add2 = true;


section4_smallCards[0].scrollLeft = section4_smallCards[0].scrollWidth / 2;
section4_smallCards[1].scrollLeft = section4_smallCards[1].scrollWidth / 4;



// Slide animation for small cards
setInterval(()=>{
    // For Small Cards 1st
    // Start sliding Left
    if(section4_smallCards[0].scrollLeft >= section4_smallCards[0].scrollWidth - section4_smallCards[0].offsetWidth - 100){
        add1 = false;
    }

    // Start sliding Right
    if(section4_smallCards[0].scrollLeft == 0){
        add1 = true;
    }

    
    if(add1){
        section4_smallCards[0].scrollLeft += section4_smallCardSpeed1;  //Slide Right
    }
    else{
        section4_smallCards[0].scrollLeft -= section4_smallCardSpeed1;  //Slide Left
    }

    // For Small Cards 2nd

    // Start sliding Left
    if(section4_smallCards[1].scrollLeft >= section4_smallCards[1].scrollWidth - section4_smallCards[1].offsetWidth - 10){
        add2 = false;
    }

    // Start sliding Right
    if(section4_smallCards[1].scrollLeft == 0){
        add2 = true;
    }

    
    if(add2){
        section4_smallCards[1].scrollLeft += section4_smallCardSpeed2;  //Slide Right
    }
    else{
        section4_smallCards[1].scrollLeft -= section4_smallCardSpeed2;  //Slide Left
    }

},50)

// Change slide animation speed while mouse over
section4_smallCards[0].addEventListener('mouseover',()=>{
    section4_smallCardSpeed1 = 1;
})

section4_smallCards[0].addEventListener('mouseleave',()=>{
    section4_smallCardSpeed1 = 3;
})

section4_smallCards[1].addEventListener('mouseover',()=>{
    section4_smallCardSpeed2 = 1;
})

section4_smallCards[1].addEventListener('mouseleave',()=>{
    section4_smallCardSpeed2 = 3;
})
