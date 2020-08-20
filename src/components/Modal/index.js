import React from 'react';

import UI from './layout';

export default function({ open, formConfig }) {
  const [values, setValues] = React.useState({
    string: '',
  })

  const setValue = (field, value) => {
    setValues({ ...values, [field]: value })
  }

  return(
    <UI
      open={open}
      formConfig={{...formConfig, values, setValue }}
    />
  )
};