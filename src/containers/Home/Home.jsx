import React from "react";
import main_photo from "../../icons/main_photo.webp"
import t50hi from "../../icons/T50HI.jpg";
import tws from "../../icons/200TWS.webp";
import n760 from "../../icons/760N.jpg";
import { HorizontalLine,HomeWrapper, DesctriptionWrapper, CardsWrapper, ButtonWrapper } from "./Home.styled";
import { Card, Button } from "antd";
import CardItem from "../../containers/CardItem/CardItem";

const { Meta } = Card;

function Home() {
    return (
        <HomeWrapper>
            <DesctriptionWrapper>
                <img style={{width:"500px", height:"350px"}} src={main_photo} alt=""/>
                <div style={{marginLeft:"40px"}}>
                    <h2 style = {{color :"orange"}}>JBL HEADPHONES</h2>
                    <p>The sound quality is superb, with deep bass and clean, sharp highs. The earphones are comfortable, with a solid fit that stays in place even during strenuous exercises. With a battery life of up to 16 hours, you can listen to music continuously throughout the day.</p>
                </div>

            </DesctriptionWrapper>
            <HorizontalLine />
            <h2>Our Best Products</h2>
            <CardsWrapper>
                {data.map((item) => (
                    <CardItem
                        key={item.key} // Make sure to provide a unique key when mapping an array of components
                        title={item.title}
                        text={item.text}
                        imageSrc={item.image}
                        price={item.price}
                    />
                ))}
            </CardsWrapper>
            <ButtonWrapper>
                <Button style ={{backgroundColor:"orangered",margin:"auto"}} size="large">View more</Button>
            </ButtonWrapper>
        </HomeWrapper>
    );
}
const data = [
    {
        key: 't50',
        title: "T50HI",
        text: "Its a very good ear phone to listen to music. If you need to use it for any voice or song recording, the switch is loose & creates noise even with slight shake in cable, we need to hold the mic unit carefully to prevent noise.",
        image: t50hi,
        price: 20.99,
    },
    {
        key :'200t',
        title: "200TWS",
        text:"To put it simply, the Wave 200TWS is an excellent option if you’re searching for a pair that’s below $100. They’re decent and great-looking true wireless earbuds, thus, setting the bar for other affordable earbuds to come. .",
        image: tws,
        price: 40.99,
    },
    {
        key:'760n',
        title: '760N',
        text:
            "Your music, nothing else matters. Over-ear, super comfortable, powerful, the JBL Tune 760NC keep the promise. The active noise cancelling blocks unnecessary distractions to let you focus on what matters, for up to 35 hours.",
        image: n760,
        price: 39.99,
    },
];

export default Home;
