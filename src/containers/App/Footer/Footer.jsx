import React from "react";
import logo from "../../../icons/logo.png";
import { StyledFooter, IconsWrapper, Wrapper, StyledText ,LogoWr} from "./Footer.styled";
import LinkedImg from "../../../containers/LinkedImg/LinkedImg";
import facebook from "../../../icons/facebook.png";
import gplus from "../../../icons/google-plus.png";
import linkedin from "../../../icons/linkedin.png";
import twitter from "../../../icons/twitter.png";
function Footer() {
    return (
        <StyledFooter>
            <Wrapper>
                <div>
                    <h3>JBL is James Bullough Lansing.</h3>
                    <p>It is  known for its superior quality audio speakers</p>
                </div>
                
                <LogoWr src={logo} alt="" width={100}/>

                <IconsWrapper >
                    {data.map((item) => (
                        <LinkedImg
                            key={item.key}
                            image={item.image}
                            link={item.link}
                        />
                    ))}
                </IconsWrapper>
            </Wrapper>
            <StyledText >2023 IoT © Myhailo Dovbak</StyledText>
        </StyledFooter>
    );
}
const data = [
    {
        key: 1,
        image: facebook,
        link: "https://www.facebook.com/",
    },
    {
        key :2,
        image: gplus,
        link: 40.99,
    },
    {
        key:3,
        image: linkedin,
        link: "https://www.linkedin.com/home",
    },
    {
        key:4,
        image: twitter,
        link: "https://twitter.com/",
    },
];
export default Footer;
