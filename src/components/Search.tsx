import React, { HtmlHTMLAttributes, useEffect, useState } from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import styled from "styled-components";

interface propsType {
    id : string
}
export function Search({id} : propsType){
    const [srchWord, setSrchWord] = useState(""); 

    const SearchBox = styled.div`
        height:0;
        padding:20px 0;
        opacity:0;
        overflow:hidden;
        transition:all 0.3s ease;

        &.on{
            height:auto;
            opacity:1;
            overflow:visible;
        }
    `;

    const FormBox = styled.form`
        display:flex;
        margin:15px 0;

        input{
            flex:1;
            display:block;
            width:100%;
            height:48px;
            padding:5px 10px;
            margin-right:10px;
            font-size:16px;
            border:1px solid #e5e5e5;
            border-radius:5px;
        }

        button{
            display:block;
            width:100px;
            height:48px;
            font-size:18px;
            font-weight:bold;
            color:#fff;
            background-color:#7ec9d5;
            border-radius:5px;
            border:none;
        }
    `;

    const submitForm =(event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log(event.currentTarget.value)
    }

    const onChangeEvt = (event:React.FormEvent<HTMLInputElement>)=>{
        event.preventDefault();
        setSrchWord(event.currentTarget.value);
    }

    return (
        <SearchBox id={id}>
            <FormBox action="/" onSubmit={submitForm}>
                <input type="text" placeholder="요리명 또는 음식 재료 입력" value={srchWord} onChange={onChangeEvt}/>
                <button type="submit">검색</button>
            </FormBox>
        </SearchBox>
    )
}