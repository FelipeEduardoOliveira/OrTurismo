import React from "react";
import {
  CheckboxContainerInput,
  IconDescription,
  InputCheckbox,
  TitleCheckbox,
  TitleQuestions,
} from "./style";
import InfoIcon from "../../Assets/info.png";
import Tooltip from "@mui/material/Tooltip";
interface IObjectToArray {
  title: string;
  subscrition: string;
  type: string
}

interface IPropsCheckbox {
  listData: Array<IObjectToArray>;
  Title: string;
  setmessageCheck: any;
  messageCheck: any;

}

const CheckboxInput = ({ Title, listData, setmessageCheck, messageCheck}: IPropsCheckbox) => {
  

  // let checkListMessage: any = [];

  const atualizaState = (item:any) =>{
    setmessageCheck(item)
  }
 

  const handleClickChecked = (Item: string) => {

    let copyArray = messageCheck;

    if(!copyArray.includes(Item)){
      copyArray.push(Item);
    }else{
      let removeArray = copyArray.filter((e:any) => e !== Item);

      copyArray = removeArray;
    }


    atualizaState(copyArray)

    // console.log({checkListMessage})
    // if (!checkListMessage.includes(Item)) {
    //   checkListMessage.push(Item);
    // } else {
    //   let removeArray = checkListMessage.filter((e:any) => e !== Item);

    //   checkListMessage = removeArray;
    // }
  }

  const renderListCheckbox = (list: Array<IObjectToArray>) => {
    return list.map((item: IObjectToArray, index) => {
      return (
        <TitleCheckbox htmlFor={item.title} key={`title-check-${index}`}>
          <InputCheckbox
          key={'Item-check'}
            type="checkbox"
            id={item.title}
            name={item.title}
            onChange={() => handleClickChecked(item.title)}
          />
          {item.title}

          {item.subscrition && (
            <Tooltip title={item.subscrition} arrow>
              <IconDescription width={"20px"} src={InfoIcon} />
            </Tooltip>
          )}
        </TitleCheckbox>
      );
    });
  };

  return (
    <CheckboxContainerInput key={'Checkxlis-personalizado'}>
      <TitleQuestions >{Title}</TitleQuestions>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {renderListCheckbox(listData)}
      </div>
    </CheckboxContainerInput>
  );
};

export default CheckboxInput;
