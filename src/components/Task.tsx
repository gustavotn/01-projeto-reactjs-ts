import { Trash, Check } from 'phosphor-react';
import styles from './Task.module.css';
import { ITask } from './Tasker';

interface TaskProps {
  task: ITask;
  onMarkTaskCompleted: (id:string) => void 
  onDeleteTask: (id:string) => void
}

export function Task({ task, onMarkTaskCompleted, onDeleteTask }: TaskProps) {
  
  return (
    <div className={styles.task}>
      <div 
        className={styles.circleContainer + ' ' + (task.isFinished ? styles.circleContainerCheked : '' )}
        onClick={() => onMarkTaskCompleted(task.id)}
      >
        { !task.isFinished && <div className={styles.circleUnchecked}></div> }
        { task.isFinished && <Check className={styles.circleChecked} /> }
      </div>
      <p>{task.description}</p>
      <Trash
        className={styles.trash} 
        size={32}
        onClick={() => onDeleteTask(task.id)}
      />
    </div>
  );
}