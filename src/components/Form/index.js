import { View, Text, TextInput, Switch, Button, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
import firestoreTasksDb from '../../databases/FirestoreTasksDb';
import ToastOrAlert from '../ToastOrAlert';
import Error from '../Error';
import styles from './styles';

export default function Form({ onAddTask}) {
    const [description, setDescription] = useState("");
    const [isDone, setIsDone] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const [loadingAddTask, setLoadingAddTask] = useState(false);
    const [errorAddTask, setErrorAddTask] = useState(null);
  
    useEffect(() => {
        if(!errorAddTask && !loadingAddTask) { // Reset form if no error 
            setDescription("");
            setIsDone(false);
        }
    }, [loadingAddTask]);

    const handleOnAddPress = () => {
        Keyboard.dismiss();

        if(!description) {
            setIsValid(false);
            return;
        }

        setIsValid(true);  
      
        setLoadingAddTask(true);
        setErrorAddTask(null);
        firestoreTasksDb.addTask({description, isDone})
        .then(id => {
            ToastOrAlert(`Task '${description}' added`);
            onAddTask(id, description, isDone); 
            setLoadingAddTask(false);
        })
        .catch(error => {
            setErrorAddTask(error);
            setLoadingAddTask(false);
        });  
    }

    return (
        <>
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter a Task Title"
                maxLength={100}
                value={description}
                onChangeText={setDescription}
                editable={!loadingAddTask}
            ></TextInput>

            {!isValid && <Text style={styles.error}> Title is required! </Text>}

            <View style={styles.taskStatus}>
                <Text>Completed:</Text>
                <Switch
                    onValueChange={setIsDone}
                    value={isDone}
                    disabled={loadingAddTask}
                />
            </View>

            <Button title={loadingAddTask ? "Adding..." : errorAddTask ? "Try Again" : "Add"} onPress={handleOnAddPress} disabled={loadingAddTask}/>
        </View>

        <View>{errorAddTask && <Error message={errorAddTask.message}/>}</View>
        </>
    )
}