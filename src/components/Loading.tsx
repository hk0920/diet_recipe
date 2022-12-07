import { useState } from "react";
import styled from "styled-components";
import loadingImg1 from "../assets/loading-icon1.gif";
import loadingImg2 from "../assets/loading-icon2.gif";
import loadingImg3 from "../assets/loading-icon3.gif";
import loadingImg4 from "../assets/loading-icon4.gif";
import loadingImg5 from "../assets/loading-icon5.gif";

export function Loading(){
    let [randomN, setRandomN] = useState(Math.floor((Math.random()*(5-1)+1)));
    console.log(randomN)
    
    const BoxLoading = styled.div`
        font-size:20px;
        color:#999;
        text-align:center;

        .box__text{
            margin-top:40px;

            .text__title{
                margin-bottom:15px;
                font-size:35px;
                font-weight:bold;
                color:#333;
            }
        }
    `;  

    return(
        <BoxLoading>
            <img src={loadingImg1} alt="" />
            <div className="box__text">
                <p className="text__title">데이터를 기다리고 있어요.</p>
                잠시만 기다려주세요.
            </div>
        </BoxLoading>
    )
}