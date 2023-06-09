import { Task } from "./interface/Tack";

interface Props {
  task: Task;
}
export const Card = ({ task }: Props) => {
  return (
    <div className="card p-5 text-danger">
      <h2>{task.title}</h2>
      <h2>{task.description}</h2>
    </div>
  );
};
