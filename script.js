console.log("welcome to spotify");

// initialize the variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSong = document.getElementById("masterSong");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "Naan pizhai", filePath: "musics/audio1.mp3", coverPath:"images/img1.jpg"},
    {songName: "Raatan lambiyan", filePath: "musics/audio2.mp3", coverPath:"images/img2.jpg"},
    {songName: "Pala Palli Thiruppalli", filePath: "musics/audio3.mp3", coverPath:"images/img3.jpg"},
    {songName: "Come on come on kalavathi", filePath: "musics/audio4.mp3", coverPath:"images/img4.jpg"},
    {songName: "Butta Bomma", filePath: "musics/audio5.mp3", coverPath:"images/img5.jpg"},
    {songName: "Sri valli", filePath: "musics/audio6.mp3", coverPath:"images/img6.jpg"},
    {songName: "Pottu thotta pournami", filePath: "musics/audio7.mp3", coverPath:"images/img3.jpg"},
    {songName: "Adi penney", filePath: "musics/audio8.mp3", coverPath:"images/img1.jpg"},
    {songName: "Neeyum Naanum anbe", filePath: "musics/audio9.mp3", coverPath:"images/img6.jpg"},
    {songName: "Darshana", filePath: "musics/audio10.mp3", coverPath:"images/img4.jpg"},
]


songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})



// audioElement.play();

// handle play / pasue
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;   
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})

// Listen to events

audioElement.addEventListener("timeupdate",()=>{
    // update seekbar
    
progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
console.log(progress);
myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
})
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) =>{
    element.addEventListener("click", (e) =>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSong.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    })
})

document.getElementById("next").addEventListener("click", ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSong.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
})

document.getElementById("previous").addEventListener("click", ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSong.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
})