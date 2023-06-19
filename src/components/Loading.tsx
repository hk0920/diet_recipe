import { useState } from "react";
import { BoxLoading } from "../styles/GlobalStyle";

export function Loading(){
    let [randomN, setRandomN] = useState(Math.floor((Math.random()*(5-1)+1)));
    const loadingImg = "/assets/loading/loading-icon" + randomN + ".gif";

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