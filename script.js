let currentPhoto = 0;
let imagesData = [{
    photo: 'images/P1050670.jpg',
    title: 'Großglockner',
    description: 'A műemlékvédelem alatt álló Großglockner alpesi panorámaút'
  },
  {
    photo: 'images/P1050704.jpg',
    title: 'Fenn a csúcson',
    description: 'Großglockneri csúcs'
  },
  {
    photo: 'images/P1050770.jpg',
    title: 'Fusch',
    description: 'Fusch-i látkép az erkélyről'
  },  
  {
    photo: 'images/IMG_20190717_105959.jpg',
    title: 'Taxenbach',
    description: 'Üdvözöljük Taxenbach-ban'
  },
  {
    photo: 'images/IMG_20190717_105431.jpg',
    title: 'Vízesés',
    description: 'Vízesés Taxenbach-ban'
  },
  {
    photo: 'images/IMG_20190717_114147.jpg',
    title: 'Mélység felett',
    description: 'Mélység felett Taxenbach-ban'
  },
  {
    photo: 'images/IMG_20190717_114214.jpg',
    title: 'Hegymászók',
    description: 'Hegymászók Taxenbach-ban'
  },
  {
    photo: 'images/IMG_20190717_181943.jpg',
    title: 'Hattyúk',
    description: 'Hattyúcsalád a Zell-tónál'
  }
  
];

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    $(`.thumbnail-fullPhoto .arrow-up`).css("display", "none");    
    $(`.thumbnail-fullPhoto .thumbnail-photo`).css("box-shadow", "none");
    $(`.thumbnail-fullPhoto:nth-child(${photoNumber + 1}) .arrow-up`).css("display", "block"); 
    $(`.thumbnail-fullPhoto:nth-child(${photoNumber + 1}) .thumbnail-photo`).css("box-shadow", "0 0 4px black");   
}


imagesData.forEach((data, index)=>{        
    $("#thumbnail-container").append(`<div class="thumbnail-fullPhoto"></div>`)
    $(".thumbnail-fullPhoto:last-child").append(`<div class="thumbnail-title">${data.title}</div>`);
    $(".thumbnail-fullPhoto:last-child").append(`<div class="arrow-down"></div>`);
    $(".thumbnail-fullPhoto:last-child").append(`<div class="arrow-up"></div>`);
    $(".thumbnail-fullPhoto:last-child").append(`<img class="thumbnail-photo" src="${data.photo}" alt="" data-number="${index}">`);    
})

loadPhoto(currentPhoto);

$(".thumbnail-photo").click((event) => {    
    currentPhoto =parseInt($(event.target).attr('data-number'));    
    loadPhoto(currentPhoto);    
})


$("#right").click(() => {
    if(currentPhoto < imagesData.length - 1) {
        currentPhoto++;
    } else {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
})

$("#left").click(() => {
    if(currentPhoto > 0) {
        currentPhoto--;
    } else {
        currentPhoto = imagesData.length - 1;
    }
    loadPhoto(currentPhoto);
})
