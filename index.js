const video = document.querySelector("video");
const button = document.querySelector("button");


function MediaPlayer(config){/* Se hace un funcion a manera de clase */
    this.media = config.el
}

MediaPlayer.prototype.play = () =>{
    video.play()
}
MediaPlayer.prototype.stop = () =>{
    video.pause()
}

MediaPlayer.prototype.togglePlay = () =>{
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

//se puede entender que va a crear un player de la clase MediaPlayer
const player = new MediaPlayer({el: video})

button.onclick = () => {
    player.togglePlay()
    console.log(video.paused)
}


console.log(video.paused)
console.log(button)
console.log("nuevo")


/* config.el hace referencia al elemento del reproductor en el HTML,
lo que hacemos en asignarlo a la propiedad this.media dentro del MediaPlayer, para que desde este MediaPlayer podamos interacturar con el: play, pause, mute, unmute.

Aca un resumen:
config.el -> elemento <video> </video>
this.media -> propiedad en donde guardamos el elemento
MediaPlayer -> clase que se encarga de ejecutar los plugins y de intereactuar */