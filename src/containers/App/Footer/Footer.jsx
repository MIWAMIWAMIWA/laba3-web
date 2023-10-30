import React from "react";
import logo from "../../../icons/logo.png";
import { StyledFooter, IconsWrapper, Wrapper, StyledText } from "./Footer.styled";
import LinkedImg from "../../../containers/LinkedImg/LinkedImg";
import Icon, {
    TwitterOutlined,
    YoutubeOutlined,
    LinkedinOutlined,
    FacebookOutlined,
} from "@ant-design/icons";

function Footer() {
    return (
        <StyledFooter>
            <Wrapper>
                <div>
                    <h3>JBL is James Bullough Lansing.</h3>
                    <p>It is  known for its superior quality audio speakers</p>
                </div>
                
                <img style ={{ alignItems: 'center',margin:"auto"}} src={logo} alt="" width={100}/>

                <IconsWrapper style={{width:"50px",margin: "0 10px"}}>
                    <LinkedImg href="https://www.facebook.com/" component={FacebookOutlined} color='#4267B2'/>
                </IconsWrapper>
                <IconsWrapper style={{width:"50px",margin: "0 10px"}}>
                    <LinkedImg href="https://twitter.com/" component={TwitterOutlined} color='#03A9F4'/>
                </IconsWrapper >
                <IconsWrapper style={{width:"50px",margin: "0 10px"}} >
                    <LinkedImg href="https://www.linkedin.com/home" component={LinkedinOutlined} color='#007AB9'/>
                </IconsWrapper>
                <IconsWrapper style={{width:"50px",margin: "0 10px"}}>
                    <LinkedImg href="https://youtube.com/" component={YoutubeOutlined} color='#FF0000'/>
                </IconsWrapper>
            </Wrapper>

            <StyledText style ={{color:"black"}}>2023 IoT © Myhailo Dovbak</StyledText>
        </StyledFooter>
    );
}

export default Footer;
