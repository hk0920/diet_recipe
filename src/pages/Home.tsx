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

    useEffect(()=>{
        var key = "eee79f6774ce45108ed4";
        axios.get("http://openapi.foodsafetykorea.go.kr/api/"+ key +"/COOKRCP01/json/1/5").then((res)=>{
            setTotal(res.data.COOKRCP01.total_count);
            setData(res.data.COOKRCP01.row);
            setLoad(true);
            console.log(data)
        }).catch((error)=>{
            console.log(error)
        })
    }, [load]);

    return(
        <div className="inner">
            {load == false?
                <Loading />
            :
                <>
                    <List data={data} total={total}/>
                </>
            }
            

        </div>
    )
}