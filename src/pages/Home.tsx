import { useState } from "react";
import { List, listDataType } from "../components/List";
import { BoxButtons } from "../styles/GlobalStyle";

interface homeProps {
    listData : Array<listDataType>,
    total: number,
    moreEvt: Function,
    paging: Function
}

export function Home(props:homeProps){
    const moreEvt = () => {
        props.moreEvt();
    }

    const firstPage = props.paging(props.total, 10, 1).first;
    const lastPage = props.paging(props.total, 10, 1).last;
    let $buttons = "";
    if(props.paging(props.total, 10, 1).isPrev) $buttons = '<button type="button" class="button__prev">이전</button>';
    for(let i=firstPage; i<=lastPage; i++){
        $buttons += '<button type="button" class="button__page">'+i+'</button>';
    }
    if(props.paging(props.total, 10, 1).isNext) $buttons += '<button type="button" class="button__next">다음</button>';

    document.querySelectorAll(".button__page").forEach(function(el, idx){
        el.addEventListener("click", function(){
            el.classList.add("button__page--active");
            props.paging(props.total, 10, el.textContent)
        });
    })

    return(
        <div className="inner">    
            <List data={props.listData} total={props.total}/>        
            <BoxButtons dangerouslySetInnerHTML={{__html:$buttons}} />

            {/* <BoxButtons>
                <button type="button" className="button__more" onClick={moreEvt}>더보기</button>
            </BoxButtons> */}
        </div>
    )
}