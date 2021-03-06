import React, { useEffect } from 'react';
import { getItem, setItem } from '../../utils/storage';
import { useGlobalContext } from '../../config/global-context';

import UI from './layout';

export default function({ navigation }) {
  const { newState } = useGlobalContext();

  useEffect(() => {
    const verifyAuthentication = async() => {
        const token = await getItem('token');
        setTimeout(() => {
          if (!token) {
            navigation.navigate('Login');
          } else {
            newState({token: token})
            setItem('token', token)
            navigation.navigate('Home');
          }
        }, 1500)
    };

    verifyAuthentication();
  }, []);

  return <UI />
}
