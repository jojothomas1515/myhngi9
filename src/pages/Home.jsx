import React from "react";

function Home(props) {
    return (
        <div>
            <div className="profile__info">
                <div className="profile_img_con"><img src="" alt=""/>
                <h3 className="twitter_name">Jojo Thomas</h3>
                </div>
            </div>

            <div className="link_section">
                <div><a href="https://twitter.com/jojothomas1515">Jojo Thomas Twitter</a></div>
                <div>Zuri Team</div>
                <div>Zuri Books</div>
                <div>Python Books</div>
                <div>Background Check for Coders</div>
                <div>Design Books</div>
            </div>
            <div className="socials">
                <a href="https://hng9.slack.com/archives/D0488U5612R" className="slack"><img src="" alt=""/></a>
                <a href="" className="git"><img src="" alt=""/></a>
            </div>
        </div>
    );
}

export default Home;