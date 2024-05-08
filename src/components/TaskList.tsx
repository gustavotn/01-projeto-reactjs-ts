import { ClipboardText } from 'phosphor-react';
import { ITask } from './Tasker';

import styles from './TaskList.module.css';
import { Task } from './Task';

interface TaskListProps {
  tasks: ITask[],
  setTasks: (tasks: ITask[]) => void
}

export function TaskList({ tasks, setTasks }: TaskListProps) {

  const countTasks = tasks.length;
  const countCompletedTasks = tasks.filter(task => task.isFinished).length;
  const hasTasks = countTasks !== 0;

  function formatCompletedTasks()
  {
    if (tasks.length > 0)
      return countCompletedTasks.toString() + " de " + countTasks.toString();
    else
      return "0";
  }

  function deleteTask(id: string) {
    const tasksFiltered = tasks.filter(task => {
      return id !== task.id;
    })

    setTasks(tasksFiltered);
  }

  function markTaskCompleted(id: string) {
    console.log('Teste')


    const taskFiltered = tasks.map(task => {
      if (task.id === id)
        task.isFinished = !task.isFinished

      return task;
    })


    setTasks(taskFiltered);
  }

  return (
    <div className={styles.taskList}>
      <header>
        <span className={styles.textCreatedTasks}>
          Tarefas criadas <span>{countTasks}</span>
        </span>
        <span className={styles.textCompletedTasks}>
          Concluídas <span>{formatCompletedTasks()}</span>
        </span>
      </header>
      { !hasTasks ? 
        <article>
          <ClipboardText size={56} weight='regular'/>
          <span>Você ainda não tem tarefas cadastradas<br/><span>Crie tarefas e organize seus itens a fazer</span></span>
        </article>
        :
        tasks.map(task => {
          return (
            <Task 
              key={task.id}
              task={task}
              onDeleteTask={(id) => deleteTask(id)}
              onMarkTaskCompleted={(id) => markTaskCompleted(id)}
            />
          )
        })
      }
    </div>
  );
}