import React from "react";
import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import Layout from "../App/Layout/Layout";
import ItemPage from "../ItemsPage/ItemsPage";
import { ItemContext } from "../ItemContext/Items"
import t50hi from "../../icons/T50HI.jpg";
import CartPage from "../CartPage/CartPage";
import FormPage from "../FormikPage/FormPage";
import SuccessPage from "../SuccessPage/SuccessPage";
import ProtectedRoute from "../RouteUtils/ProtectedRoute";
import Login from "../Login/Login";
import RegisterPage from "../RegisterPage/RegisterPage";

const data = [
    {
        id:"1",
        title: "T50HI",
        text: "Its a very good ear phone to listen to music. If you need to use it for any voice or song recording, the switch is loose & creates noise even with slight shake in cable, we need to hold the mic unit carefully to prevent noise.",
        image: "T50HI.jpg",
        price: 20.99,
        category: "wired",
        quantity: 51,
        rating: 5,

    },
    {
        id:"2",
        title: "200TWS",
        text:"To put it simply, the Wave 200TWS is an excellent option if you’re searching for a pair that’s below $100. They’re decent and great-looking true wireless earbuds, thus, setting the bar for other affordable earbuds to come.",
        image: "200TWS.webp",
        price: 40.99,
        category: "earbuds",
        quantity: 62,
        rating: 4,
    },
    {
        id:"3",
        title: '760N',
        text:
            "Your music, nothing else matters. Over-ear, super comfortable, powerful, the JBL Tune 760NC keep the promise. The active noise cancelling blocks unnecessary distractions to let you focus on what matters, for up to 35 hours.",
        image: "760N.jpg",
        price: 39.99,
        category: "headset",
        quantity: 22,
        rating: 2,
    },
    {
        id:"4",

        title: "T50HI1",
        text: "Its a very good ear phone to listen to music. If you need to use it for any voice or song recording, the switch is loose & creates noise even with slight shake in cable, we need to hold the mic unit carefully to prevent noise.",
        image: "T50HI.jpg",
        price: 26.99,
        category: "wired",
        quantity: 51,
        rating: 3,
    },
    {
        id:"5",

        title: "200TWS1",
        text:"To put it simply, the Wave 200TWS is an excellent option if you’re searching for a pair that’s below $100. They’re decent and great-looking true wireless earbuds, thus, setting the bar for other affordable earbuds to come.",
        image: "200TWS.webp",
        price: 40.99,
        category: "earbuds",
        quantity: 5,
        rating: 5,

    },
    {
        id:"6",
        title: '760N1',
        text:
            "Your music, nothing else matters. Over-ear, super comfortable, powerful, the JBL Tune 760NC keep the promise. The active noise cancelling blocks unnecessary distractions to let you focus on what matters, for up to 35 hours.",
        image: "760N.jpg",
        price: 54.99,
        category: "headset",
        quantity: 21,
        rating: 1,

    },
];

function Navigation() {
    const location = useLocation();
    return (
        <div>
            <Layout />
            <ItemContext.Provider  value={data}>
                {location.pathname !== '/login' && location.pathname !== '/register'}
                <Routes>
                         <Route element={<ProtectedRoute />}>
                             <Route path="/" element={<Home />} key="/"/>
                             <Route path="/catalog" element={<Catalog />} key="/catalog"/>
                             <Route path="/cart" element={<CartPage />} />
                             <Route path="/item/:itemId" element={<ItemPage />} key="/cart"/>
                             <Route path="/*" element={<Navigate to="/"/>} key="/*"/>
                             <Route path="/formik" element={<FormPage />} />
                             <Route path="/success" element={<SuccessPage />} />
                        </Route>
                    <Route element={<Login />} path="/login" exact />
                    <Route element={<RegisterPage />} path="/register" />
                </Routes>
            </ItemContext.Provider>
        </div>

    );
}

export default Navigation;
