import { useContext, useState } from 'react'

import { TodoContext } from '../context/TodoContext'

const Summary = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { dataBase, ocupation, profetion, biography } = useContext(TodoContext)

  const [showDataBase, setShowDataBase] = useState(false)
  const [showOcupation, setShowOcupation] = useState(false)
  const [showProfetion, setShowProfetion] = useState(false)
  const [showBiograPhy, setShowBiograPhy] = useState(false)

  return (
    <div className=" mt-7  w-full justify-center  flex">
      <h1 className="m-4   font-bold text-xl  ">
        Resumen de los datos digitados por el usuario
      </h1>
      <ul>
        <li>
          <p
            onClick={() => setShowDataBase(!showDataBase)}
            className="text-lg  hover:cursor-pointer bg-slate-600 w-8/12 rounded-md mx-3 h-10 text-center  pr-28  pl-20 pt-2  md:pr-64 md:pt-2 md: pb- md:pl-60  "
          >
            DatosBásicos
          </p>
          <li
            className="pt-3 mx-5"
            hidden={!showDataBase}
          >{`Nombre  : ${dataBase.FirstName}`}</li>
          <li
            hidden={!showDataBase}
            className=" mx-5"
          >{`Apellido  : ${dataBase.LastName}`}</li>
          <li
            hidden={!showDataBase}
            className=" mx-5"
          >{`Email  : ${dataBase.Email}`}</li>
          <li
            hidden={!showDataBase}
            className=" mx-5"
          >{`Telefono  : ${dataBase.Phone}`}</li>
        </li>

        <li className="mt-5">
          <p
            onClick={() => setShowOcupation(!showOcupation)}
            className="text-lg hover:cursor-pointer  bg-slate-600 w-8/12 rounded-md mx-3 h-10 text-center  pr-28  pl-20 pt-2  md:pr-64 md:pt-2 md: pb- md:pl-60 "
          >
            Ocupación
          </p>
          <li
            hidden={!showOcupation}
            className="pt-3 mx-5"
          >{`Empresa  : ${ocupation.Company}`}</li>
          <li
            hidden={!showOcupation}
            className=" mx-5"
          >{`Puesto  : ${ocupation.Position}`}</li>
          <li
            hidden={!showOcupation}
            className=" mx-5"
          >{`Fecha Inicial  : ${ocupation.DataInitial}`}</li>
          <li
            hidden={!showOcupation}
            className=" mx-5"
          >{` Fecha Final  : ${ocupation.DataEnd}`}</li>
        </li>

        <li className="mt-5">
          <p
            onClick={() => setShowProfetion(!showProfetion)}
            className="text-lg hover:cursor-pointer  bg-slate-600 w-8/12 rounded-md mx-3 h-10 text-center  pr-28  pl-20 pt-2  md:pr-64 md:pt-2 md: pb-1 md:pl-60 "
          >
            Profesión
          </p>
          <li
            hidden={!showProfetion}
            className="pt-3 mx-5"
          >{`Instituto  : ${profetion.Institute}`}</li>
          <li
            hidden={!showProfetion}
            className=" mx-5"
          >{`Carrera  : ${profetion.Career}`}</li>
          <li
            hidden={!showProfetion}
            className=" mx-5"
          >{`Fecha Inicial  : ${profetion.DataInitial}`}</li>
          <li
            hidden={!showProfetion}
            className=" mx-5"
          >{`Fecha Final  : ${profetion.DataEnd}`}</li>
        </li>

        <li className="mt-5">
          <p
            onClick={() => setShowBiograPhy(!showBiograPhy)}
            className="text-lg hover:cursor-pointer  bg-slate-600 w-8/12 rounded-md mx-3 h-10 text-center  pr-28  pl-20 pt-2  md:pr-64 md:pt-2 md: pb-1 md:pl-60 "
          >
            Biografia
          </p>
          <li
            hidden={!showBiograPhy}
            className="pt-3 mx-5"
          >{`Autobiografia  : ${biography.Autobiography}`}</li>
        </li>
      </ul>
    </div>
  )
}

export default Summary
