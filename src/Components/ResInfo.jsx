
import HTMLIcon from "./Assets/HTML.svg"
import CSS from "./Assets/CSS.svg"
import Bootstrap from "./Assets/Bootstrap.svg"
import JSIcon from "./Assets/JS.svg"
import RIcon from "./Assets/React.svg"
import FirebaseIcon from "./Assets/Firebase.svg"
import AntDesign from "./Assets/AntDesign.svg"
import GitIcon from "./Assets/Git.svg"
import GithubIcon from "./Assets/Github.svg"
import VSCodeIcon from "./Assets/VScode.svg"
import MaterialIcon from "./Assets/MaterialUI.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function ResumeInfo() {
    useEffect(()=>{
        AOS.init();
    }, [])
    return (
        <div className="main_intro_div_two">
            <div className="Portfolio_data">
            <div>
                <div className="Rif">
                    <h2 className="Rif_head">
                        Professional Skillset
                    </h2>
                    <div className="skill_div_main">
                        <div className="skill_div">
                            <div className="Icons" data-aos="zoom-in-up" data-aos-duration="1200">
                                <img className="svg_icons" src={HTMLIcon} />
                            </div>
                            <div className="Icons" data-aos="zoom-in-up" data-aos-duration="1200">
                                <img className="svg_icons" src={CSS} />
                            </div>
                            <div className="Icons" data-aos="zoom-in-up" data-aos-duration="1200">
                                <img className="svg_icons" src={Bootstrap} />
                            </div>
                            <div className="Icons" data-aos="zoom-in-up" data-aos-duration="1200">
                                <img className="svg_icons" src={JSIcon} />
                            </div>
                            <div className="Icons" data-aos="zoom-in-up" data-aos-duration="1200">
                                <img className="svg_icons" src={RIcon} />
                            </div>
                            <div className="Icons" data-aos="zoom-in-up" data-aos-duration="1200">
                                <img className="svg_icons" src={FirebaseIcon} />
                            </div>
                            <div className="Icons" data-aos="zoom-in-up" data-aos-duration="1200">
                                <img className="svg_icons" src={AntDesign} />
                            </div>
                            <div className="Icons" data-aos="zoom-in-up" data-aos-duration="1200">
                                <img className="svg_icons" src={MaterialIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Riftwo">
                <div>
                    <h2 className="Rif_head_two">
                        Tools I Use
                    </h2>
                        <div className="tool_div">
                            <div className="Icons" data-aos="zoom-in-up" data-aos-duration="1200">
                                <img className="svg_icons" src={GitIcon} />
                            </div>
                            <div className="Icons" data-aos="zoom-in-up" data-aos-duration="1200">
                                <img className="svg_icons" src={GithubIcon} />
                            </div>
                            <div className="Icons" data-aos="zoom-in-up" data-aos-duration="1200">
                                <img className="svg_icons" src={VSCodeIcon} />
                            </div>
                        </div>
                </div>
            </div>
            </div>
           
        </div>
    )
}

export default ResumeInfo;