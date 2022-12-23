import * as React from 'react';
import { DataContainer } from './styled';

export default function BasicDatePicker({value, setValue, minDate, title}:any) {

  return (
    <DataContainer>
        <p><strong>{title ? title : 'Insira um titulo'}</strong></p>
    <input
        type={'date'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={minDate && minDate}
        id={'dataField'}
    />


    </DataContainer>
  );
}