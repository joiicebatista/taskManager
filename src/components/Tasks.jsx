import { useState } from "react"
import { toast } from "sonner"

import {
  AddIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from "../assets/icons"
import TASKS from "../constants/tasks"
import AddTaskDialog from "./AddTaskDialog"
import Button from "./Button"
import TaskItem from "./TaskItem"
import TasksSeparator from "./TasksSeparator"

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS)
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false)
  const morningTasks = tasks.filter((task) => task.time === "morning")
  const afternoonTasks = tasks.filter((task) => task.time === "afternoon")
  const nightTasks = tasks.filter((task) => task.time === "night")

  const handleTaskCheckboxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task
      }

      if (task.status === "not_started") {
        toast.success("Tarefa iniciada com sucesso")
        return { ...task, status: "in_progress" }
      }

      if (task.status === "in_progress") {
        toast.success("Tarefa concluida com sucesso")
        return { ...task, status: "done" }
      }

      if (task.status === "done") {
        return { ...task, status: "not_started" }
      }
    })
    setTasks(newTasks)
  }

  const handleDeleteClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
    toast.success("Tarefa deletada com sucesso")
  }

  const handleClose = () => {
    setAddTaskDialogIsOpen(false)
  }

  const handleAddTaskSubmit = (task) => {
    setTasks([...tasks, task])
    toast.success("Tarefa adicionada com sucesso")
  }

  return (
    <div className="w-full space-y-6 px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-primary text-xs font-semibold">
            Minhas tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas tarefas</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button variant={"ghost"}>
            Limpar tarefas
            <TrashIcon></TrashIcon>
          </Button>
          <Button
            onClick={() => {
              setAddTaskDialogIsOpen(true)
            }}
            variant={"primary"}
          >
            Adicionar tarefas
            <AddIcon></AddIcon>
          </Button>
          <AddTaskDialog
            isOpen={addTaskDialogIsOpen}
            handleClose={() => handleClose(false)}
            handleSubmit={handleAddTaskSubmit}
          ></AddTaskDialog>
        </div>
      </div>
      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />} />
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTaskCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
        <div className="my-6 space-y-3">
          <TasksSeparator title="Tarde" icon={<CloudSunIcon />} />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTaskCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
        <div className="space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />
          {nightTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleTaskCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
