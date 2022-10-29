import React from "react";

function Home(props) {
    return (
        <div>
            <div className="profile__info">
                <div className="profile_img_con"><img id={'profile__img'} src={require('../assets/48474390.jpeg')}
                                                      alt="profile_img"/>
                    <h4 id={'twitter'}>Joseph Thomas</h4>
                    <h4 id="slack">Joseph Thomas Ehigie</h4>
                </div>
            </div>

            <div className="link_section">
                <a href="https://twitter.com/jojothomas1515">Jojo Thomas Twitter</a>
                <a id={'btn_zuri'} href={'https://training.zuri.team/'}>Zuri Team</a>
                <a id={'books'} href={'http://books.zuri.team/'}>Zuri Books</a>
                <a id={'book_python'} href={'https://books.zuri.team/python-for-beginners?ref_id=yourslackna'}>Python
                    Books</a>
                <a id={'pitch'} href={'https://background.zuri.team/'}>Background Check for Coders</a>
                <a id={'book_design'} href={'https://books.zuri.team/design-rules'}>Design Books</a>
            </div>
            <div className="socials">
                <a href="https://hng9.slack.com/archives/D0488U5612R" className="slack"><img
                    src={require('../assets/slackslack.png')} alt="slack"/></a>
                <a href="https://github.com/jojothomas1515" className="git"><img src={require('../assets/Icongit.png')}
                                                                                 alt="git"/></a>
            </div>

            <footer>
                <div className={'foot-con'}>
                    <img src={require('../assets/Zuri.Internship_Logo.png')} alt="" className="logo"/>
                    <p className={'text-secondary'}>HNG Internship 9 Frontend Task</p>
                    <img src={require('../assets/Zuri.Internship_Logo.png')} alt="" className="logo"/>
                </div>
            </footer>
        </div>
    );
}

export default Home;