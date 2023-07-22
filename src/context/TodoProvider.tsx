import {
  Biografy,
  DataBase,
  OcupationBase,
  Profetions,
} from '../interface/InterfaceBase'
import { TodoContext } from './TodoContext'
import { useState } from 'react'

interface props {
  children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props) => {
  const [dataBase, setDataBase] = useState({})
  const receiveData = (data: DataBase) => {
    setDataBase(data)
  }

  const [ocupation, setOcupation] = useState({})

  const receiveOcupation = (data: OcupationBase) => {
    setOcupation(data)
  }

  const [profetion, setProfetion] = useState({})

  const receiveProfetion = (data: Profetions) => {
    setProfetion(data)
  }

  const [biography, setBiography] = useState({})

  const receiveBiography = (data: Biografy) => {
    setBiography(data)
  }

  return (
    <TodoContext.Provider
      value={{
        receiveData,
        dataBase,
        receiveOcupation,
        ocupation,
        profetion,
        receiveProfetion,
        receiveBiography,
        biography,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
