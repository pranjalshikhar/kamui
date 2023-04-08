import { useState, useEffect } from "react";
import { db } from "../lib/firebase";

const useKanban = (userId, boardId) => {
  const [tasks, setTasks] = useState(null);
  const [columns, setColumns] = useState(null);
  const [final, setFinal] = useState(null);
  const [boardName, setBoardName] = useState("");

  useEffect(() => {
    return db
      .collection(`users/${userId}/boards/${boardId}/tasks`)
      .onSnapshot((snap) => {
        const documents = [];
        snap.forEach((doc) => documents.push({ id: doc.id, ...doc.data() }));
        setTasks(documents);
      });
  }, [userId, boardId]);

  useEffect(() => {
    return db
      .collection(`users/${userId}/boards`)
      .doc(boardId)
      .get()
      .then((doc) => setBoardName(doc.data().name));
  }, [userId, boardId]);

  useEffect(() => {
    return db
      .collection(`users/${userId}/boards/${boardId}/columns`)
      .onSnapshot((snap) => {
        const documents = [];
        snap.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        setColumns(documents);
      });
  }, [userId, boardId]);

  useEffect(() => {
    if (tasks && columns) {
      const finalObject = [];
      const col = columns.find((c) => c.id === "columnOrder");
      const cols = columns.filter((c) => c.id !== "columnOrder");

      finalObject.columnOrder = col?.order;
      finalObject.columns = {};
      finalObject.tasks = {};

      tasks.forEach((task) => (finalObject.tasks[task.id] = task));
      cols.forEach((c) => (finalObject.columns[c.id] = c));

      setFinal(finalObject);
    }
  }, [tasks.columns]);

  return { initalData: final, setInitialData: setFinal, boardName };
};

export default useKanban;
