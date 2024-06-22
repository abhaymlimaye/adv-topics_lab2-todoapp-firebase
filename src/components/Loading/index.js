import styles from './styles';
import { View, Text } from 'react-native';

export default function Error(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}> {props.message || "Please wait..."} </Text>
        </View>
    )
}