import React, { useState } from "react";
import { SearchBox, FormBox } from "../styles/GlobalStyle";

interface propsType {
    id : string,
    searchEvt: Function
}

export function Search(props : propsType){
    const [srchWord, setSrchWord] = useState(""); 

    const submitForm =(event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log(srchWord)
        props.searchEvt(srchWord);
    }

    const onChangeEvt = (event:React.FormEvent<HTMLInputElement>)=>{
        event.preventDefault();
        setSrchWord(event.currentTarget.value);
    }

    return (
        <SearchBox id={props.id}>
            <FormBox action="/" onSubmit={submitForm}>
                <input type="text" placeholder="요리명 또는 음식 재료 입력" value={srchWord} onChange={onChangeEvt}/>
                <button type="submit">검색</button>
            </FormBox>
        </SearchBox>
    )
}