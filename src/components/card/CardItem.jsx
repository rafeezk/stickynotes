import React from "react";
import DeleteButton from "../button/DeleteButton";
import CardContent from "../card/CardContent";
import ActiveButton from "../button/ActiveButton";
import ArchiveButton from "../button/ArchiveButton";
import { showFormattedDate } from "../../utils";

function CardItem({ id, title, createdAt, body, archived, onDelete, onArchive, onActive }) {
  return (
    <div className="note-item">

      <CardContent title={title} date={showFormattedDate(createdAt)} body={body} />

      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        {
          archived ?
            <ActiveButton id={id} onActive={onActive} />
            :
            <ArchiveButton id={id} onArchive={onArchive} />
        }
      </div>
    </div>
  );
}

export default CardItem;
