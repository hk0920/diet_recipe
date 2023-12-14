import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Empty } from "../components/Empty";
import { Loading } from "../components/Loading";
import { BoxDetail, BoxSection, ListCalory } from "../styles/GlobalStyle";

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
	const {name} = useParams();
	let [load, setLoad] = useState(false);
	let [data, setData] = useState<dataType>();
	let [manual, setManual] = useState([]);	
  const apiUrl = `${process.env.REACT_APP_BACK_API}${process.env.REACT_APP_API_KEY}/${process.env.REACT_APP_BACK_SERVICE}`;

	useEffect(()=>{
		axios.get(apiUrl+"/json/1/2/"+"/RCP_NM="+name).then((res)=>{
			setData(res.data.COOKRCP01.row[0]);
			setLoad(true);
			
			// let dataKey = Object.keys(res.data.COOKRCP01.row[0]);
			// let dataObj = {
			// 	text: "",
			// 	img : ""
			// }
			// console.log(dataKey)
			// for(let item in dataKey){
			// 	const recipeTarget = dataKey[item].match("MANUAL");
			// 	const recipeStr = recipeTarget?.input?.toString();
			// 	const recipeKey = recipeStr?.substring(0, recipeStr.length-2);
			// 	const idx = recipeStr?.substring(recipeStr.length-2, recipeStr.length);

			// 	if(recipeKey === "MANUAL"){
			// 		// dataObj.text = Object.values(recipeKey);
			// 	}
			// 	console.log(recipeKey , idx)
			// 	// console.log(recipeStr?.substring(recipeStr.length-2, recipeStr.length))
			// }
		}).catch((error)=>{
			console.log(error)
		})
	},[load]);

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
								const itemFood = item !== ""? <li key={idx}>{item.trim()}</li> : null;
								return(
									itemFood
								)
							})}
						</ul>
					</BoxSection>
					{data?.MANUAL01 !== ""?
						<BoxSection>
							<h3 className="text__h3">조리 순서</h3>
							<ul className="list__recipe">
								{data?.MANUAL01 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG01} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL01}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL02 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG02} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL02}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL03 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG03} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL03}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL04 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG04} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL04}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL05 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG05} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL05}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL06 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG06} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL06}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL07 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG07} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL07}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL08 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG08} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL08}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL09 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG09} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL09}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL10 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG10} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL10}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL11 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG11} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL11}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL12 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG12} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL12}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL13 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG13} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL13}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL14 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG14} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL14}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL15 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG15} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL15}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL16 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG16} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL16}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL17 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG17} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL17}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL18 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG18} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL18}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL19 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG19} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL19}</p>
										</div>
									</li>
								:""}
								{data?.MANUAL20 !== ""?
									<li className="list-item">
										<div className="box__image"><img src={data?.MANUAL_IMG20} alt="" /></div>
										<div className="box__text">
											<p className="text">{data?.MANUAL20}</p>
										</div>
									</li>
								:""}
							</ul>
						</BoxSection>
					:	
						<Empty text="등록된 조리순서가 없습니다."/>
					}
					
				</BoxDetail>
			}
		</>
	)
}