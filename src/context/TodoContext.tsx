import { createContext } from 'react'
import {
  Biografy,
  DataBase,
  OcupationBase,
  Profetions,
} from '../interface/InterfaceBase'

interface props {
  receiveData: (data: DataBase) => void
  dataBase: unknown
  receiveOcupation: (data: OcupationBase) => void
  ocupation: unknown
  receiveProfetion: (data: Profetions) => void
  profetion: unknown
  receiveBiography: (data: Biografy) => void
  biography: unknown
}

export const TodoContext = createContext({} as props)
