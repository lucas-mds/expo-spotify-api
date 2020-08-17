import { AsyncStorage } from 'react-native';
import isParsable from './isParsable';

export const setItem = (key, item) => {
  const data = typeof item === 'object' ? JSON.stringify(item) : item;
  AsyncStorage.setItem(key, data);
};

export const getItem = async(key) => {
  try {
    const item = await AsyncStorage.getItem(key);

    if (isParsable(item)) {
      return JSON.parse(item);
    }

    return item;
  } catch(error) {
    return null;
  }
};
