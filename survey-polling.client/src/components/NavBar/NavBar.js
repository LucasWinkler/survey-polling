import React, { Component, Link } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import './NavBar.scss';

export default function MorumNavBar(props) {

    const history = useHistory();

    const dashboardClick = () => {
        history.push("/Dashboard");
    }

    const managerClick = () => {
        history.push("/Manager");
    }

    const homeClick = () => {
        history.push("/Home");
    }

    return (
        <Menu className="menuBar">
            <Menu.Item className='menuItem'
                onClick={dashboardClick} >
                <text className='navText'>Dashboard</text>
            </Menu.Item>

            <Menu.Item className='menuItem'
                onClick={homeClick} >
                <text className='navText'>Home</text>
            </Menu.Item>

            <Menu.Item className='menuItem'
                onClick={managerClick} >
                <text className='navText'>Manager</text>
            </Menu.Item>
        </Menu>
    );
}
