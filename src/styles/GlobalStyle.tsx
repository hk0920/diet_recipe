import styled, {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import logo from "../assets/logo-icon.png";
import location from  "../assets/location-icon.png";
import search from  "../assets/search-icon.png";

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

export const HeaderBox = styled.header`
    padding:0;

    .header-inner{
        display:flex;
        width:100%;
        justify-content:space-between;

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

export const Logo = styled.h1`
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

export const BoxLoading = styled.div`
    font-size:20px;
    color:#999;
    text-align:center;

    .box__text{
        margin-top:40px;

        .text__title{
            margin-bottom:15px;
            font-size:35px;
            font-weight:bold;
            color:#333;
        }
    }
`;  

export const SearchBox = styled.div`
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

export const FormBox = styled.form`
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

export const BoxButtons = styled.div`
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

export const BoxDetail = styled.div`
    width:700px;
    margin:0 auto;

    .box__image{
        width:600px;
        height:400px;
        margin:0 auto 40px;
        overflow:hidden;

        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
    }

    .box__title{
        margin-bottom:60px;
        text-align:center;

        .box__hash{
            margin-bottom:20px;
            .text__hash{
                display:inline-block;
                padding:5px 10px;
                border:1px solid #e5e5e5;
                border-radius:20px;

                &:not(:last-child){
                    margin-right:10px;
                }
            }
        }
        .text__title{
            font-size:25px;
            font-weight:bold;

            .text__calory{
                margin-left:10px;
                font-size:16px;
                font-weight:normal;
                color:#999;

                strong{
                    font-size:20px;
                    font-weight:bold;
                    color:#6eacbd;
                }
            }
        }
    }
`;

export const ListCalory = styled.ul`
    margin-top:20px;
    text-align:center;
    li{
        color:#999;
        display:inline-block;

        &:not(:last-child):after{
            content:"";
            display:inline-block;
            width:3px;
            height:3px;
            margin:7px 7px 0 10px;
            background:#e5e5e5;
            border-radius:50%;
            vertical-align:top;
        }
    }
`;

export const BoxSection = styled.div`
    margin-bottom:60px;
    font-size:16px;

    .text__h3{
        margin-bottom:20px;;
        font-size:25px;
        font-weight:bold;
        line-height:25px;
    }

    .list__food{
        li{
            display:inline-block;
            line-height:25px;
            vertical-align:top;

            &:not(:last-child):after{
                content:"";
                display:inline-block;
                width:3px;
                height:3px;
                margin:12px 7px 0 10px;
                background:#999;
                border-radius:50%;
                vertical-align:top;
            }
        }

    }

    .list__recipe{
        .list-item{
            display:flex;
            flex-wrap:nowrap;
            align-items:center;
            margin-top:15px;
            
            &:first-child{
                margin-top:0;
            }
        }

        .box__image{
            width:300px;
            height:auto;
            margin:0;
        }
        .box__text{
            width:calc(100% - 300px);
            padding-left:40px;
            box-sizing:border-box;
        }
    }
`;

export const TextTotal = styled.p`
    margin-bottom:20px;
    font-size:16px;
    color:#666;

    .text__number{
        color:#000;
    }
`;

export const BoxList = styled.ul`
    border-top:2px solid #000;    
    
    .list-item {
        a{
            display:flex;
            padding:20px 0;
            border-bottom:1px solid #e5e5e5;
            flex-wrap:wrap;
            align-items:center;
        }

        .box__image{
            width:150px;
            height:150px;

            img{
                width:100%;
                height:100%;
                object-fit:cover; 
            }
        }
        .box__text{
            width:calc(100% - 150px);
            padding-left:20px;

            .text__category{
                margin-bottom:10px;

                span{
                    display:inline-block;
                    padding:5px 10px;
                    margin-right:5px;
                    font-size:14px;
                    border:1px solid #e5e5e5;
                    border-radius:15px;
                }
            }

            .text__name{
                font-size:20px;
                font-weight:bold;

                .text__kal{
                    font-size:14px;
                    color:#666;
                }
            }
        }

        .list__food-detail{
            margin-top:20px;

            li{
                display:inline-block;
                margin-right:15px;
                font-size:14px;
                color:#666;
                line-height:1.5;

                &:last-child{
                    margin-right:0;
                }
            }
        }
    }
`;

export const BoxEmpty = styled.div`
    padding:80px 0;
    background:#f5f5f5;
    border-radius:20px;
    text-align:center;

    .text{
        margin-top:20px;
        font-weight:bold;
        font-size:20px;
        color:#666;
    }
`;