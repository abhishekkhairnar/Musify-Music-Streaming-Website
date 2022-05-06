let masterPlay = document.getElementById('masterplay');
console.log(masterPlay);
let songIndex=0; 
let audioElement = new Audio('./songs/1.mp3')
let songItems = document.getElementsByClassName('box');
let myprogressbar = document.getElementById('myprogressbar');
let previous = document.getElementById('previous');
let songInfo = document.getElementById('songInfo');
let next = document.getElementById('next');

let songs = [
    {songName : "Believer"},          
    {songName : "Blank space"},
    {songName : "Cheap Thrills"},
    {songName : "Closer"},
    {songName : "Dancing with Stranger"},
    {songName : "Despacito"},
    {songName : "hate me"},
    {songName : "hot girl bummer"},
    {songName : "I like me better"},
    {songName : "see you again"},
    {songName : "Shape of you"},
    {songName : "Sorry"},
    {songName : "Treat you better"},
    {songName : "Cradles"},
    {songName : "Dangerous"},
    {songName : "Faded"},
    {songName : "Feeling good"},
    {songName : "friends"},
    {songName : "we own it"},
    {songName : "we don't talk anymore"},
    {songName : "Vienna"},
    {songName : "trampoline"},
    {songName : "Ultimate"},
    {songName : "Thunder clouds"},
    {songName : "Sunfower"},
    {songName : "Space Junk"},
    {songName : "Senorita"},
    {songName : "Sugar"},
    {songName : "Rise"},
    {songName : "Shallow"},
    {songName : "Side to Side"},
    {songName : "Rainberry"},
    {songName : "Push my luck"},
    {songName : "Myself"},
    {songName : "Make you mine"},
    {songName : "Lovely"},
]




//handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

audioElement.addEventListener('timeupdate',()=>
{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
    
})

myprogressbar.addEventListener('change',()=>
{
    audioElement.currentTime = myprogressbar.value*audioElement.duration/100;
  
})



const makeAllPlays= ()=>
{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
    {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}





Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>
{
    Element.addEventListener('click',(e)=>
    {
        makeAllPlays();
        let index = parseInt(e.target.id);
        if(audioElement.paused || audioElement.currentTime<=0)
        {
            
            audioElement.currentTime=0;
            console.log(songIndex);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            songIndex = index;
            audioElement.src = `./songs/${index}.mp3`; 
            songInfo.innerHTML = songs[index-1].songName;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
        else
        {
            songIndex = index;
            console.log(songIndex);
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            audioElement.pause();
        }
    })
})



    previous.addEventListener('click',()=>
    {
        if(songIndex<=1)
        {
            songIndex=1;
        }
        else
        {
            songIndex -=1;
        }
        audioElement.src = `./songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        songInfo.innerHTML = songs[songIndex-1].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
    })
    next.addEventListener('click',()=>
    {
        if(songIndex>=36)
        {
            songIndex=1;
        }
        else
        {
            songIndex +=1;
        }
        audioElement.src = `./songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        songInfo.innerHTML = songs[songIndex-1].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })




const makeAllPlays2 = ()=>
{
    Array.from(document.getElementsByClassName('songItemPlay2')).forEach((Element)=>
    {
        Element.classList.remove('fa-pause-circle');
        Element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay2')).forEach((Element)=>
{
    Element.addEventListener('click',(s)=>
    {
        makeAllPlays2();
        let Index2 = parseInt(s.target.id);
        if(audioElement.paused || audioElement.currentTime<=0)
        {
            audioElement.currentTime=0;
            s.target.classList.remove('fa-play-circle');
            s.target.classList.add('fa-pause-circle');
            audioElement.src = `./songs/${Index2}.mp3`;
            console.log(Index2);
            songInfo.innerHTML = songs[Index2-1].songName;
            audioElement.play();
            audioElement.currentTime = 0;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
        else
        {
            audioElement.currentTime=0;
            songIndex = Index2;
            songInfo.innerHTML = songs[Index2-1].songName;
            s.target.classList.remove('fa-pause-circle');
            s.target.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            audioElement.pause();
        }
    })
})



