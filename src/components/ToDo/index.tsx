import React, { useState } from "react";
import { ToDoForm } from "../ToDoForm";
import { TiEdit } from "react-icons/ti";
import { RiCloseCircleLine } from "react-icons/ri";

type Props = {
  toDos: any;
  removeToDo: (id: any) => void;
  updateToDo: (id: any, value: any) => void;
};

export function ToDo({ toDos, removeToDo, updateToDo }: Props) {
  const [edit, setEdit] = useState({ id: null, value: "" });
  const submitUpdate = (value: any) => {
    updateToDo(edit.id, value);
    setEdit({ id: null, value: "" });
  };
  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return toDos.map((toDo: any, index: any) => (
    <div className="toDo-row" key={index}>
      <div key={toDo.id}>{toDo.text}</div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeToDo(toDo.id)}
          className="delete-icon"
        />
        <TiEdit onClick={() => setEdit({ id: toDo.id, value: toDo.text })} />
      </div>
    </div>
  ));
}
