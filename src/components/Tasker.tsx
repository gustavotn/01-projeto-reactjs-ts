import { useState } from 'react';
import { TaskBuilder } from './TaskBuilder';
import styles from './Tasker.module.css';
import { TaskList } from './TaskList';

export interface ITask {
    id:string,
    description: string,
    isFinished: boolean
}

export function Tasker() {

    const [tasks, setTasks] = useState<ITask[]>([]);

    function createNewTask(description: string) {
        const id = tasks.length.toString();

        setTasks((state) => [...state, { id, description, isFinished: false }])
    }

    return (
        <div className={styles.wrapper}>
            <TaskBuilder setTask={(description) => { createNewTask(description) }} />
            <TaskList 
                tasks={tasks} 
                setTasks={(tasks) => setTasks(tasks)}
            />
        </div>
    )
}