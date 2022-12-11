import { useRef, useEffect } from "react";

function useWebcam() {
  // Create a ref to store the video element
  const videoRef = useRef(null);

  // Use useEffect to access the webcam when the component is mounted
  useEffect(() => {
    // Prompt user for permission to access the webcam
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        // Set the source of the video element to the MediaStream from the webcam
        videoRef.current.srcObject = stream;

        // Play the video
        videoRef.current.play();
        console.log(videoRef);
      });
  }, []);

  return videoRef;
}

export default useWebcam;
