import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import style from '../styles/VideoPlayer.module.css'

const VideoPlayer = ({ videoUrl }) => {
    const [progress, setProgress] = useState(0);
    const playerRef = useRef(null);

    const handleProgress = (progressState) => {
        setProgress(progressState.played);
    };

    const handleSeek = (e) => {
        const seekTime = parseFloat(e.target.value);
        playerRef.current.seekTo(seekTime);
    };

    return (
        <div>
            <ReactPlayer
                ref={playerRef}
                url={videoUrl}
                playing
                controls
                onProgress={handleProgress}
            />
            <input
                className={`${style.progressBar}  ${style.slider}`}
                type="range"
                min={0}
                max={1}
                step="any"
                value={progress}
                onChange={handleSeek}
            />
        </div>
    );
};

export default VideoPlayer;