import React, { useState } from "react";
import {
    AppstoreOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import logo from "../../../icons/logo.png";
import { LinkingWrapper, StyledHeader } from "./Layout.styled";
import {BrowserRouter, Link, useNavigate} from "react-router-dom";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";

const items = [
    {
        label: (<Link to="/">Home</Link>),
        key: 'home',
        icon: <HomeOutlined />
    },
    {
        label: (<Link to="/catalog">Catalog</Link>),
        key: 'catalog',
        icon: <AppstoreOutlined />
    },
    {
        label: (<Link to="/cart">cart</Link>),
        key: 'cart',
        icon: <ShoppingCartOutlined />
    }
];

function Layout() {
    const [currentPage, setCurrentPage] = useState('home');
    const navigate = useNavigate();

    const handleSignOut = () => {
        const confirmed = window.confirm('Are you sure you want to sign out?');

        if (confirmed) {
            localStorage.removeItem('loggedInUser');
            navigate('/login');
        }
    };
    const onClick = (e) => {
        console.log('click ', e);
        setCurrentPage(e.key);
    };
    
    return (
        <StyledHeader >
            <img src={logo} alt="" width={100} />

            <LinkingWrapper >
                <Menu style ={{color:"orangered"}}
                    onClick={onClick}
                      selectedKeys={[]}
                      mode="horizontal"
                      defaultSelectedKeys={['home']}
                    items={items}
                />
            </LinkingWrapper>
            <PrimaryButton style ={{ margin: 'auto', display: 'block'}}onClick={handleSignOut}>Sign out</PrimaryButton>
        </StyledHeader>
    );
}

export default Layout;
