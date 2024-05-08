import { PlusCircle } from 'phosphor-react'

import styles from './TaskBuilder.module.css';
import { useState } from 'react';

interface TaskBuilderProps {
  setTask: (description: string) => void
}

export function  TaskBuilder({setTask}: TaskBuilderProps) {

  const [description, setDescription] = useState('');

  const hasDescription = description !== '';

  function handleCreateTask() {
    setTask(description),
    setDescription('')
  }

  return (
    <div className={styles.taskBuilder}>
      <input 
        placeholder="Adicione uma nova tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button 
        onClick={handleCreateTask}
        disabled={!hasDescription}
      >
        Criar
        <PlusCircle size={16} weight='bold'/>
      </button>
    </div>
  )
}