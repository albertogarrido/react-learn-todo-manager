import { useState } from "react";
import AddToDoForm from "./components/AddToDoForm";
import ToDo from "./data/Data";

function App() {
  const [pendingTasks, setPendingTasks] = useState([] as ToDo[]);
  const [doneTasks, setDoneTasks] = useState([] as ToDo[]);

  const handleAddItem = (toDo: ToDo) => {
    if (toDo.isDone) {
      setDoneTasks([...doneTasks, toDo]);
    } else {
      setPendingTasks([...pendingTasks, toDo]);
    }
  };

  const handleAddMultiple = (toDo: ToDo[]) => {
    setDoneTasks([...doneTasks, ...toDo.filter((item) => item.isDone)]);
    setPendingTasks([...pendingTasks, ...toDo.filter((item) => !item.isDone)]);
  };

  return (
    <main className="container">
      <AddToDoForm
        onAddItem={handleAddItem}
        onAddMultiple={handleAddMultiple}
      />

      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0">To Do List</h6>
        {pendingTasks.length === 0 && (
          <p>You dont have any tasks, enjoy your day!</p>
        )}
        {pendingTasks.map((todo, index) => (
          <div
            key={index}
            className="d-flex text-body-secondary pt-3 border-bottom"
          >
            <p className="pb-3 mb-0 small lh-sm ">
              <strong className="d-block text-gray-dark">{todo.title}</strong>
              {todo.description}
            </p>
          </div>
        ))}
      </div>
      {doneTasks.length > 0 && (
        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <h6 className="border-bottom pb-2 mb-0">Tasks Completed</h6>

          {doneTasks.map((todo, index) => (
            <div
              key={index}
              className="d-flex text-body-secondary pt-3 border-bottom"
            >
              <p className="pb-3 mb-0 small lh-sm ">
                <strong className="d-block text-gray-dark">{todo.title}</strong>
                {todo.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
export default App;
