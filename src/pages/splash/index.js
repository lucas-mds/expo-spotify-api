import React, { useEffect } from 'react';
import { getItem } from '../../utils/storage';

import UI from './styles';

export default function({ navigation }) {
  useEffect(() => {
    const verifyAuthentication = async() => {
        const user = await getItem('user');
        if (!user) {
          console.log('ir para login')
        } else {
          navigation.navigate('Login');
        }
    };

    verifyAuthentication();
  }, []);

  return <UI />
}
