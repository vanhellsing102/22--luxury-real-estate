import React from 'react';

const Video = () => {
    return (
        <div className='flex justify-center mt-16'>
            <iframe width="1300" height="500" src="https://www.youtube.com/embed/PHhuIg6oLC4?si=Y-SjHuE2B_81wyci" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    );
};

export default Video;