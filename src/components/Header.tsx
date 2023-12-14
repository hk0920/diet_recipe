import {Link} from "react-router-dom";
import { Search } from "./Search";
import { HeaderBox, Logo } from "../styles/GlobalStyle";
import { useState } from "react";

interface headerProps {
    searchEvt: Function
}
export function Header(props:headerProps){
    const [isShowSearch, setIsShowSearch] = useState(false);

    const activeSearch = ()=>{
        const $searchTarget = document.getElementById("headerSrch") as HTMLDivElement;
        const $target = document.querySelector("#header .button__search") as HTMLButtonElement;

        if(!isShowSearch){
            $searchTarget?.classList.add("on");
            $target.children[0].innerHTML = "검색창 닫기";
            setIsShowSearch(true);
        }else{
            $searchTarget?.classList.remove("on");
            $target.children[0].innerHTML = "검색창 열기";
            setIsShowSearch(false);
        }
    }

    return(
        <HeaderBox id="header" className="inner">
            <div className="header-inner">
                <Logo>
                    <Link to="/">Diet-Recipe</Link>
                </Logo>
                <button type="button" className="button__search" onClick={activeSearch}>
                    <span className="for-a11y">검색창 열기</span>
                </button>
            </div>
            <Search id="headerSrch" searchEvt={props.searchEvt} activeSearch={activeSearch}/>
        </HeaderBox>
    )
}