import React, { useContext } from "react";
import {useParams, Link, useNavigate} from 'react-router-dom';
import { InputNumber, Rate } from 'antd';
import PrimaryButton from "../../containers/PrimaryButton/PrimaryButton";
import {
    CategoryWrapper,
    Description,
    DescriptionContainer,
    ItemContainer,
    SelectMiwa,
    SubmitContainer,
    Title
} from "./ItemsPage.styled";
import { ItemContext } from "../ItemContext/Items";

const YourComponent = ({ currentItem, isInStock }) => {
    const navigate = useNavigate();

}

const ItemPage = () => {
    const { itemId } = useParams();
    const data = useContext(ItemContext);

    let currentItem = null || data["" + itemId];;
    /*for (const i of data) {
        if (i.id === itemId) {
            currentItem = i;
        }
    }*/

    if (currentItem == null) {
        return (<div>ERROR 404</div>)
    }

    const isInStock = currentItem.quantity ? true: false;

    return (
        <div >

            <ItemContainer >
                <img src={currentItem.image} alt="" />
                <div>

                    <Title>{ currentItem.title }</Title>

                    <CategoryWrapper>
                        <Link to="#">{ currentItem.category }</Link>
                        <div>Best Offer</div>
                        <h3>{currentItem.price}$</h3>
                    </CategoryWrapper>
                    <CategoryWrapper>
                        <Description>{ currentItem.text }</Description>
                    </CategoryWrapper>
                    <SubmitContainer>

                        <div>
                            { !isInStock && <p>Item is out of stock</p> }
                            <InputNumber disabled={!isInStock} min={1} max={currentItem.quantity} defaultValue={1} />
                            <PrimaryButton disabled={!isInStock}>Add to cart</PrimaryButton>
                            <SelectMiwa >
                                <option>Black</option>
                                <option>Red</option>
                                <option>Blue</option>
                                <option>Yellow</option>
                            </SelectMiwa>
                            <PrimaryButton onClick={(e) => {}}><Link to="/catalog">GO back</Link></PrimaryButton>
                        </div>
                        <br />
                        <Rate allowHalf disabled defaultValue={currentItem.rating} />
                    </SubmitContainer>
                </div>
            </ItemContainer>

        </div>
    )
};

export default ItemPage;