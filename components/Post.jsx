import React from 'react'

const Post = ({caption, imageURL}) => {
    return (
        <div className="post">
            <h3>{caption}</h3>
            <img src={imageURL} alt={imageURL}/>
        <style jsx>{`
            .post {
                width: 100%;
                background-color: rgba(255,255,255,0.7);
                margin: 20px auto;
                overflow: hidden;
                border-radius: 15px
            }
            .post img {
                width: 100%;
            }

            .post h3 {
                padding: 10px;
            }
            `}</style>
        </div>
    )
}

export default Post
