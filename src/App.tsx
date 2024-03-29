import { useState } from "react";
import AddToDoForm from "./components/AddToDoForm";
import ToDo from "./data/Data";
import ToDoContainer from "./components/items/ToDoContainer";

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

      <ToDoContainer tasks={pendingTasks} />

      {doneTasks.length > 0 && <ToDoContainer tasks={doneTasks} />}
    </main>
  );
}
export default App;
