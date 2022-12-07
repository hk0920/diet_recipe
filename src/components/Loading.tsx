import { useState } from "react";
import styled from "styled-components";

export function Loading(){
    let [randomN, setRandomN] = useState(Math.floor((Math.random()*(5-1)+1)));
    const loadingImg = "./assets/loading/loading-icon" + randomN + ".gif";
    
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
            <img src={loadingImg} alt="" />
            <div className="box__text">
                <p className="text__title">데이터를 기다리고 있어요.</p>
                잠시만 기다려주세요.
            </div>
        </BoxLoading>
    )
}