import emptyIcon from "../assets/image__empty.png";
import { BoxEmpty } from "../styles/GlobalStyle";

interface PropsType {
    text : string
}
export function Empty(props:PropsType){
    return(
        <BoxEmpty>
            <div className="box__icon">
                <img src={emptyIcon} alt="" />
            </div>
            <p className="text">{props.text}</p>
        </BoxEmpty>
    )
}