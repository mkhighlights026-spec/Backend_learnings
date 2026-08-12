console.log('lets start js');

    let currentSong = new Audio;
    let songs;

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);

    if(isNaN(seconds) || seconds <0){
        return "00:00"
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (secs < 10) {
        secs = "0" + secs;
    }

    return `${minutes}:${secs}`;
}


async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/clone%20spotify/songs/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("songs")[1])
        }

    }
    return songs;
}


const playMusic = (track, pause = false) => {
    // let audio = new Audio("songs/" +track)
    currentSong.src = ("songs/" +track)
    if(!pause){
        currentSong.play()
        play.src = "svg/pause.svg"

    }
    document.querySelector(".songInfo").innerHTML = decodeURI(track);
    document.querySelector(".songTime").innerHTML = "00:00 / 00:00";
}

async function displayAlbums() {
    let a = await fetch("http://127.0.0.1:3000/clone%20spotify/songs/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response
    let anchors = div.getElementsByTagName("a")
    Array.from(anchors).forEach(e=>{
        console.log(e.href);
        
        if(e.href.includes("/songs")){
            console.log(e.href.split("/").slice(-2)[0]);
            
        }
    })
}


async function main() {
    songs = await getSongs()
    console.log(songs)
    playMusic(songs[0], true)


    //diplay all the albums on the page
    displayAlbums()


    let songUl = document.querySelector(".songsList").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + `<li>
                        <div class="listSongsCard">
                            <img class="invert" src="svg/music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ").replaceAll("%5C", "")}</div>
                                <div>Moiz khan</div>
                            </div>
                            <div class="playnow">
                                <div>PlayNow</div>
                                <img class="invert" src="svg/play.svg" alt="">
                            </div>
                        </div>
                          </li>`
    }

    //event lisner for songs list cards
    Array.from(document.querySelector(".songsList").getElementsByTagName("li")).forEach(element => {
        element.addEventListener("click", () => {
            console.log(element.querySelector(".info").firstElementChild.innerHTML)
            playMusic(element.querySelector(".info").firstElementChild.innerHTML)

        })

    });


    //event listener for clicking play
    play.addEventListener("click", ()=>{
        if(currentSong.paused){
            currentSong.play()
            play.src = "svg/pause.svg"
        }
        else{
            currentSong.pause()
            play.src = "svg/play.svg"
        }
    })


    //listener to timeupdate event
    currentSong.addEventListener("timeupdate",()=>{
        console.log(currentSong.currentTime, currentSong.duration);
        
        document.querySelector(".songTime").innerHTML = `${formatTime(currentSong.currentTime)} : ${formatTime(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration)*100 + "%";
    })



    //Event listener to seekbar
    document.querySelector(".seekBar").addEventListener("click", e =>{
        let percent = (e.offsetX/ e.target.getBoundingClientRect().width)*100
        document.querySelector(".circle").style.left = percent + "%";

        currentSong.currentTime = ((currentSong.duration) * percent)/ 100;
        
    })


    //Event listner for libraryDrawer
    document.querySelector(".libraryDrawr").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "0";
    })



    //Event listner for close
    document.querySelector(".close").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "-200%";
    })


    //Evernt listner for next
    next.addEventListener("click", ()=>{
        currentSong.paused
        console.log(currentSong);
        
        console.log('Next clicked');
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if((index+1)< songs.length){
            playMusic(songs[index + 1])   
        }
})

    //Evernt listner for previous
    previous.addEventListener("click", ()=>{
        currentSong.paused
        console.log('previous clicked');
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if((index-1) < songs.length){
            playMusic(songs[index - 1])   
        }
    })


    //Event listner for volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e)=>{
        console.log(e.target, e.target.value);
        currentSong.volume = parseInt(e.target.value)/100;
        if(currentSong.volume == 0){
            document.querySelector(".volume").getElementsByTagName("img")[0].src = "svg/nextsong.svg"
        }
        else{
            document.querySelector(".volume").getElementsByTagName("img")[0].src = "svg/volume.svg"
        }
        
    })

}

main()