import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { List } from "../components/List";
import { Loading } from "../components/Loading";

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

    useEffect(()=>{
        var key = "eee79f6774ce45108ed4";
        axios.get("http://openapi.foodsafetykorea.go.kr/api/"+ key +"/COOKRCP01/json/1/10").then((res)=>{
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

        var key = "eee79f6774ce45108ed4";
        axios.get("http://openapi.foodsafetykorea.go.kr/api/"+ key +"/COOKRCP01/json/"+ startNum  + "/" + endNum).then((res)=>{
            const dataAdd = res.data.COOKRCP01.row;
            setData(data.concat(dataAdd));
        }).catch((error)=>{
            console.log(error)
        });
    }

    const BoxButtons = styled.div`
        margin-top:30px;
        text-align:center;

        .button__more{
            display:inline-block;
            width:240px;
            height:50px;
            font-size:16px;
            border:1px solid #e5e5e5;
            background:#fff;
            border-radius:6px;
            
            &:hover{
                font-weight:bold;
                color:#7ec9d5;
                border-color:#7ec9d5;
            }
        }
    `;

    return(
        <div className="inner">
            {load == false?
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