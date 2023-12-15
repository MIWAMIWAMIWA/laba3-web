import React, { useState, useEffect } from "react";
import {useParams, Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { InputNumber, Rate } from 'antd';
import PrimaryButton from "../../containers/PrimaryButton/PrimaryButton";
import { addToCart } from '../redux/CartPageActions';
import {
    CategoryWrapper,
    Description,
    DescriptionContainer,
    ItemContainer,
    SelectMiwa,
    SubmitContainer,
    Title
} from "./ItemsPage.styled";
import { getHeadphoneById } from "../App/API/api";

const ItemPage = () => {
    const { itemId } = useParams();
    const navigate = useNavigate();
    const [currentItem, setCurrentItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imagePath, setImagePath] = useState(null);
    const dispatch = useDispatch();
    const [currentNumber, setCurrentNumber] = useState(1);

    const handleNumberChange = (e) => {
        const newValue = parseInt(e.value, 10);
        setCurrentNumber(newValue);
    };


    const handleAddToCart = () => {
        const currentUserKey = localStorage.getItem('loggedInUser');

        for (let i = 0; i < currentNumber; i++) {
            dispatch(addToCart(currentItem, currentUserKey));
        }

        navigate('/cart');
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const item = await getHeadphoneById({ id:itemId });
                console.log(itemId)
                setCurrentItem(item);
                const module = await import(`../../icons/${item.image}`);
                setImagePath(module.default);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [itemId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || currentItem == null) {
        return <div>ERROR 404</div>;
    }

    const isInStock = currentItem.quantity > 0;

    return (
        <div>
            <ItemContainer>
                <img src={imagePath} alt="" />
                <div>
                    <Title>{currentItem.title}</Title>

                    <CategoryWrapper>
                        <Link to="#">{currentItem.category}</Link>
                        <div>Best Offer</div>
                        <h3>{currentItem.price}$</h3>
                    </CategoryWrapper>
                    <CategoryWrapper>
                        <Description>{currentItem.text}</Description>
                    </CategoryWrapper>
                    <SubmitContainer>
                        <div>
                            {!isInStock && <p>Item is out of stock</p>}
                            <InputNumber disabled={!isInStock} min={1} max={currentItem.quantity} defaultValue={1} value={currentNumber}
                                         onChange={(value) => {
                                             // Ensure that value is a valid number
                                             const newValue = parseInt(value, 10);
                                             setCurrentNumber(isNaN(newValue) ? 1 : newValue);
                                         }}/>
                            <PrimaryButton disabled={!isInStock} onClick={handleAddToCart} >Add to cart</PrimaryButton>
                            <SelectMiwa>
                                <option>Black</option>
                                <option>Red</option>
                                <option>Blue</option>
                                <option>Yellow</option>
                            </SelectMiwa>
                            <PrimaryButton>
                                <Link to="/catalog">Go back</Link>
                            </PrimaryButton>
                        </div>
                        <br />
                        <Rate allowHalf disabled defaultValue={currentItem.rating} />
                    </SubmitContainer>
                </div>
            </ItemContainer>
        </div>
    );
};

export default ItemPage;
