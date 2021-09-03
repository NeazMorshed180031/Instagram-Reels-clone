import React, { useState,useRef } from 'react'
import "./VideoCard.css"
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
    const [isVideoPLaying ,setIsvideoPlaying]=useState(false)
    const videoRef=useRef(null)
    const onVideoPress=()=>{
        if(isVideoPLaying){
              videoRef.current.pause();
              setIsvideoPlaying(false);

        }else{
            videoRef.current.play();
            setIsvideoPlaying(true);
        }

    }
    return (
        <div className="videocard">
            <VideoHeader/>
           <video
           ref={videoRef}
           autoPlay={false}
           onClick={onVideoPress}
           className='videocard_player'
           src={url}
           alt="Video"
           /> 
        
        <VideoFooter
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            likes={likes}
            shares={shares}
            />
           
        </div>
    )
}

export default VideoCard
