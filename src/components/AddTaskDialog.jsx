import { createPortal } from "react-dom"

import Button from "./Button"
import Input from "./Input"

const AddTaskDialog = ({ isOpen, handleClose }) => {
  if (!isOpen) return null
  return createPortal(
    <div className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center bg-[#09090B1F]">
      <div className="gap-4 rounded-xl bg-[#FFFFFF] p-5 text-center">
        {/* <div className="items-center gap-4"> */}
        <h2 className="text-xl font-semibold text-[#35383E]">Nova Tarefa</h2>
        <p className="mb-4 mt-1 text-sm font-normal text-[#9A9C9F]">
          Insira as informações abaixo
        </p>
        <div className="flex w-[336px] flex-col space-y-4">
          <Input
            id="title"
            label="Título"
            placeholder="Insira o título da tarefa"
          ></Input>
          <Input id="time" label="Horário" placeholder="Selecione"></Input>
          <Input
            id="description"
            label="Descrição"
            placeholder="Descreva a tarefa"
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
            <Button size="large" className="w-full">
              Salvar
            </Button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>,
    document.body
  )
}

export default AddTaskDialog
