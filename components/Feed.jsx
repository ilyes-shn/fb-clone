import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Post from './Post'

const Feed = () => {
const [posts, setPosts] = useState([])

useEffect(() => {
    axios.get('/api/posts').then((data) => {
        setPosts(data.data)
    }).catch(err => console.log(err))
},[])

    return (
        <div>
            {
                posts.map((post) => <Post imageURL={post.data.imageURL} caption={post.data.caption}/>)
            }
        </div>
    )
}

export default Feed
