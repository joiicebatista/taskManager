import "./AddTaskDialog.css"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { CSSTransition } from "react-transition-group"
import { v4 } from "uuid"

import Button from "./Button"
import Input from "./Input"

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [time, setTime] = useState("morning")

  const [errors, setErrors] = useState([])

  const nodeRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()

  useEffect(() => {
    if (!isOpen) {
      setTime("morning")
    }
  }, [isOpen])

  const handleSaveClick = () => {
    const newErrors = []
    const title = titleRef.current.value
    const description = descriptionRef.current.value

    if (!title.trim()) {
      newErrors.push({
        inputName: "title",
        message: "O título é obrigatório",
      })
    }
    if (!time.trim()) {
      newErrors.push({
        inputName: "time",
        message: "O horário é obrigatório",
      })
    }
    if (!description.trim()) {
      newErrors.push({
        inputName: "description",
        message: "A descrição é obrigatória",
      })
    }

    if (newErrors.length > 0) {
      setErrors(newErrors)
      return
    }

    handleSubmit({
      id: v4(),
      title,
      time,
      description,
      status: "not_started",
    })
    handleClose()
  }

  const titleError = errors.find((error) => error.inputName === "title")
  const descriptionError = errors.find(
    (error) => error.inputName === "description"
  )
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center bg-[#09090B1F]"
          >
            <div className="gap-4 rounded-xl bg-white p-5 text-center">
              {/* <div className="items-center gap-4"> */}
              <h2 className="text-dark-blue text-xl font-semibold">
                Nova Tarefa
              </h2>
              <p className="text-text-gray mb-4 mt-1 text-sm font-normal">
                Insira as informações abaixo
              </p>
              <div className="flex w-[336px] flex-col space-y-4">
                <Input
                  id="title"
                  label="Título"
                  placeholder="Insira o título da tarefa"
                  ref={titleRef}
                  errorMessage={titleError?.message}
                ></Input>

                <div className="flex flex-col gap-1 text-left">
                  <label
                    htmlFor="time"
                    className="text-dark-blue text-left text-sm font-semibold"
                  >
                    Horário
                  </label>
                  <select
                    className="outline-[# placeholder:text-text-gray rounded-lg border border-solid border-[#ECECEC] px-4 py-3 placeholder:text-sm"
                    name=""
                    id="time"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                  >
                    <option value="morning">Manhã</option>
                    <option value="afternoon">Tarde</option>
                    <option value="night">Noite</option>
                  </select>
                </div>
                <Input
                  id="description"
                  label="Descrição"
                  ref={descriptionRef}
                  placeholder="Descreva a tarefa"
                  errorMessage={descriptionError?.message}
                ></Input>

                <div className="flex gap-3">
                  <Button
                    size="large"
                    variant="secondary"
                    className="w-full"
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>
                  <Button
                    size="large"
                    className="w-full"
                    onClick={() => handleSaveClick()}
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  )
}

export default AddTaskDialog
