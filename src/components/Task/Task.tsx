import React from 'react';

export type TaskModel = {
  id: string;
  title: string;
  state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';
};

export type TaskProps = {
  task: TaskModel;
  onArchiveTask: () => void;
  onPinTask: () => void;
};

const Task = ({ task, onArchiveTask, onPinTask }: TaskProps) => {
  return (
    <div className="list-item">
      <label htmlFor="title" aria-label={task.title}>
        <input type="text" value={task.title} readOnly={true} name="title" />
      </label>
    </div>
  );
};

export default Task;
