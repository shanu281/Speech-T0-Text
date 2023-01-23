import React from "react";
import { useEffect } from "react";
import "./style.css"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Speech = () => {
  let { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
    console.log("listening start");
  }, []);

  const handleStart = (event) => {
    event.target.value =   SpeechRecognition.startListening
    console.log("Start")
 }
 const handleStop = (event) => {
    event.target.value =   SpeechRecognition.stopListening
    console.log("Stop")

 }
 const handleReset = (event) => {
    event.target.value =   resetTranscript
    console.log("reset")

 }
  return (
    <div>
      <div>
        <textarea value={transcript}></textarea>
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
export default Speech;
