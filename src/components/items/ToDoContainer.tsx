import ToDo from "../../data/Data";
import ToDoItem from "./ToDoItem";

interface ToDoContainerProps {
  tasks: ToDo[];
}

const ToDoContainer = ({ tasks }: ToDoContainerProps) => {
  let sectionTitle = "To Do List";

  if (tasks.length > 0 && tasks[0].isDone === true) {
    sectionTitle = "Tasks Completed";
  }

  return (
    <div className="my-3 p-3 bg-body rounded shadow-sm">
      <h6 className="border-bottom pb-2 mb-0">{sectionTitle}</h6>
      {tasks.length === 0 && <p>You dont have any tasks, enjoy your day!</p>}
      {tasks.map((toDo, index) => (
        <ToDoItem index={index} toDo={toDo} />
      ))}
    </div>
  );
};

export default ToDoContainer;
