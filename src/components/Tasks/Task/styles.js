import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'column',   
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#dfeaf7',
        marginBottom: 20,
    },  
    description: {
        fontSize: 20,
        marginBottom: 5,
    },  
    id: {
        fontSize: 12,
        color: 'slategray',
    },
    status: {
        padding: 5,
        borderRadius: 15,
        width: 60,
        textAlign: 'center',
    },
    statusOpen: {
        backgroundColor: 'pink',
    },
    statusCompleted: {
        backgroundColor: '#9edba6',
    },
    rowSpreadout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    rowAction: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 5,
        marginTop: 10,
        paddingBottom: 0,
        borderTopColor: 'lightblue',
        borderTopWidth: 1,
    },
    column80: {
        flex: 8,
    },
    column20: {
        flex: 2,
        padding: 5,
    },
    btnRemove: {
        color: 'red',
    },
    updatingText: {
        color: 'gray',
        fontWeight: 'bold',
        paddingVertical: 14,
    }
});

export default styles;