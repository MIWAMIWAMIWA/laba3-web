import React, {useContext, useState} from "react";
import main_photo from "../../icons/main_photo.webp"
import { HorizontalLine,HomeWrapper, DesctriptionWrapper, CardsWrapper, ButtonWrapper,ImageStyled } from "./Home.styled";
import { Card, Button } from "antd";
import CardItem from "../../containers/CardItem/CardItem";
import { Link } from "react-router-dom";
import PrimaryButton from "../../containers/PrimaryButton/PrimaryButton";
import {ItemContext} from "../ItemContext/Items";
const MAX_TEXT_LEN = 150;
const { Meta } = Card;
let currentItemCount = 3;

function Home() {
    const data = useContext(ItemContext);
    const [itemsToDisplay, setItemsToDisplay] = useState(data
        .sort((a,b) => b.rating - a.rating)
        .slice(0, currentItemCount));
    const [buttonLabel, setButtonLabel] = useState("View more")

    const showMore = (e) => {
        e.preventDefault();
        if (currentItemCount < data.length){
            currentItemCount += 3;
        } else {
            currentItemCount = 3;
        }
        setItemsToDisplay(data
            .sort((a,b) => b.rating - a.rating)
            .slice(0, currentItemCount));
        if (currentItemCount >= data.length) {
            setButtonLabel("View less");
        } else {
            setButtonLabel("View more");
        }
    }
    return (
        <HomeWrapper>
            <DesctriptionWrapper>
                <ImageStyled src={main_photo} alt=""/>
                <div style={{marginLeft:"40px"}}>
                    <h2 style = {{color :"orange"}}>JBL HEADPHONES</h2>
                    <p>The sound quality is superb, with deep bass and clean, sharp highs. The earphones are comfortable, with a solid fit that stays in place even during strenuous exercises. With a battery life of up to 16 hours, you can listen to music continuously throughout the day.</p>
                </div>

            </DesctriptionWrapper>
            <HorizontalLine />
            <h2>Our Best Products</h2>
            <CardsWrapper>
                {itemsToDisplay.map((item) => (
                    <CardItem style ={{
                    }}
                        key={item.id}
                        rating={item.rating}
                        id={item.id}
                        title={item.title}
                        text={item.text.length > MAX_TEXT_LEN ? `${item.text.substring(0, MAX_TEXT_LEN)}...` : item.text}
                        imageSrc={item.image}
                        price={item.price}
                    />
                ))}
            </CardsWrapper>
            <ButtonWrapper>
                <PrimaryButton onClick={showMore} size="large">{ buttonLabel }</PrimaryButton>
            </ButtonWrapper>
        </HomeWrapper>
    );
}


export default Home;
