import React from 'react';
import '../styles/Components/Footer.css'

function Footer(props) {
    return (
        <footer>
            <div className={'foot_con'}>
                <img src={require('../assets/Zuri.Internship_Logo.png')} alt="" className="logo"/>
                <p className={'text-secondary'}>HNG Internship 9 Frontend Task</p>
                <img src={require('../assets/I4G.png')} alt="" className="logo"/>
            </div>
        </footer>
    );
}

export default Footer;