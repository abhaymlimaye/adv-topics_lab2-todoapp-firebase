import styles from './styles';
import { View, Text } from 'react-native';

export default function Error() {
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>No Tasks.</Text>
        </View>
    )
}