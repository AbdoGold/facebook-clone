import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from './StateProvider';


function Header() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header-left">
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfMTz-VzY1FLzOJSP9iJcxVNhJc7LwZ-MT7Q&usqp=CAU" alt=""/>
                <div className="header-input">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Facebook"/>

                </div>
            </div>

            <div className="header-center">
                <div className="header-option header-option--active">
                    <HomeIcon fontSize="large"/>
                </div>

                <div className="header-option">
                    <FlagIcon fontSize="large"/>
                </div>

                <div className="header-option">
                    <SubscriptionsIcon fontSize="large"/>
                </div>

                <div className="header-option">
                    <StorefrontIcon fontSize="large"/>
                </div>

                <div className="header-option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>

            </div>

            <div className="header-right">
                <div className="header-info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>

                <IconButton>
                    <ForumIcon/>
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
                  
            </div>
            
        </div>
    )
}

export default Header;
