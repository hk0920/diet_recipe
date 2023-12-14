import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "./Theme";
import logo from "../assets/logo-icon.png";
import search from  "../assets/search-icon.png";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body, * {
        font-family:'Montserrat', 'Noto Sans KR', sans-serif;
        color:${theme.colors.textColor};
        box-sizing:border-box;
        @media all and ${theme.device.mobile}{
            font-size:14px;
        }
    }
    .text--point {
        color:${theme.colors.pointColor};
    }
    .inner {
        width:1170px;
        margin:0 auto;
        @media all and ${theme.device.tablet}{
            width:calc(100% - 64px);
        }
        @media all and ${theme.device.mobile}{
            width:calc(100% - 32px);
        }
    }
    a {
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
        @media all and ${theme.device.mobile}{
            padding-bottom:40px;
        }
    }
`;

export const HeaderBox = styled.header`
    .header-inner{
        display:flex;
        justify-content:space-between;
        .button__search{
            display:block;
            width:100px;
            height:48px;
            border-radius:5px;
            background:${theme.colors.pointColor} url(${search}) no-repeat center / auto 48px;
            border:none;
            @media all and ${theme.device.mobile}{
                width:60px;
                height:30px;
                border-radius:4px;
                background-size:auto 24px;
            }
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
    @media all and ${theme.device.mobile}{
        font-size:15px;
        &:before{    
            width:30px;
            height:30px;
            margin-right:5px;
        }
    }
`;

export const BoxLoading = styled.div`
    position:absolute;
    top:50%;
    left:0;
    transform:translateY(-50%);
    width:100%;
    font-size:20px;
    color:#999;
    text-align:center;
    .box__text{
        margin:40px 0;
        .text__title{
            margin-bottom:15px;
            font-size:35px;
            font-weight:bold;
            color:#333;
        }
    }
    @media all and ${theme.device.mobile}{
        font-size:12px;
        .box__text{
            margin:20px 0;
            .text__title{
                margin-bottom:8px;
                font-size:20px;
            }
        }
    }
`;  

export const SearchBox = styled.div`
    height:0;
    opacity:0;
    overflow:hidden;
    transition:all 0.3s ease;
    &.on{
        height:auto;
        margin-top:20px;
        opacity:1;
        overflow:visible;
        @media all and ${theme.device.mobile}{
            margin-top:10px;
        }
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
        background-color:${theme.colors.pointColor};
        border-radius:5px;
        border:none;
    }
    @media all and ${theme.device.mobile}{
        margin:8px 0 0;
        input{
            height:30px;
            font-size:14px;
            border-radius:4px;
        }
        button{
            width:60px;
            height:30px;
            font-size:14px;
            border-radius:4px;
        }
    }
`;

export const BoxButtons = styled.div`
    margin-top:30px;
    text-align:center;
    .button__prev,
    .button__next{
        display:inline-block;
        padding:10px 20px;
        margin:0 10px;
        font-size:16px;
        border:1px solid #e5e5e5;
        background:#fff;
        border-radius:6px;
        &:hover{
            font-weight:bold;
            color:${theme.colors.pointColor};
            border-color:${theme.colors.pointColor};
        }
    }
    .button__page{
        display:inline-block;
        padding:10px;
        font-size:14px;
        border:none;
        background:none;
        &--active,
        &:hover{
            font-weight:bold;
            color:${theme.colors.pointColor};
        }
    }
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
            color:${theme.colors.pointColor};
            border-color:${theme.colors.pointColor};
        }
    }
    @media all and ${theme.device.mobile}{
        margin-top:20px;
        .button__more{
            width:150px;
            height:40px;
            font-size:14px;
            border-radius:5px;
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
                    color:${theme.colors.pointColor};
                }
            }
        }
    }
    @media all and ${theme.device.mobile}{
        width:calc(100% - 32px);
        .box__image{
            width:300px;
            height:200px;
            margin-bottom:20px;
        }
        .box__title{
            margin-bottom:30px;
            .box__hash{
                margin-bottom:15px;
                .text__hash{        
                    font-size:12px;
                    border-radius:15px;
                    &:not(:last-child){
                        margin-right:5px;
                    }
                }
            }
            .text__title{
                font-size:18px;
                .text__calory{
                    margin-left:5px;
                    font-size:14px;
                    strong{
                        font-size:16px;
                    }
                }
            }
        }
    }
`;

export const ListCalory = styled.ul`
    margin-top:20px;
    text-align:center;
    li{
        display:inline-block;
        color:#999;
        vertical-align:top;
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
    @media all and ${theme.device.mobile}{
        margin-top:10px;
        font-size:12px;
        line-height:16px;
        li:not(:last-child):after{
            width:2px;
            height:2px;
            margin:7px 3px;
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
    @media all and ${theme.device.mobile}{
        margin-bottom:30px;
        font-size:14px;
        .text__h3{
            margin-bottom:15px;
            font-size:18px;
            line-height:1;
        }
        .list__food{
            li{
                line-height:20px;
                &:not(:last-child):after{
                    width:2px;
                    height:2px;
                    margin:8px 5px;
                }
            }
        }
        .list__recipe{
            .list-item{
                display:block;
                margin-top:20px;
            }
            .box__image{
                width:100%;
                margin:0 auto;
            }
            .box__text{
                width:100%;
                margin-top:10px;
                padding-left:0;
                line-height:18px;
                text-align:left;
            }
        }
    }
`;

export const TextTotal = styled.p`
    margin-bottom:20px;
    font-size:14px;
    color:#666;
    .text__number{
        font-size:16px;
        color:${theme.colors.pointColor};
    }
    @media all and ${theme.device.mobile}{
        margin-bottom:15px;
        font-size:12px;
        .text__number{
            font-size:14px;
        }
    }
`;

export const BoxList = styled.ul`
    border-top:2px solid ${theme.colors.textColor};    
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
                    font-weight:normal;
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
        @media all and ${theme.device.mobile}{
            a{
                padding:10px 0;
            }
            .box__image{
                width:75px;
                height:75px;
            }
            .box__text{
                width:calc(100% - 75px);
                padding-left:10px;
                .text__category{
                    margin-bottom:8px;
                    span{
                        padding:2px 8px;
                        font-size:12px;
                    }
                }
                .text__name{
                    font-size:14px;
                    .text__kal{
                        font-size:12px;
                    }
                }
            }
            .list__food-detail{
                max-height:32px;
                margin-top:10px;
                display:-webkit-box;
                -webkit-line-clamp:2;
                -webkit-box-orient:vertical;
                overflow:hidden;
                text-overflow:ellipsis;
                li{
                    margin-right:8px;
                    font-size:12px;
                    line-height:16px;
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
    @media all and ${theme.device.mobile}{
        padding:40px 0;
        border-radius:10px;
        .text{
            font-size:16px;
        }
    }
`;