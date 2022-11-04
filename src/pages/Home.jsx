import React from "react";
import '../styles/Home.css'

function Home(props) {
    return (
        <div className={'container'}>
            <div className="profile__info">
                <img id={'profile__img'} src={require('../assets/48474390.jpeg')}
                     alt="profile_img"/>

                <h4 id={'twitter'}>Joseph Thomas</h4>
                <h4 id="slack">Joseph Thomas Ehigie</h4>
                <img id={'share_btn'} src={require('../assets/Icon.png')} alt=""/>
                <img id={'more_menu'} src={require('../assets/Type=more, State=Default.png')} alt="more menu"/>

            </div>

            <div className="link_section">
                <a href="https://twitter.com/jojothomas1515">Twitter: @jojothomas1515</a>
                <a id={'btn_zuri'} href={'https://training.zuri.team/'}>Zuri Team</a>
                <a id={'books'} href={'http://books.zuri.team/'}>Zuri Books</a>
                <a id={'book_python'} href={'https://books.zuri.team/python-for-beginners?ref_id=yourslackna'}>Python
                    Books</a>
                <a id={'pitch'} href={'https://background.zuri.team/'}>Background Check for Coders</a>
                <a id={'book_design'} href={'https://books.zuri.team/design-rules'}>Design Books</a>
                {/*<a id={"contact"} >Contact Me</a>*/}
            </div>
            <div className="socials">
                <a href="https://hng9.slack.com/archives/D0488U5612R" className="slack"><img
                    src={require('../assets/slackslack.png')} alt="slack"/></a>
                <a href="https://github.com/jojothomas1515" className="git"><img src={require('../assets/Icongit.png')}
                                                                                 alt="git"/></a>
            </div>
            <footer>
                <div className={'foot_con'}>
                    <img src={require('../assets/Zuri.Internship_Logo.png')} alt="" className="logo"/>
                    <p className={'text-secondary'}>HNG Internship 9 Frontend Task</p>
                    <img src={require('../assets/I4G.png')} alt="" className="logo"/>
                </div>
            </footer>
        </div>
    );
}

export default Home;