const TasksSeparator = ({ title, icon }) => {
  return (
    <div className="border-border flex gap-3 border-b border-solid pb-1">
      {icon}
      <p className="text-text-gray text-sm font-semibold">{title}</p>
    </div>
  )
}

export default TasksSeparator
