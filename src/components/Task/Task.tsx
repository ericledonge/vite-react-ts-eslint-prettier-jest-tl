import React, { FC } from 'react';

export type TaskModel = {
  id: string;
  title: string;
  state: 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED';
};

export type TaskProps = {
  task: TaskModel;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
};

const Task: FC<TaskProps> = ({ task, onArchiveTask, onPinTask }) => {
  const { id, title, state } = task;

  return (
    <div className={`list-item ${state}`}>
      <label htmlFor="checked" aria-label={`archiveTask-${id}`} className="checkbox">
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === 'TASK_ARCHIVED'}
        />

        <span
          role="button"
          tabIndex={0}
          className="checkbox-custom"
          onClick={() => onArchiveTask(id)}
          onKeyDown={() => onArchiveTask(id)}
        />
      </label>

      <label htmlFor="title" aria-label={title} className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
      </label>

      {state !== 'TASK_ARCHIVED' && (
        <button
          className="pin-button"
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}>
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
};

export default Task;
