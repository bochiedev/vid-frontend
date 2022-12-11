import React from "react";
import { useWebcam } from "../helpers/useWebcam";

function Webcam() {
  // Use the useWebcam hook to access the webcam
  const videoRef = useWebcam();

  return <video ref={videoRef} />;
}

export default Webcam;
