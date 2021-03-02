import React from 'react'


const Contacts = () => {
    return (
        <div className='contacts'>
            <h2>Contacts</h2>
            <br/>
            <div className="friend">
                <img src="https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg" alt="friend"/>
                <h3>Elyes React Dev</h3>
            </div>
            <div className="friend">
                <img src="https://equimper.gallerycdn.vsassets.io/extensions/equimper/react-native-react-redux/2.0.6/1602247317454/Microsoft.VisualStudio.Services.Icons.Default" alt="redux"/>
                <h3>React & Redux</h3>
            </div>
            <style jsx>{`
            .contacts {
                color: rgba(255, 255, 255, 0.8);
            }
            
            .friend {
                background-color: rgba(255, 255, 255, 0.2);
                width: 250px;
                height: 60px;
                padding-left: 10px;
                border-radius: 20px;
                display: flex;
                align-items: center;
                overflow: hidden;
                margin-bottom: 15px;
                cursor: pointer;
                user-select: none;
            }
            
            .friend img {
                width: 50px;
                height: 50px;
                border-radius: 25px;
                margin-right: 10px;
            }
            
            .friend h3 {
                font-size: 18px;
            }
            
            `}</style>
        </div>
    )
}

export default Contacts
