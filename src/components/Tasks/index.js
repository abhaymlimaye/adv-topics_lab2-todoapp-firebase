import { ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import Error from '../Error';
import Loading from '../Loading';
import NoTasks from '../NoTasks';
import styles from './styles';
import Task from './Task';
import firestoreTasksDb from '../../databases/FirestoreTasksDb';

export default function Tasks({tasks, setTasks, onStatusChange, onTaskRemoval}) {
    const [loadingAllTasks, setLoadingAllTasks] = useState(false);
    const [errorAllTasks, setErrorAllTasks] = useState(null);
  
    useEffect(() => renderAllTasks(), []);
  
    const renderAllTasks = () => {
      setTasks([]);
      setLoadingAllTasks(true);
      setErrorAllTasks(null);
  
      firestoreTasksDb.getAllTasks()
      .then(tasks => {
        setTasks(tasks)
        setLoadingAllTasks(false);
      })
      .catch(error => {
        setErrorAllTasks(error);
        setLoadingAllTasks(false);
      });
    }

    return (
        <ScrollView style={styles.container}>
        { 
            errorAllTasks ? (<Error message={errorAllTasks.message}/>) :
            loadingAllTasks ? (<Loading message={"Loading Tasks..."}/>) :
            (!errorAllTasks && !loadingAllTasks && !(tasks && tasks.length)) ? (<NoTasks/>) :
            (tasks.map((task, index) => <Task key={index} id={task.id} description={task.description} isDone={task.isDone} onStatusChange={onStatusChange} onTaskRemoval={onTaskRemoval}/>))
        }
        </ScrollView> 
    )
}