import React from 'react'
import Contacts from './Contacts';
import Sidebar from './Sidebar';

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className='feed'>
                {children}
            </div>
            <div className="contacts">
                <Contacts />
            </div>
            <style jsx>{`
            .layout {
                display: flex;
                width: 100%;
                justify-content: space-around;
                padding:20px;
                height: 100%;
                position: fixed;
            }

            
            .feed {
                width: 60%;
                padding: 0px 60px;
                overflow: scroll;
                margin-bottom: 40px;
            }
            
            .sidebar {
                width: 20%;
                top: 70px;
                position: sticky;

            }
            
            .contacts {
                position: sticky;
                width: 20%;
                top: 70px;
            }
            `}</style>
        </div>
    )
}

export default Layout
