export interface ITask {
  id: number;
  text: string;
  isCompleted: boolean;
}

export type ITaskWithoutText = Omit<ITask, "text">;
