const TaskItem = ({ task }) => {
  const getStatusVariant = () => {
    if (task.status === "done") {
      return "bg-[#00ADB51A] bg-opacity-10 text-[#002C2E]"
    }
    if (task.status === "in_progress") {
      return "bg-[#FFAA041A] bg-opacity-10 text-[#FFAA04]"
    }
    if (task.status === "not_started") {
      return "bg-[#35383E0D] bg-opacity-5 text-[#35383E]"
    }
  }
  return (
    <div
      className={`flex justify-between gap-3 rounded-lg px-4 py-3 text-sm ${getStatusVariant()}`}
    >
      {task.title}
    </div>
  )
}

export default TaskItem
