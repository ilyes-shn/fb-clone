import React from 'react'


const Splash = () => {
    return (
        <div className="splash">
            <img src="https://nrgteleresources.com/wp-content/uploads/facebook-logo-white.png" alt="fb"/>
        <style jsx>{`
        .splash {
            width: 100%;
            height: 100vh;
            background-color: rgb(0, 32, 61);
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
        }
        
        img {
            width: 100px;
        }
        `}</style>
        </div>
    )
}

export default Splash
