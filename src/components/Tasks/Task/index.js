import { View, Text, Pressable, Modal, Switch, Alert } from 'react-native';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';
import firestoreTasksDb from '../../../databases/FirestoreTasksDb';
import ToastOrAlert from '../../ToastOrAlert';

export default function Task(props) {
    const [loadingUpdateTask, setLoadingUpdateTask] = useState(false);
    const [loadingRemoveTask, setLoadingRemoveTask] = useState(false);

    const handleStatusChange = (isSelected) => {
        setLoadingUpdateTask(true);
        firestoreTasksDb.updateTask(props.id, {isDone: isSelected})
        .then(() => {
            ToastOrAlert("Status Updated");
            props.onStatusChange(props.id, isSelected)
            setLoadingUpdateTask(false);
        })
        .catch(error => {
            setLoadingUpdateTask(false);
        });  
    }

    const dbRemoveTask = () => {
        setLoadingRemoveTask(true);
        firestoreTasksDb.removeTask(props.id)
        .then(() => {
            ToastOrAlert(`Task '${props.description}' Removed`);
            props.onTaskRemoval(props.id);
            setLoadingRemoveTask(false);
        })
        .catch(error => {
            setLoadingRemoveTask(false);
        });
    }

    const handleRemovePress = () => {
        Alert.alert(
            "Remove Task",
            "Are you sure? This action cannot be undone!", 
            [{ text: 'Confirm', onPress: dbRemoveTask}, { text: 'Cancel' }]
        );
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.rowSpreadout}>
                    <View style={styles.column80}>
                        <Text style={styles.description}> {props.description} </Text>
                        <Text style={styles.id}> Id: {props.id} </Text>
                    </View>

                    <View style={styles.column20}>      
                        <Text style={[styles.status, props.isDone ? styles.statusCompleted : styles.statusOpen]}> 
                            {props.isDone ? "Done" : "Due"}</Text>
                    </View>
                </View>

                <View style={styles.rowAction}>         
                    <Pressable onPress={handleRemovePress} disabled={loadingRemoveTask}>
                        <FontAwesome5 style={styles.btnRemove} name="trash" size={20}/>
                    </Pressable>

                    { loadingUpdateTask ? <Text style={styles.updatingText}>Updating...</Text> : <Switch value={props.isDone} onValueChange={isSelected => handleStatusChange(isSelected)}/> }
                </View>
            </View>
        </>   
    )
}