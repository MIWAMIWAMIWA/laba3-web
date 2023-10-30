import React from "react";
import { Card, Button } from "antd";
import { Footer } from "./CardItem.styled";
const { Meta } = Card;

const CardItem = ({ title = 'No title.', text, imageSrc, price }) => (
    <Card
        hoverable
        style={{ width: 350, borderRadius: "40px" }}
        cover={
            <img style={{ borderRadius: "20px" }} alt="example" src={imageSrc} height = "400px" width = "350px" />
        }
    >
        <Meta
            style = {{
               height:150
            }}title={title} description={text} />
        <Footer>
            <p>${price}</p>
            <Button style ={{backgroundColor:"orangered"}} >Buy Now</Button>
        </Footer>
    </Card>
);

export default CardItem;