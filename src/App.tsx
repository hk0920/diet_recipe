import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from './components/Header';
import { Detail } from './pages/Detail';
import { DetailUpgrade } from './pages/DetailUpgrade';
import { Home } from './pages/Home';
import axios from 'axios';
import { Loading } from './components/Loading';

// axios.defaults.withCredentials = true; 

export interface dataType {
  name : string,
  stateCode : number,
  addr1 : string,
  addr2 : string,
  addrCode : number,
  category : string,
  x : number,
  y: number,
}
function App() {
  const [listData, setListData] = useState([]);
  let [load, setLoad] = useState(false);
  let [total, setTotal] = useState(0);
  let [cnt, setCnt] = useState(1);
  const apiUrl = `${process.env.REACT_APP_BACK_API}${process.env.REACT_APP_API_KEY}/${process.env.REACT_APP_BACK_SERVICE}`;

  function searchEvt(srchWord:string){
    const startNum = 0;
    const endNum = 10;
    setLoad(false);

    axios.get(apiUrl+"/json/"+ startNum  + "/" + endNum + "/RCP_NM="+srchWord).then((res)=>{
      const dataAdd = res.data.COOKRCP01.row;
      setLoad(true);
      setListData(dataAdd);
    }).catch((error)=>{
      console.log(error)
    });
  }

  function moreEvt(){
    setCnt(cnt+1);
    setLoad(false);
    const oldNum = cnt*10;
    const startNum = oldNum+1;
    const endNum = (cnt+1)*10;

    axios.get(apiUrl+"/json/"+ startNum  + "/" + endNum).then((res)=>{
      const dataAdd = res.data.COOKRCP01.row;
      setListData(listData.concat(dataAdd));
      setLoad(true);
    }).catch((error)=>{
      console.log(error)
    });
  }

  function paging(totalData:number, pageCount:number, currentPage:number){
    const totalPage = Math.ceil(totalData / 10); //총 페이지 수
  
    if(totalPage<pageCount){
      pageCount=totalPage;
    }
    
    let pageGroup = Math.ceil(currentPage / pageCount); // 페이지 그룹
    let last = pageGroup * pageCount; //화면에 보여질 마지막 페이지 번호
    
    if (last > totalPage) {
      last = totalPage;
    }
  
    let first = last - (pageCount - 1); //화면에 보여질 첫번째 페이지 번호
    let isNext = false;
    let isPrev = false;

    if(currentPage > 0 || currentPage < 10) isPrev = false;
    else isPrev = true;

    if(last+10 > totalPage) isNext = false;
    else isNext = true;

    return {
      first, 
      last,
      isNext,
      isPrev
    }
    console.log(first, last)
    console.log(total, totalPage, pageCount, currentPage)
  }

  useEffect(()=>{    
    if(!listData.length){
      axios.get(apiUrl +"/json/1/10").then((res)=>{
        console.log(res)
        setTotal(res.data.COOKRCP01.total_count);
        setListData(res.data.COOKRCP01.row);
        if(!load){
          setLoad(true);
        }
      }).catch((error)=>{
        console.log(error)
      });
    }
    paging(total, 10, 1);
  }, [listData]);

  return (
    <BrowserRouter>
        <div className="wrap">
          <Header searchEvt={searchEvt}/>
          {load === false?
            <Loading />
          :
            <div id="cBody">
              <Routes>
                <Route path="/" element={<Home listData={listData} total={total} moreEvt={moreEvt} paging={paging}/>}></Route>
                <Route path="/detail/:name" element={<Detail/>}></Route>
                <Route path="/detail-upgrade/:name" element={<DetailUpgrade/>}></Route>
              </Routes>
            </div>
          }
        </div>
    </BrowserRouter>
  );
}

export default App;
