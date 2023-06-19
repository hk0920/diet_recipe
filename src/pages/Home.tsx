import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { List } from "../components/List";
import { Loading } from "../components/Loading";
import { BoxButtons } from "../styles/GlobalStyle";

interface dataType {
    name : string,
    stateCode : number,
    addr1 : string,
    addr2 : string,
    addrCode : number,
    category : string,
    x : number,
    y: number,
}
export function Home(){
    let [load, setLoad] = useState(false);
    let [data, setData] = useState([]);
    let [total, setTotal] = useState(0);
    let [cnt, setCnt] = useState(1);
    const apiUrl = `${process.env.REACT_APP_BACK_API}${process.env.REACT_APP_API_KEY}/${process.env.REACT_APP_BACK_SERVICE}`;

    useEffect(()=>{    
        // console.log(apiUrl)
        axios.get(apiUrl +"/json/1/10").then((res)=>{
            setTotal(res.data.COOKRCP01.total_count);
            setData(res.data.COOKRCP01.row);
            if(!load){
                setLoad(true);
            }
        }).catch((error)=>{
            console.log(error)
        });
    }, [load]);

    const moreEvt = (event:React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setCnt(cnt+1);
        const oldNum = cnt*10;
        const startNum = oldNum+1;
        const endNum = (cnt+1)*10;

        axios.get(apiUrl+"/json/"+ startNum  + "/" + endNum).then((res)=>{
            const dataAdd = res.data.COOKRCP01.row;
            setData(data.concat(dataAdd));
        }).catch((error)=>{
            console.log(error)
        });
    }

    return(
        <div className="inner">
            {load === false?
                <Loading />
            :
                <>
                    <List data={data} total={total}/>        
                    <BoxButtons>
                        <button type="button" className="button__more" onClick={moreEvt}>더보기</button>
                    </BoxButtons>
                </>
            }
        </div>
    )
}