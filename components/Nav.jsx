import React, {useState} from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { makeStyles } from '@material-ui/core/styles';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';

const useStyles = makeStyles({
    root: {
      color: 'white',
      fontSize: '30px',
      marginRight: '10px'
    },
    icon: {
        color: 'white',
        fontSize: '35px',
        opacity: 0.8
    },
    icons: {
        color: '#2d6cdf',
        fontSize: '35px',
        opacity: 0.8
    }
  });

const Nav = () => {
    const classes = useStyles()
    const [hover, setHover] = useState(true)
    const [hover2, setHover2] = useState(true)
    const [hover3, setHover3] = useState(true)
    const [hover4, setHover4] = useState(true)
    const [hover5, setHover5] = useState(true)

    return (
        <div className='nav'>
            <div className='left'>
                <img src="https://nrgteleresources.com/wp-content/uploads/facebook-logo-white.png" alt="logo" />
                <div className='search'>
                    <SearchRoundedIcon classes={{ root: classes.root }}/>
                    <input type="text" placeholder='Search Facebook'/>
                </div>
            </div>
            <div className='center'>
                <HomeRoundedIcon classes={{ root: hover ? classes.icon : classes.icons}} onMouseEnter={() => setHover(false)} onMouseLeave={() => setHover(true)}/>
                <VideoLibraryRoundedIcon classes={{ root: hover2 ? classes.icon : classes.icons}} onMouseEnter={() => setHover2(false)} onMouseLeave={() => setHover2(true)}/>
                <StorefrontRoundedIcon classes={{ root: hover3 ? classes.icon : classes.icons}} onMouseEnter={() => setHover3(false)} onMouseLeave={() => setHover3(true)}/>
                <SupervisorAccountRoundedIcon classes={{ root: hover4 ? classes.icon : classes.icons}} onMouseEnter={() => setHover4(false)} onMouseLeave={() => setHover4(true)}/>
                <SportsEsportsRoundedIcon classes={{ root: hover5 ? classes.icon : classes.icons}} onMouseEnter={() => setHover5(false)} onMouseLeave={() => setHover5(true)}/>
            </div>
            <div className='right'>
                <i className="fas fa-user-circle"/>
                <i className="fas fa-plus-circle" />
                <i className="fab fa-facebook-messenger" />
                <i className="fas fa-bell"/>
                <i className="fas fa-sort-down" style={{transform: 'translateY(-5px)'}}/>
            </div>
            <style jsx>{`
            .nav {
                height: 60px;
                width: 100%;
                background-color: rgb(0, 32, 61);
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0px 20px;
                box-shadow: 0px -3px 10px rgb(0, 0, 0);
                z-index: 5px;
                
            }
            
            .left {
                display: flex;
                align-items: center;
                height: 60px;
            }
            
            .left img {
                width: 40px;
                margin-right: 20px;
                transform: translateY(-2px);
            }
            
            
            .search {
                background-color: rgba(255 , 255, 255, 0.2);
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 70%;
                border-radius: 20px;
                width: 300px;
                padding: 0px 10px;
            }
            
            .search input {
                flex: 1;
                background-color: transparent;
                outline: none;
                border: none;
                color: white;
                font-size: 18px;
                width: 75%;
            }
            
            .search input::placeholder {
                color: white;
            }
            
            .center {
                justify-content: space-around;
                align-items: center;
                display: flex;
                width: 30%;
                padding-right: 70px;
            }
            
            .right {
                display: flex;
                justify-content: left;
                color: white;
                margin-left: 50px;
            }
            
            .right i {
                opacity: 0.8;
                font-size: 27px;
                margin-left: 20px;
            }
            
            .right i:hover {
                color: #2d6cdf;
            }
            `}</style>
        </div>
    )
}

export default Nav
