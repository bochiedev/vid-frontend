import styles from '../styles/Home.module.css'
import { useRef, useEffect } from 'react';
import flvjs from 'flv.js';

export default function Home() {

  const video = useRef(null);


  const startStream = () => {


    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(function (stream) {


          video.current.srcObject = stream;
          video.current.play();


        })
        .catch(function (error) {
          console.log("Something went wrong!");
        });
    }
  }

  const EndStream = () => {
    var stream = video.current.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      track.stop();
    }

    video.current.srcObject = null;
  }



  return (
    <div id={styles.container}>

      <video autoPlay id={styles.videoElement} ref={video}>

      </video>
      <button className="btn btn-primary" onClick={() => startStream()}>Start Stream</button>
      <button className="btn btn-primary" onClick={() => EndStream()}>End Stream</button>


    </div>
  )
}
