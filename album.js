var albumObj = {
    '001': {
        title:'I Tried so Hard',
        artist:'Bone Thugs n Harmony',
        label: ['Interscope', 'Full Surface'],
        year: 2007,
        price: 89.95
    },    

    '002': {
         title:'When You Believe',
         artist:['Mariah Carey','Whitey Huston'],
         label: ['DreamWorks','Arista','Columbia'],
         year: 1998,
         price: 23.99
     },    

     '003': {
         title:'Wonderland',
         artist:'Natalie Kills',
         label: ['will.i.am','CherrytreeKon', 'LiveInterscope'],
         year: 2011,
         price: 5.93
     },    

     '004': {
         title:'One Reason',
         artist:'Fade',
         label: 'Universal Music Japan',
         year: 2011,
         price: 40.41
     },    

     '005': {
         title:'Never Forget',
         artist:'Bone Thugs n Harmony',
         label: 'Full Surface','Interscope',
         year: 2007,
         price: 1.29
     },    

     '006': {
         title:'Bring Me to Life',
         artist:'Evanesence',
         label: 'Wind-up',
         year: 2003,
         price: 43.72
     },    

}

     var header = document.querySelector('.header');
header.innerText = "Lawrenciya's Favorite Ablum"

var albumCard = document.querySelectorAll('.album-card');

albumCard.forEach(item =>) {
    for(key in albumObj) {
        item.children[0].innerText = albmuObj[key].title;
        item.children[1].innerText = albumObj[key].artist;
        item.children[2].innerText = albumObj[key].label;
        item.children[3].innerText = albumObj[key].year;
        item.children[4].innerText = albumObj[key].price;
        delete albumObj[key]
        break;
    }
;}

var movieTitle = document.querySelectorAll('album-title');
var genre = document.querySelectorAll('.artist');
var cast = document.querySelectorAll('label');
var cast = document.querySelectorAll('year');
var cast = document.querySelectorAll('price');