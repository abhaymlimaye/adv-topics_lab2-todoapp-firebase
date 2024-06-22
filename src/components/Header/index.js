import { View, Text } from 'react-native';
import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <FontAwesome5 name="clipboard-list" size={30} />
        <Text style={styles.title}>Todo App</Text>
      </View>
      <Text style={styles.subTitle}>by Abhay Limaye</Text>
    </View>
  );
}