import axios from "axios"

interface ApiProps {
  method: string;
  url:string|undefined;
  params:object;
  contentType:string|null;
}
export const Api = (props:ApiProps) => {
  axios.defaults.withCredentials = true;
  let defaultContentType = "application/json";
  if(props.contentType !== null){
    defaultContentType = props.contentType;
  }  

  axios({
    headers:{
      "key": process.env.REACT_APP_KEY,
      "content-Type":defaultContentType
    },
    url: props.url,
    method: props.method,
    params: props.params
  }).then((res)=>{
    return(res);
  }).catch((error)=>{
    console.log(error)
  })
}