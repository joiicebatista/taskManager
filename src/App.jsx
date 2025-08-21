import "./App.css"
import Sidebar from "./components/Sidebar"
import Tasks from "./components/Tasks"
import { Toaster } from "sonner"

function App() {
  return (
    <>
      <div className="flex">
        <Toaster
          toastOptions={{
            style: {
              color: "#002C2E",
            },
          }}
        ></Toaster>
        <Sidebar />
        <Tasks></Tasks>
      </div>
    </>
  )
}

export default App
