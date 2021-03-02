import React from 'react'


const Stories = () => {
    return (
        <div className='stories'>
            <div className="story">
                <img src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg" alt="story_one"/>
            </div>
            <div className="story">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL1RxDUZR_7axXY1nieWsvZ6sJhYOSU7dgQw&usqp=CAU" alt="two"/>
            </div>
            <div className="story">
                <img src="https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/05/28/big-ben-london-england.jpg.rend.hgtvcom.1280.960.suffix/1491582155388.jpeg" alt="three"/>
            </div>
            <div className="story">
                <img src="https://live.staticflickr.com/4343/36724742800_3e34a2b2b5_b.jpg" alt="four"/>
            </div>
            <style jsx>{`
            .stories {
                display: flex;
                padding: 20px;
            }
            .story {
                width: 140px;
                height: 200px;
                overflow: hidden;
                border-radius: 20px;
                margin-right: 15px;
                transition: 0.2s ease
            }
            .story img {
                height: 100%;
            }

            .story:hover {
                transform: scale(1.05)
            }
            `}
            </style>
        </div>
    )
}

export default Stories
