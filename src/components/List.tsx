import { Link } from "react-router-dom";
import styled from "styled-components"
import { Extension } from "typescript";

export interface listDataType { 
    RCP_PARTS_DTLS : string,
    RCP_WAY2 : string,
    MANUAL_IMG20 : string,
    MANUAL20 : string,
    RCP_SEQ : string,
    INFO_NA : string,
    INFO_WGT : string,
    INFO_PRO : string,
    MANUAL_IMG13 : string,
    MANUAL_IMG14 : string,
    MANUAL_IMG15 : string,
    MANUAL_IMG16 : string,
    MANUAL_IMG10 : string,
    MANUAL_IMG11 : string,
    MANUAL_IMG12 : string,
    MANUAL_IMG17 : string,
    MANUAL_IMG18 : string,
    MANUAL_IMG19 : string,
    INFO_FAT : string,
    HASH_TAG : string,
    MANUAL_IMG02 : string,
    MANUAL_IMG03 : string,
    RCP_PAT2 : string,
    MANUAL_IMG04 : string,
    MANUAL_IMG05 : string,
    MANUAL_IMG01 : string,
    MANUAL01 : string,
    ATT_FILE_NO_MK : string,
    MANUAL_IMG06 : string,
    MANUAL_IMG07 : string,
    MANUAL_IMG08 : string,
    MANUAL_IMG09 : string,
    MANUAL08 : string,
    MANUAL09 : string,
    MANUAL06 : string,
    MANUAL07 : string,
    MANUAL04 : string,
    MANUAL05 : string,
    MANUAL02 : string,
    MANUAL03 : string,
    ATT_FILE_NO_MAIN : string,
    MANUAL11 : string,
    MANUAL12 : string,
    MANUAL10 : string,
    INFO_CAR : string,
    MANUAL19 : string,
    INFO_ENG : string,
    MANUAL17 : string,
    MANUAL18 : string,
    RCP_NM : string,
    MANUAL15 : string,
    MANUAL16 : string,
    MANUAL13 : string,
    MANUAL14 : string,
}

export interface arrDataProps {
    data : listDataType[],
    total : number
}

export function List(props:arrDataProps){
    const TextTotal = styled.p`
        margin-bottom:20px;
        font-size:16px;
        color:#666;

        .text__number{
            color:#000;
        }
    `;

    const BoxList = styled.ul`
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

    return(
        <>
            <TextTotal>총 <span className="text__number">{props.total}</span>개</TextTotal>
            <BoxList>
                {props.data.map((item, idx)=>{
                    return(
                        <li className="list-item" key={idx}>
                            <Link to={`detail/${idx+1}`}>
                                <div className="box__image">
                                    <img src={item.ATT_FILE_NO_MK} alt="" />
                                </div>
                                <div className="box__text">
                                    <p className="text__category">
                                        <span>{item.RCP_PAT2}</span>
                                        <span>{item.RCP_WAY2}</span>
                                        {item.HASH_TAG != "" ?
                                            <span>{item.HASH_TAG}</span>
                                        :""
                                        }
                                    </p>
                                    <p className="text__name">{item.RCP_NM} <span className="text__kal">({item.INFO_ENG}kal)</span></p>
                                    <ul className="list__food-detail">
                                        {item.RCP_PARTS_DTLS.split(",").map((option, i)=>{
                                            return(
                                                <li key={i}>{option}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </BoxList>
        </>
    )
}