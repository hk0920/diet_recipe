import {Link} from "react-router-dom";
import { Search } from "./Search";
import { HeaderBox, Logo } from "../styles/GlobalStyle";

interface headerProps {
    searchEvt: Function
}
export function Header(props:headerProps){
    const activeSearch = (event: React.FormEvent<HTMLButtonElement>)=>{
        event.preventDefault();
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
        <HeaderBox id="header" className="inner">
            <div className="header-inner">
                <Logo>
                    <Link to="/">Diet-Recipe</Link>
                </Logo>
                <button type="button" className="button__search" onClick={activeSearch}>
                    <span className="for-a11y">검색창 열기</span>
                </button>
            </div>
            <Search id="headerSrch" searchEvt={props.searchEvt}/>
        </HeaderBox>
    )
}