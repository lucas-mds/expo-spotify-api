import React from 'react';

import UI from './layout';

export default function({ open, onBackdropPress, formConfig }) {
  const [values, setValues] = React.useState({
    string: '',
  })

  const setValue = (field, value) => {
    setValues({ ...values, [field]: value })
  }

  const clearValues = () => {
    setValues({
      string: '',
    });
  }

  return(
    <UI
      open={open}
      onBackdropPress={onBackdropPress}
      formConfig={{...formConfig, values, setValue, clearValues }}
    />
  )
};