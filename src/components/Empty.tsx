import styled from "styled-components";
import emptyIcon from "../assets/image__empty.png";

interface PropsType {
    text : string
}
export function Empty(props:PropsType){
    const BoxEmpty = styled.div`
        padding:80px 0;
        background:#f5f5f5;
        border-radius:20px;
        text-align:center;

        .text{
            margin-top:20px;
            font-weight:bold;
            font-size:20px;
            color:#666;
        }
    `;
    return(
        <BoxEmpty>
            <div className="box__icon">
                <img src={emptyIcon} alt="" />
            </div>
            <p className="text">{props.text}</p>
        </BoxEmpty>
    )
}