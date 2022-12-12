import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import { Loading } from "../components/Loading";


export interface dataType { 
	RCP_PARTS_DTLS : string | undefined,
	RCP_WAY2 : string | undefined,
	MANUAL_IMG20 : string | undefined,
	MANUAL20 : string | undefined,
	RCP_SEQ : string | undefined,
	INFO_NA : string | undefined,
	INFO_WGT : string | undefined,
	INFO_PRO : string | undefined,
	MANUAL_IMG13 : string | undefined,
	MANUAL_IMG14 : string | undefined,
	MANUAL_IMG15 : string | undefined,
	MANUAL_IMG16 : string | undefined,
	MANUAL_IMG10 : string | undefined,
	MANUAL_IMG11 : string | undefined,
	MANUAL_IMG12 : string | undefined,
	MANUAL_IMG17 : string | undefined,
	MANUAL_IMG18 : string | undefined,
	MANUAL_IMG19 : string | undefined,
	INFO_FAT : string | undefined,
	HASH_TAG : string | undefined,
	MANUAL_IMG02 : string | undefined,
	MANUAL_IMG03 : string | undefined,
	RCP_PAT2 : string | undefined,
	MANUAL_IMG04 : string | undefined,
	MANUAL_IMG05 : string | undefined,
	MANUAL_IMG01 : string | undefined,
	MANUAL01 : string | undefined,
	ATT_FILE_NO_MK : string | undefined,
	MANUAL_IMG06 : string | undefined,
	MANUAL_IMG07 : string | undefined,
	MANUAL_IMG08 : string | undefined,
	MANUAL_IMG09 : string | undefined,
	MANUAL08 : string | undefined,
	MANUAL09 : string | undefined,
	MANUAL06 : string | undefined,
	MANUAL07 : string | undefined,
	MANUAL04 : string | undefined,
	MANUAL05 : string | undefined,
	MANUAL02 : string | undefined,
	MANUAL03 : string | undefined,
	ATT_FILE_NO_MAIN : string | undefined,
	MANUAL11 : string | undefined,
	MANUAL12 : string | undefined,
	MANUAL10 : string | undefined,
	INFO_CAR : string | undefined,
	MANUAL19 : string | undefined,
	INFO_ENG : string | undefined,
	MANUAL17 : string | undefined,
	MANUAL18 : string | undefined,
	RCP_NM : string | undefined,
	MANUAL15 : string | undefined,
	MANUAL16 : string | undefined,
	MANUAL13 : string | undefined,
	MANUAL14 : string | undefined,
}

export function Detail(){
	let [load, setLoad] = useState(false);
	let [item, setItem] = useState<dataType>();
	const {idx} = useParams();
	console.log("params=>" + idx)

	useEffect(()=>{
		var key = "eee79f6774ce45108ed4";
		axios.get("http://openapi.foodsafetykorea.go.kr/api/"+ key +"/COOKRCP01/json/"+idx+"/"+ idx).then((res)=>{
				setItem(res.data.COOKRCP01.row);
				setLoad(true);
		}).catch((error)=>{
				console.log(error)
		})
	}, [idx]);

	const BoxDetail = styled.div`

	`;


	console.log(item)


	return(
		<>
			{load === false?
				<Loading />
			:
				<BoxDetail>
					<div className="box__image">
						<img src="" alt="" />
					</div>
				</BoxDetail>
			}
			
		</>
	)
}