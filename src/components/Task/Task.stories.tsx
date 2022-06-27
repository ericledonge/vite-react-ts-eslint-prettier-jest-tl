import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Task, { TaskModel, TaskProps } from './Task';

export default {
  component: Task,
  title: 'Task',
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args: TaskProps) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  } as TaskModel,
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  } as TaskModel,
};
