import React from 'react'
import './VideoHeader.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIconOutlined from '@material-ui/icons/CameraAltOutlined';

function VideoHeader() {
    return (
        <div className='videoHeader'>
           <ArrowBackIosIcon/>
           <h3>Reels</h3>
           <CameraAltIconOutlined/>
             
        </div>
    )
}

export default VideoHeader
