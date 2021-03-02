import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {
    const [caption, setCaption] = useState('')
    const [imageURL, setImageURL] = useState('')

    const add = () => {
        axios.post('/api/posts', {
            caption,
            imageURL
        })
    }

    return (
        <div className='form'>
            <input type="text" placeholder='caption' onChange={(e) => setCaption(e.target.value)}/>
            <br/>
            <input type="text" placeholder='Image URL' onChange={(e) => setImageURL(e.target.value)}/>
            <br/>
            <button onClick={add}>Add Post</button>
            <style jsx>{`
            .form {
                background-color: rgba(255,255,255,0.2);
                margin: 20px auto;
                padding: 20px;
                border-radius: 15px;
            }
            .form input {
                width: 100%;
                margin-bottom: 15px;
            }
            `}</style>
        </div>
    )
}

export default Form
