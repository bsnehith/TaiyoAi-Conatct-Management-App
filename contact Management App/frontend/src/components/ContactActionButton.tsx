import {
  faEye,
  faTrashAlt,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteContact } from "../features/contact";
import '../css/ContactActionButton.css';

type propType = {
  id: string
}

const ContactActionButton = ({ id }: propType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle contact delete
  const handleDelete = () => {
      const deleteUser = window.confirm("Are you sure to delete this contact?");
      if (deleteUser) {
          dispatch(deleteContact(id));
      }
  }

  return (
      <div className="flex justify-around items-center gap-x-2 lg:gap-10">
          <FontAwesomeIcon icon={faEye} className="action-icon" onClick={() => navigate(`/contact/view/${id}`)} />
          <FontAwesomeIcon icon={faPen} className="action-icon" onClick={() => navigate(`contact/edit/${id}`)} />
          <FontAwesomeIcon icon={faTrashAlt} className="action-icon" onClick={handleDelete} />
      </div>
  );
};

export default ContactActionButton;
