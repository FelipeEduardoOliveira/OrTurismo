import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../../Components/Card";
import TitleDivisor from "../../Components/TitleDivisor";
import { reservedWord } from "../enums";
import { ContainerCardsBlog, ContainerDestiny } from "./styled";

const Blog = () => {
  

  const [dataInsta, setDataInsta] = useState<any>([]);
  const tokenInsta = process.env.REACT_APP_INSTA_TOKEN;
  const fields = "media_url,media_type,permalink,caption";
  const urlInsta = `https://graph.instagram.com/me/media?access_token=${tokenInsta}&fields=${fields}`;

  const redirect = (item:any) =>{
    <Link to='/post-details' state={item}/>
  }

  const normalizeObject = (data: any) => {
    return {
      ...data,
      picture: data.media_url,
      name: data.id,
      description: data.caption.substring(0,100).concat('...'),
      completeDescription: data.caption,
      title: "Notícia",
    };
  };



  const filterTypeMedia = (data:any) =>{
      return data.filter((item:any) => item.media_type === 'IMAGE' && reservedWord.includes(item.caption.split('')[0]))
  }

  const renderMock = () => {
    if (dataInsta.data) {
      return filterTypeMedia(dataInsta.data).map((item: any) => {
        // return <p>{item.permalink}</p>
        // console.log({item})
        return <Link to='/post-details' state={item}><Cards data={normalizeObject(item)}/></Link>;
        // return <img src={item.media_url} width={'200px'} />
      });
    } else {
      return <p>Não há posts para serem exibidos</p>;
    }
  };

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
      <TitleDivisor title="Informações sobre suas viagens" />

      <ContainerCardsBlog>{renderMock()}</ContainerCardsBlog>
    </ContainerDestiny>
  );
};

export default Blog;
