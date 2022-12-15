import {createGlobalStyle} from "styled-components";
import reset from "styled-reset"

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

    ${reset}
    * {
        box-sizing:border-box;
    }
    body {
        font-family:'Montserrat', sans-serif;
    }
    .text--point {
    }
    .inner {
        width:1170px;
        margin:0 auto;
    }
    a {
        color:initial;
        text-decoration:none;
        
    }
    .for-a11y{
        font-size:0;
        width:0;
        height:0;
        text-indent:-9999px;
        overflow:hidden;
    }
    #header {
        position:relative;
        padding:20px 0;
        .inner  {
            display:flex;
            justify-content:space-between;
        }
    }
    #cBody {
        padding-bottom:80px;
    }
`;
