import Data from "../data.json"
import { Card, Button } from 'antd';
// import image from "../Assigments/learned.png"
import { EyeOutlined, GithubOutlined } from '@ant-design/icons';
import {Col,Row } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const { Meta } = Card;




function Resume() {
useEffect(()=>{
    AOS.init();
}, [])
    return (
        <div className="main_portfolio_div_two">
            <div className="Portfolio_data">
                <div className="portfolioHead">
                    <h1>Portfolio</h1>
                </div>
                <div className="Portfolio_div">
                <Row  style={{justifyContent:"space-around"}}>
                    {
                        Data.map((v, i) => {
                           
                            return (
                                <Col xl={6} lg={12} md={12} sm={24} xs={24} >
                                <Card
                                data-aos="flip-down"
                                data-aos-duration="1200"
                                className="Card_antD"
                                    style={{
                                        width: 290,
                                        margin:"20px auto",
                                    }}
                                    cover={
                                        <img
                                            src={v.imgs}
                                        />
                                    }
                                    actions={[
                                        <a href={v.view} target="blank"><EyeOutlined/></a>,
                                        <a href={v.git}  target="blank"><GithubOutlined /></a>
                                    ]}
                                >
                                    <Meta 
                                        title={v.name}
                                        description={v.description}
                                    />
                                </Card>
                                </Col>
                            )
                        })
                    }
                    </Row>
                </div>
            </div>
        </div>
    )
};

export default Resume;