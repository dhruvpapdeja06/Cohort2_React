
// Anything inside the public folder is served directly by the browser, so it can be accessed using a relative URL, without importing it in JavaScript.
import React, {useRef} from 'react'

const Video = () => {
  
    const videoRef = useRef(null);
    

    function handleStart(){
        videoRef.current.play();
    }

    function handleStop(){
        videoRef.current.pause();
    }

    function handleRestart(){
        videoRef.current.currentTime = 0;
        videoRef.current.play();
    }

    function handleBackward(){
        videoRef.current.currentTime -= 10;
        videoRef.current.play();
    }

    function handleForward(){
        videoRef.current.currentTime += 10;
        videoRef.current.play();
    }


    return (
    <div>
        <video src="future.mp4" height={300} width={400} ref={videoRef}></video>
        <div>
            <button onClick={handleStart} >Start</button>
            <button onClick={handleStop}>Pause</button>
            <button onClick={handleRestart}>Restart</button>
            <button onClick={handleBackward}>⏪ -10s</button>
            <button onClick={handleForward}>⏩ +10s</button>
        </div>
    </div>
  )
}

export default Video;