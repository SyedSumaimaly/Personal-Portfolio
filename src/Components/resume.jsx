import Background from "../Components/Assets/background.jpg"
import Data from "../data.json"
import { Card, Button } from 'antd';
// import image from "../Assigments/learned.png"
const { Meta } = Card;



function Resume() {
    console.log(Data.name)
    console.log(<img src={Data[0].image} />)
    return (
        <div>
            <img src={Background} className="bg_img_two" />
            <div>
                <h2>Portfolio</h2>
            </div>
            <div>
                {
                    Data.map((v, i) => {
                        return (

                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img src={v.img} />}
                            >
                                <Meta title={v.name} description={v.description} />
                                <Button type="primary" block>
                                   Visit Project
                                </Button>
                            </Card>

                        )
                    })
                }
            </div>
        </div>
    )
};

export default Resume;