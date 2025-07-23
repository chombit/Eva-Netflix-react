import React from "react";
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDownIcon from '@mui/icons-material/ArrowDropDown';
import UserIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
          className="header__logo"
        />
        <nav className="header__nav">
          <a href="/">Home</a>
          <a href="/tv-shows">TV Shows</a>
          <a href="/movies">Movies</a>
          <a href="/new">New & Popular</a>
          <a href="/my-list">My List</a>
        </nav>
      </div>
      <div className="header__right">
        <SearchIcon className="header__icon" />
        <UserIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <ArrowDownIcon className="header__icon" />
      </div>
    </header>
  );
};

export default Header;
