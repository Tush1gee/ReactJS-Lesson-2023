import { useState } from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";

export default function EditableTimer({
  title,
  project,
  runninSince,
  elapsed,
  id,
  onTrashClick,
  onStartClick,
}) {
  const [editOpenForm, setEditOpenForm] = useState(false);

  return (
    <div>
      {editOpenForm ? (
        <TimerForm 
        id={id} 
        title={title} 
        project={project} />
      ) : (
        <Timer
          id={id}
          title={title}
          project={project}
          elapsed={elapsed}
          runningSince={runninSince}
          onTrashClick={onTrashClick}
          onStartClick={onStartClick}
        />
      )}
    </div>
  );
}
