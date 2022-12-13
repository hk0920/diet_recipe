import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import { Loading } from "../components/Loading";

export interface dataType { 
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

export function Detail(){
	let [load, setLoad] = useState(false);
	let [data, setData] = useState<dataType>();
	const {idx} = useParams();

	useEffect(()=>{
		var key = "eee79f6774ce45108ed4";
		axios.get("http://openapi.foodsafetykorea.go.kr/api/"+ key +"/COOKRCP01/json/"+idx+"/"+ idx).then((res)=>{
			setData(res.data.COOKRCP01.row[0]);
			setLoad(true);
			console.log(data)
		}).catch((error)=>{
			console.log(error)
		})
	},[load]);

	const BoxDetail = styled.div`
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

	const ListCalory = styled.ul`
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

	const BoxSection = styled.div`
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

	return(
		<>
			{load === false?
				<Loading />
			:
				<BoxDetail>
					<div className="box__image">
						<img src={data?.ATT_FILE_NO_MAIN} alt="" />
					</div>
					<div className="box__title">
						<div className="box__hash">
							{data?.HASH_TAG !== ""?<span className="text__hash">{data?.HASH_TAG}</span>:""}
							{data?.RCP_PAT2 !== ""?<span className="text__hash">{data?.RCP_PAT2}</span>:""}
							{data?.RCP_WAY2 !== ""?<span className="text__hash">{data?.RCP_WAY2}</span>:""}
						</div>
						<p className="text__title">{data?.RCP_NM}<span className="text__calory">(<strong>{data?.INFO_ENG}</strong>Kcal)</span></p>
						<ListCalory>
							{data?.INFO_ENG !== ""?<li>총 칼로리 {data?.INFO_ENG}Kcal</li>:""}
							{data?.INFO_CAR !== ""?<li>탄수화물 {data?.INFO_CAR}g</li>:""}
							{data?.INFO_FAT !== ""?<li>지방 {data?.INFO_FAT}g</li>:""}
							{data?.INFO_NA !== ""?<li>나트륨 {data?.INFO_NA}g</li>:""}
							{data?.INFO_PRO !== ""?<li>단백질 {data?.INFO_PRO}g</li>:""}
						</ListCalory>
					</div>
					<BoxSection>
						<h3 className="text__h3">재료</h3>
						<ul className="list__food">
							{data?.RCP_PARTS_DTLS.split("\n")[1].split(",").map((item, idx)=>{
								return(
									<>
										{item !== ""?
											<li>{item.trim()}</li>
										:""}
									</>
								)
							})}
						</ul>
					</BoxSection>
					<BoxSection>
						<h3 className="text__h3">조리 순서</h3>
						<ul className="list__recipe">
							<li className="list-item">
								<div className="box__image"><img src={data?.MANUAL_IMG01} alt="" /></div>
								<div className="box__text">
									<p className="text">{data?.MANUAL01}</p>
								</div>
							</li>
						</ul>
					</BoxSection>
				</BoxDetail>
			}
		</>
	)
}