import React from 'react'


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="menu">
            <div className='item'>
                <i className="fas fa-user-circle"/>
                <h3>Elyes</h3>
            </div>
            <div className='item'>
            <i className="fas fa-user-friends"/>
                <h3>Friends</h3>
            </div>
            <div className='item'>
            <i className="fas fa-bookmark"/>
                <h3>Saved</h3>
            </div>
            <div className='item'>
            <i className="fas fa-users"/>
                <h3>Groups</h3>
            </div>
            <div className='item'>
            <i className="fas fa-store"/>
                <h3>Marketplace</h3>
            </div>
            <div className='item'>
                <i className="fas fa-video"/>
                <h3>Watch</h3>
            </div>
            <div className='item'>
                <i className="far fa-calendar-alt"/>
                <h3>Events</h3>
            </div>
            <div className='about'>
                <p>Elyes 2021</p>
            </div>

            </div>
            <style jsx>{`
            .sidebar {
                width: 300px;
                display: flex;
                flex-direction: column;
                height: 100vh;
            }
            
            .menu {
                flex: 1;
            }
            
            .item {
                display: flex;
                align-items: center;
                color: white;
                opacity: 0.8;
                margin-bottom: 20px;
                cursor: pointer;
                height: 45px;
                width: max-content;
                padding: 0px 10px;
                border-radius: 10px;
            }
            
            .item i {
                font-size: 30px;
                margin-right: 15px;
            }
            
            p {
                color: white;
                opacity: 0.2;
            }
            
            .item:hover {
                background-color: rgba(255, 255, 255, 0.2);
            }
            
            .about {
                padding-top: 90px;
            }
            `}</style>
        </div>
    )
}

export default Sidebar
