import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>{
    
    const videoItems = props.videos.map(
        (video) => {return <VideoListItem video={video}/>}
    );


    return(
        <div>
        <ul className="list-group">
            {videoItems}
        </ul>
        </div>
    );
};
export default VideoList;
