import React,{useRef,useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'

const Player = ( { currentSong, isPlaying,setisPlaying} )=>{
    const audioRef = useRef(null);
    const [currentSongInfo, setcurrentSongInfo] = useState({
        currentTime:0,
        duration:0
    })

    const   playHandler = () => {
       if(isPlaying){
           audioRef.current.pause();
           setisPlaying(!isPlaying)
       }else{
           audioRef.current.play();
           setisPlaying(!isPlaying)
       }

    }

    const timeUpdateHandler = (e)=>{
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        setcurrentSongInfo({...currentSongInfo,currentTime,duration})
    }

    const formatTime = (time)=>{
        return(Math.floor(time/60) + ":" + ("0" + Math.floor(time%60)).slice(-2))
    }
    const dragHandler = e =>{
        audioRef.current.currentTime = e.target.value
        setcurrentSongInfo({...currentSongInfo,currentTime:e.target.value})
    }
    return(
        <div className="player">
            <div className="time-control">
                <p>{formatTime(currentSongInfo.currentTime)}</p>
                <input min={0} max={currentSongInfo.duration} value={currentSongInfo.currentTime} onChange={dragHandler} type="range"/>
                <p>{formatTime(currentSongInfo.duration)}</p>
            </div>
            <div className="play-control">
            <FontAwesomeIcon className='skip-back'size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playHandler} className='play' size="2x" icon={faPlay} />
                <FontAwesomeIcon className='skip-forward' size="2x" icon={faAngleRight} />
            </div>
            <audio onTimeUpdate={timeUpdateHandler}  onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player;