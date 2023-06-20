
import Background from "../Components/Assets/background.jpg"
import MyPic from "./Assets/Mypic.png"

function Intro() {
    return (
        <div className="main_intro_div">
            <img src={Background} className="bg_img" />
            <div>
                <img src={MyPic} className="Picture"/>
            </div>
            <div className="text">
                <div>
                    <h1>Hey, I'm Syed Sumaim Ali;</h1>
                </div>
                <div className="text_intro">
                    <p>I am a passionate Frontend and Wordpress Developer from Karachi, Pakistan. I have developed many types of Frontend projects.

                        My job is to build the website so that it is functional and user-friendly but at the same time attractive & eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.</p>
                </div>
            </div>
            <div className="responsibility">
                <div>
                    <h1>
                        Responsibilities:
                    </h1>
                    <ul>
                        <li>
                            Working with clients to develop the overall look and design of a website.
                        </li>
                        <li>
                            Convert PSD into HTML, CSS, JS and React.js
                        </li>
                        <li>
                            Convert PSD into WordPress.
                        </li>
                        <li>
                            Ensuring websites are accessible across many platforms, including laptops and smartphones.
                        </li>
                        <li>
                            Producing high quality of work with a strong focus on detail.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Intro;