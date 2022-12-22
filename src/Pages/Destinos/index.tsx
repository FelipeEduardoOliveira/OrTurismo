import axios from "axios";
import React, { useEffect, useState } from "react";
import { ContainerDestiny } from "./styled";


const Destinos = () => {
  const [dataInsta, setDataInsta] = useState<any>([]);
  const tokenInsta = process.env.REACT_APP_INSTA_TOKEN;
  const fields = "media_url,media_type,permalink,caption";
  const urlInsta = `https://graph.instagram.com/me/media?access_token=${tokenInsta}&fields=${fields}`;



  const renderMock = () =>{

    if(dataInsta.data){
        return dataInsta.data.map((item:any)=>{
            // return <p>{item.permalink}</p>
            return <img src={item.media_url} width={'200px'} />
        })
    }else{
<p></p>
    }
    
  }


  const callDataInsta = async () => {
    await axios
      .get(urlInsta)
      .then(async (res) => {
        setDataInsta(res.data);
      })
      .catch(async (error) => {
        return await error;
      });
  };



  useEffect(() => {
    callDataInsta();
  }, []);
  

  return (
      <ContainerDestiny>
        {/* {renderMock()} */}
        
        </ContainerDestiny>
  );
};

export default Destinos;
