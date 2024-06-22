import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 20,
       // backgroundColor: '#e9eef5',
       backgroundColor: "#dfeaf7",
    },
    input: {
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    taskStatus: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
});

export default styles;