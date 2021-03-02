import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Post from './Post'
import firebase from 'firebase'
import { config } from '../Firebase';

const fire = firebase.initializeApp(config);
const db = fire.firestore()

const Feed = () => {
const [posts, setPosts] = useState([])

/* useEffect(() => {
    axios.get('/api/posts').then((data) => {
        setPosts(data.data)
    }).catch(err => console.log(err))
},[])*/

const unsubscibe = db.collection('posts').orderBy("timestamp", "desc")
.onSnapshot((snap) => {
    const posts = []
    snap.forEach((doc) => posts.push({id: doc.id, data: doc.data()}))
    console.log(posts)
    setPosts(posts)
 })

 unsubscibe()

    return (
        <div>
            {
                posts.map((post) => <Post imageURL={post.data.imageURL} caption={post.data.caption}/>)
            }
        </div>
    )
}

export default Feed
