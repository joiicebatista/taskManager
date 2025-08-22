import {
  CheckIcon,
  LoaderCircleIcon,
  DetailsIcon,
  TrashIcon,
} from "../assets/icons"
import Button from "./Button"

const TaskItem = ({ task, handleTaskCheckboxClick, handleDeleteClick }) => {
  const getStatusVariant = () => {
    if (task.status === "done") {
      return "bg-[#00ADB5] text-[#002C2E]"
    }
    if (task.status === "in_progress") {
      return "bg-[#FFAA04] text-[#FFAA04]"
    }
    if (task.status === "not_started") {
      return "bg-[#35383E] text-[#35383E] bg-opacity-10"
    }
  }
  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-lg bg-opacity-10 px-4 py-3 text-sm transition ${getStatusVariant()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg ${getStatusVariant()}`}
        >
          <input
            type="checkbox"
            className="absolute h-full w-full cursor-pointer opacity-0"
            checked={task.status === "done"}
            onChange={() => handleTaskCheckboxClick(task.id)}
          />
          {task.status === "done" && <CheckIcon />}
          {task.status === "in_progress" && (
            <LoaderCircleIcon className="animate-spin" />
          )}
        </label>
        {task.title}
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" onClick={() => handleDeleteClick(task.id)}>
          <TrashIcon className="text-[#9A9C9F]"></TrashIcon>
        </Button>
        <a href="/">
          <DetailsIcon></DetailsIcon>
        </a>
      </div>
    </div>
  )
}

export default TaskItem
