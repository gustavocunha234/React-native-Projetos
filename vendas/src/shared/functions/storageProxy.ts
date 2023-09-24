import AsyncStorage from '@react-native-async-storage/async-storage';


export const setItemStorage = (key: string, value: string) =>
        AsyncStorage.setItem(key, value).catch();

export const getItemStorage = (key: string) => AsyncStorage.getItem(key).catch(() => '');

export const removeItemStorage = (key: string) => AsyncStorage.removeItem(key).catch();
