import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";
import { Bin, Exclaim } from "./Icons";
import { db, firebase } from "../lib/firebase";
import { debounce } from "../lib/utils";
import { useState, useRef } from "react";
import Modal from "./Modal";

const Column = ({
  column,
  tasks,
  allData,
  boardId,
  userId,
  filterBy,
  index,
}) => {
  const [modal, setModal] = useState(false);
  const [editingCol, setEditing] = useState(false);
  const colInput = useRef(null);

  const deleteCol = (colId, tasks) => {
    db.collection(`users/${userId}/boards/${boardId}/columns`)
      .doc("columnOrder")
      .update({ order: firebase.firestore.FieldValue.arrayRemove(colId) });

    db.collection(`users/${userId}/boards/${boardId}/columns`)
      .doc("columnOrder")
      .update({ order: firebase.firestore.FieldValue.arrayRemove(colId) });

    db.collection(`users/${userId}/boards/${boardId}/columns`)
      .doc(colId)
      .delete();

    // extract and delete its tasks
    tasks.forEach((task) => {
      db.collection(`users/${userId}/boards/${boardId}/tasks`)
        .doc(task)
        .delete();
    });

    const changeColName = debounce((e, colId) => {
      db.collection(`users/${userId}/boards/${boardId}/columns`)
        .doc(colId)
        .update({ title: e.target.value });
    }, 7000);

    const moveToTop = () => {
      setEditing(true);
      setTimeout(() => {
        colInput.current.focus();
      }, 50);
    };
  };

  return (
    <>
      <Draggable draggableId={column.id} index={index} key={column.id}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
            className="mr-5"
          >
            <div>
              <input type="text" />
              <h2></h2>
              <div>
                <Bin />
              </div>
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Column;
