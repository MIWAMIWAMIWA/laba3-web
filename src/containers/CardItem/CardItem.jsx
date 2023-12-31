import React, {useEffect, useState} from "react";
import { Card, Button ,Rate} from "antd";
import { Footer } from "./CardItem.styled";

import { useNavigate } from "react-router-dom";


const { Meta } = Card;
const CardItem = ({ title = 'No title.', text, imageSrc, price ,id,rating}) => {
    const navigate = useNavigate();
    const [imagePath, setImagePath] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            try {
                const module = await import(`../../icons/${imageSrc}`);
                setImagePath(module.default);
            } catch (error) {
                console.error("Error loading image:", error);
            }
        };

        loadImage();
    }, [imageSrc]);
    return (
        <Card
            hoverable
            style={{width: 350, borderRadius: "40px", height:'600px',marginBottom:'20px',marginLeft:'5px',marginRight:'5px'}}
            cover={
                <img style={{borderRadius: "20px"}} alt="example" src={imagePath} height="350px" width="350px"/>
            }
        >
            <Meta
                style={{
                    height: 150
                }} title={title} description={text}/>
             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                 <Rate disabled allowHalf defaultValue={rating} />
             </div>

            <Footer>
                <p>${price}</p>
                <Button onClick={() => navigate(`/item/${id}`)} style={{backgroundColor: "orangered"}}>Buy Now</Button>
            </Footer>
        </Card>);
};

export default CardItem;