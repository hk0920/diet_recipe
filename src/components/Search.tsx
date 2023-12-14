import React, { useState } from "react";
import { SearchBox, FormBox } from "../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";

interface propsType {
    id : string,
    searchEvt: Function,
    activeSearch: Function
}

export function Search(props : propsType){
    const [srchWord, setSrchWord] = useState(""); 
    const navigation = useNavigate();

    const submitForm =(event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        props.searchEvt(srchWord);
        props.activeSearch();
        navigation("/");
        console.log(srchWord)
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