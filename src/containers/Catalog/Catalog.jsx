import React, { useState } from "react";
import { FiltersContainer, ItemsContainer, SelectWrapper} from "./Catalog.styled";
import CardItem from "../../containers/CardItem/CardItem";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import PrimarySelect from "../../containers/PrimarySelect/PrimarySelect";
import SearchInput from "../../containers/SearchInput/SearchInput";
import { sortOptions, sortOptions2, filterOptions } from '../../containers/PrimarySelect/PrimarySelect';

import t50hi from "../../icons/T50HI.jpg";
import tws from "../../icons/200TWS.webp";
import n760 from "../../icons/760N.jpg";

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
    {
        key: 't501',
        title: "T50HI1",
        text: "Its a very good ear phone to listen to music. If you need to use it for any voice or song recording, the switch is loose & creates noise even with slight shake in cable, we need to hold the mic unit carefully to prevent noise.",
        image: t50hi,
        price: 26.99,
    },
    {
        key :'200t1',
        title: "200TWS1",
        text:"To put it simply, the Wave 200TWS is an excellent option if you’re searching for a pair that’s below $100. They’re decent and great-looking true wireless earbuds, thus, setting the bar for other affordable earbuds to come. .",
        image: tws,
        price: 40.99,
    },
    {
        key:'760n1',
        title: '760N1',
        text:
            "Your music, nothing else matters. Over-ear, super comfortable, powerful, the JBL Tune 760NC keep the promise. The active noise cancelling blocks unnecessary distractions to let you focus on what matters, for up to 35 hours.",
        image: n760,
        price: 54.99,
    },
];
const options = [
    {
        key :"1",
       options: sortOptions
    },
    {
        key : "2",
        options: sortOptions2
    },
    {
        key : "3",
        options: filterOptions
    },
]
const Catalog = () => {
    return (
        <div>
            <FiltersContainer>
                <SelectWrapper>
                    {options.map((item) => (
                        <PrimarySelect
                            options = {item.options }
                            defaultValue= {item.options[0]}
                        />
                    ))}
                    <PrimaryButton onClick={(e) => {}}>Apply</PrimaryButton>
                </SelectWrapper>
                <SearchInput
                    placeholder=""
                />
            </FiltersContainer>
            <ItemsContainer> {data.map((item) => (
                <CardItem
                    key={item.key}
                    title={item.title}
                    text={item.text}
                    imageSrc={item.image}
                    price={item.price}
                />
            ))}
            </ItemsContainer>
        </div>
    )
};

export default Catalog;