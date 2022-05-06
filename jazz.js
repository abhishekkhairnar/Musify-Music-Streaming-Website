
console.log("hello world");
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progress');
let songItem = Array.from(document.getElementsByClassName ('songItem'));
let songIndex = 0;
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let currentsong = document.getElementById('playingSongInfo');
let currentsongcover = document.getElementById('currentsong');
let mute = document.getElementById('mutesong');
let audioElement = new Audio('./bollywood-songs/0.mp3');


let songs = [
    { songName : "Dolby Walya",filePath : './bollywood-songs/0.mp3',coverPath:'./marathicovers/0.jpg',singerName :"Ajay-Atul",duration:"03:22" },
    { songName : "chandra",filePath : './bollywood-songs/1.mp3',coverPath:'./marathicovers/1.jpg',singerName :"Ajay-Atul",duration:"03:52" },
    { songName : "mauli mauli",filePath : './bollywood-songs/2.mp3',coverPath:'./marathicovers/2.jpg',singerName :"Ajay-Atul",duration:"03:30" },
    { songName : "Dhadak",filePath : './bollywood-songs/3.mp3',coverPath:'./marathicovers/3.jpg',singerName :"Ajay-Atul",duration:"04:09" },
    { songName : "Apsara aali",filePath : './bollywood-songs/4.mp3',coverPath:'./marathicovers/4.jpg',singerName :"Ajay-Atul",duration:"02:51" },
    { songName : "morya",filePath : './bollywood-songs/5.mp3',coverPath:'./marathicovers/5.jpg',singerName :"Ajay-Atul",duration:"03:48" },
    { songName : "ag bai",filePath : './bollywood-songs/6.mp3',coverPath:'./marathicovers/6.jpg',singerName :" Ajay-Atul",duration:"03:06" },
    { songName : "khel mandla",filePath : './bollywood-songs/7.mp3',coverPath:'./marathicovers/7.jpg',singerName :"Ajay-Atul",duration:"03:08" },
    { songName : "mazi pandhari chi may",filePath : './bollywood-songs/8.mp3',coverPath:'./marathicovers/8.jpg',singerName :"Ajay-Atul",duration:"03:17" },
    { songName : "zingat",filePath : './bollywood-songs/9.mp3',coverPath:'./marathicovers/9.jpg',singerName :"Ajay-Atul",duration:"03:49" }
]

songItem.forEach((element ,i)=> {
    // element.getElementsByClassName('sno')[0].innerText = songs[i].songNo;
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName ('sname')[0].innerText = songs[i].songName;
    element.getElementsByClassName('singer')[0].innerText = songs[i].singerName;
    element.getElementsByClassName('duration')[0].innerText = songs[i].duration;

});



let song = document.getElementsByClassName('songItem');
console.log(song);



//handle masterplay play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        console.log(songIndex);
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 
        masterPlay.classList.remove('fa-play-circle');
        currentsong.innerHTML = songs[songIndex].songName;
        currentsongcover.src = songs[songIndex].coverPath;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})



//handle progressbar update
audioElement.addEventListener('timeupdate',()=>
{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
    
})
progressbar.addEventListener('change',()=>
{
    audioElement.currentTime = progressbar.value*audioElement.duration/100;
})
// audioElement.play();


previous.addEventListener('click',()=>
    {
        if(songIndex<=0)
        {
            songIndex=0;
        }
        else
        {
            songIndex -=1;
        }
        audioElement.src = `./bollywood-songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        currentsong.src = `./bollywood-cover/${songIndex}.jpg`;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        currentsong.innerHTML = songs[songIndex].songName;
        currentsongcover.src = songs[songIndex].coverPath;
    
    })
    next.addEventListener('click',()=>
    {
        if(songIndex>=9)
        {
            songIndex=0;

        }
        else
        {
            console.log(songIndex);
            songIndex +=1;
        }
        audioElement.src = `./bollywood-songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        currentsong.innerHTML = songs[songIndex].songName;
        currentsongcover.src = songs[songIndex].coverPath;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })

    let flag=1;
    mute.addEventListener('click',()=>
    {
        if(flag)
        {
            audioElement.volume = 0;
            flag=0;
            mutesong.classList.remove('fa-volume-high');
            mutesong.classList.add('fa-volume-xmark');
        }
        else
        {
            audioElement.volume = 1;
            flag = 1;
            mutesong.classList.remove('fa-volume-xmark');
            mutesong.classList.add('fa-volume-high');
        }
    })
   
    Array.from(document.getElementsByClassName('songItem')).forEach((Element)=>
{
    Element.addEventListener('click',(e)=>
    {
        let index = parseInt(e.target.id);
            audioElement.currentTime=0;
            console.log(songIndex);
            songIndex = index;
            audioElement.src = `./bollywood-songs/${index}.mp3`; 
            currentsong.innerHTML = songs[songIndex].songName;
            currentsongcover.src = songs[songIndex].coverPath;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
    })
})