import { initializeApp } from "firebase/app";
import { doc, getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

class FirestoreTasksDb {
    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyAtecgRrNBEO96UOA_EszqzhaIItgS8WHA",
            authDomain: "crossplatform-lab-e922f.firebaseapp.com",
            projectId: "crossplatform-lab-e922f",
            storageBucket: "crossplatform-lab-e922f.appspot.com",
            messagingSenderId: "798170205892",
            appId: "1:798170205892:web:52dc1475b3f07c510d0391"
        };
        this.collectionName = "lab4-todoList";
        this.db = getFirestore(initializeApp(firebaseConfig))
        this.dbCollection = collection(this.db, this.collectionName);
    }

    getAllTasks = () => {
        return new Promise((resolve, reject) => {
            getDocs(this.dbCollection)
            .then(snapshot => {
                let tasks = [];
                snapshot.forEach(doc => {
                    let task = doc.data();
                    task.id = doc.id;
                    tasks.push(task);
                });
                resolve(tasks);
            })
            .catch(error => reject(error))
        })    
    }

    addTask = (task) => {
        return new Promise((resolve, reject) => {
            addDoc(this.dbCollection, task)
            .then(docRef => resolve(docRef.id))
            .catch(error => reject(error));
        })
    }

    updateTask = (id, task) => {
        const docRef = doc(this.db, this.collectionName, id);
        return new Promise((resolve, reject) => {
            updateDoc(docRef, task)
            .then(() => resolve())
            .catch(error => reject(error));
        });
    }

    removeTask = id => {
        const docRef = doc(this.db, this.collectionName, id);
        return new Promise((resolve, reject) => {
            deleteDoc(docRef)
            .then(() => resolve())
            .catch(error => reject(error));
        });
    }
}

export default new FirestoreTasksDb();