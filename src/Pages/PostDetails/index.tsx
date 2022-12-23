import React from "react";
import { useLocation } from "react-router-dom";
import { ContainerImagem, ContainerPost, ContainerText, ContainerVoltar } from "./styled";
import VoltarIcon from '../../Assets/voltar.png';
import { Link } from "react-router-dom";

const PostDetails = () =>{
    const location = useLocation();
const data = location.state;
    return(
        <ContainerPost>
            <ContainerVoltar>
            <Link to='/blog'><img src={VoltarIcon} width={'20px'}/> Voltar</Link>
            </ContainerVoltar>
            <ContainerImagem>
                <img src={data.media_url} alt={'Imagem-da-noticia'}/>
            </ContainerImagem>
            <ContainerText>
                <span>
                    {data.caption}
                </span>
                </ContainerText>
        </ContainerPost>
    )
}

export default PostDetails;