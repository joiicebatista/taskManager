import SidebarButton from "./SidebarButton"
import HomeIcon from "../assets/icons/home.svg?react"
import TaskIcon from "../assets/icons/tasks.svg?react"

const Sidebar = () => (
  <div className="h-screen w-64 bg-white">
    <div className="space-y-4 px-8 py-6">
      <h1 className="text-primary text-xl font-semibold">Task Manager</h1>
      <p className="text-xs font-semibold">
        Um simples <span className="text-primary">organizador de tarefas</span>
      </p>
    </div>

    <div className="flex flex-col gap-2">
      <SidebarButton variant={"unselected"}>
        <HomeIcon />
        Início
      </SidebarButton>
      <SidebarButton variant={"selected"}>
        <TaskIcon />
        Minhas tarefas
      </SidebarButton>
    </div>
  </div>
)

export default Sidebar
