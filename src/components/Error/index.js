import styles from './styles';
import { View, Text } from 'react-native';

export default function Error(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}> {("Error: "+props.message) || "Error: Something went wrong!"} </Text>
        </View>
    )
}