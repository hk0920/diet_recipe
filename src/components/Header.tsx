import {Link} from "react-router-dom";
import styled from "styled-components"
import { Search } from "./Search";
import logo from "../assets/logo-icon.png";
import location from  "../assets/location-icon.png";
import search from  "../assets/search-icon.png";

export function Header(){
    const Header = styled.header`
        padding:0;

        .header-inner{
            display:flex;
            width:100%;

            .button__search{
                display:block;
                width:100px;
                height:48px;
                border-radius:5px;
                background:#7ec9d5 url(${search}) no-repeat center / auto 48px;
                border:none;
            }
        }
    `;

    const Logo = styled.h1`
        font-size:20px;

        &:before{
            content:"";
            display:inline-block;
            width:50px;
            height:50px;
            margin-right:10px;
            background:url(${logo}) no-repeat center / cover;
            vertical-align:middle;
        }
    `;
    
    const AddressBox = styled.p`
        flex:1;
        height:48px;
        padding:5px 10px;
        margin:0 10px;
        font-weight:bold;
        line-height:35px;
        border:1px solid #e5e5e5;
        border-radius:5px;

        &:before{
            content:"";
            display:inline-block;
            width:20px;
            height:20px;
            margin-top:7px;
            background:url(${location}) no-repeat center / auto 100%;
            vertical-align:top;
        }
    `;

    const activeSearch = (event: React.FormEvent<HTMLButtonElement>)=>{
        const $target = event.currentTarget;
        const $searchTarget = document.getElementById("headerSrch");

        if(!$target.classList.contains("on")){
            $target.classList.add("on");
            $searchTarget?.classList.add("on");
            $target.children[0].innerHTML = "검색창 닫기";
        }else{
            $target.classList.remove("on");
            $searchTarget?.classList.remove("on");
            $target.children[0].innerHTML = "검색창 열기";
        }
    }

    return(
        <Header id="header" className="inner">
            <div className="header-inner">
                <Logo>
                    <Link to="/">Load-Food</Link>
                </Logo>
                <AddressBox>
                    <strong className="for-a11y">현위치</strong> 주소
                </AddressBox>
                <button type="button" className="button__search" onClick={activeSearch}>
                    <span className="for-a11y">검색창 열기</span>
                </button>
            </div>
            <Search id="headerSrch"/>
        </Header>
    )
}