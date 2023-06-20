import { List, listDataType } from "../components/List";
import { BoxButtons } from "../styles/GlobalStyle";

interface homeProps {
    listData : Array<listDataType>,
    total: number,
    moreEvt: Function
}

export function Home(props:homeProps){
    const moreEvt = (event:React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        props.moreEvt();
    }

    return(
        <div className="inner">    
            <List data={props.listData} total={props.total}/>        
            <BoxButtons>
                <button type="button" className="button__more" onClick={moreEvt}>더보기</button>
            </BoxButtons>
        </div>
    )
}