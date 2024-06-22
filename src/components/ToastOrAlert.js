import { Platform, ToastAndroid, Alert } from 'react-native';

export default function ToastOrAlert(message) {
    if (Platform.OS === 'android') ToastAndroid.show(message, ToastAndroid.SHORT);
    else if (Platform.OS === 'ios') Alert.alert(message);
}