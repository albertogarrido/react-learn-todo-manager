import { ChangeEvent, useState } from "react";
import ToDo from "../data/Data";

interface FormProps {
  onAddItem: (toDo: ToDo) => void;
  onAddMultiple: (toDos: ToDo[]) => void;
}

const AddToDoForm = ({ onAddItem, onAddMultiple }: FormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div className="my-3 p-3 bg-body rounded shadow-sm">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          aria-label="Title"
          aria-describedby="basic-addon2"
          onChange={handleTitleChange}
          value={title}
        />
      </div>
      <div className="input-group mb-3">
        <textarea
          className="form-control"
          placeholder="Description (optional)"
          rows={4}
          aria-label="With textarea"
          onChange={handleDescriptionChange}
          value={description}
        />
      </div>
      <button
        className="btn btn-success me-3"
        onClick={() => {
          const toDo = new ToDo(title, description, false);
          onAddItem(toDo);
          setTitle("");
          setDescription("");
        }}
      >
        Add To Do
      </button>
      <button
        className="btn btn-outline-secondary me-3"
        onClick={() => {
          onAddMultiple(ToDo.generateDummyData(5, 0));
        }}
      >
        add 5 dummy pending
      </button>

      <button
        className="btn btn-outline-secondary me-3"
        onClick={() => {
          onAddMultiple(ToDo.generateDummyData(5, 5));
        }}
      >
        add 5 dummy done
      </button>
    </div>
  );
};

export default AddToDoForm;
