import nextConnect from 'next-connect'
import firebase from 'firebase'
import { config } from '../../Firebase';

const app = nextConnect()

const fire = firebase.initializeApp(config);
const db = fire.firestore()


app.get((req, res) => {
    db.collection('posts')
    .orderBy("timestamp", "desc")
    .get()
    .then((snap) => {
        const posts = []
        snap.forEach((doc) => posts.push({id: doc.id, data: doc.data()}))
        console.log(posts)
        res.json(posts)
     })
})

app.post((req, res) => {
    db.collection('posts').add({
        imageURL: req.body.imageURL,
        caption: req.body.caption
    })
    res.send('Data sent')
})



export default app