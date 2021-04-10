import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import OrgInfo from '../OrgInfo/OrgInfo';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <OrgInfo></OrgInfo>
            
        </div>
    );
};

export default Header;