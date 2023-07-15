import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import ToDo from "../../data/Data";

interface ToDoItemProps {
  index: number;
  toDo: ToDo;
}

const ToDoItem = ({ index, toDo }: ToDoItemProps) => {
  return (
    <div key={index} className="d-flex text-body-secondary pt-3 border-bottom">
      <div className="row align-items-start container">
        <div className="col-1">
          <input
            className="form-check-input align-middle"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
        </div>
        <div className="col-10">
          <p className="pb-3 mb-0 small lh-sm align-middle">
            <strong className="d-block text-gray-dark">{toDo.title}</strong>{" "}
            {toDo.description}
          </p>
        </div>
        <div className="col-1 align-middle">
          <FontAwesomeIcon icon={faTrash} size="lg" />
          &nbsp; &nbsp; &nbsp; &nbsp;
          <FontAwesomeIcon icon={faPenToSquare} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
