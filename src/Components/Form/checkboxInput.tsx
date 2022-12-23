import React from "react";
import { CheckboxContainerInput, IconDescription, InputCheckbox, TitleCheckbox, TitleQuestions } from "./style";
import InfoIcon from '../../Assets/info.png';
import Tooltip from '@mui/material/Tooltip';
interface IObjectToArray {
  title: string;
  subscrition: string;
}

interface IPropsCheckbox {
  listData: Array<IObjectToArray>;
  Title: string;
}

const CheckboxInput = ({ Title, listData }: IPropsCheckbox) => {


  const renderListCheckbox = (list: Array<IObjectToArray>) => {
    return list.map((item: IObjectToArray) => {
      return (
        <TitleCheckbox htmlFor={item.title}>
            
          <InputCheckbox type="checkbox" id={item.title} name={item.title} />
          {item.title}
          

          {item.subscrition && (
            <Tooltip title={item.subscrition} arrow>
          <IconDescription width={'20px'} src={InfoIcon}/>
          </Tooltip>
          )}
          
        </TitleCheckbox>
      );
    });
  };

  return (
    <CheckboxContainerInput>
      <TitleQuestions>{Title}</TitleQuestions>

      <div style={{display:'flex', flexDirection:'column'}}>

      {renderListCheckbox(listData)}
      
      </div>

      
    </CheckboxContainerInput>
  );
};

export default CheckboxInput;
