import { useFormik } from 'formik'

import { useNavigate } from 'react-router-dom'

import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

import * as Yup from 'yup'

const Profession = () => {
  const { receiveProfetion } = useContext(TodoContext)
  const navigate = useNavigate()

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      Institute: '',
      Career: '',
      DataInitial: '',
      DataEnd: '',
    },

    onSubmit: (values) => {
      receiveProfetion(values)
      if (values === values) {
        alert('envio correcto')
        navigate('/Autobiografia')
      }
    },

    validationSchema: Yup.object({
      Institute: Yup.string()
        .required('Campo Requerido')
        .max(15, 'Debe digitar max 15 caracteres')
        .min(3, 'EL nombre debe tener mas de tres caracteres'),

      Career: Yup.string()
        .required('Campo Requerido')
        .max(18, 'Debe digitar max 10 caracteres')
        .min(3, 'EL apellido debe tener mas de tres caracteres'),

      DataInitial: Yup.date().required('Campo Requerido'),

      DataEnd: Yup.date().required('Campo Requerido'),
    }),
  })

  return (
    <div className="w-full justify-center  flex">
      <div className="pt-5 w-5/12   ">
        <h1 className="text-white text-center pb-2">Profesion</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="Institute"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Instituto
            </label>

            <input
              type="text"
              {...getFieldProps('Institute')}
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {touched.Institute && errors.Institute && (
              <span className="text-red-500">{errors.Institute}</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="Career"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Carrera
            </label>

            <input
              {...getFieldProps('Career')}
              type="text"
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {touched.Career && errors.Career && (
              <span className="text-red-500">{errors.Career}</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="DataInitial"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Fecha Inicial
            </label>

            <input
              {...getFieldProps('DataInitial')}
              type="date"
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {touched.DataInitial && errors.DataInitial && (
              <span className="text-red-500">{errors.DataInitial}</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="DataEnd"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Fecha Final
            </label>

            <input
              {...getFieldProps('DataEnd')}
              type="date"
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {touched.DataEnd && errors.DataEnd && (
              <span className="text-red-500">{errors.DataEnd}</span>
            )}
          </div>

          <div className="justify-center flex">
            <button
              className=" bg-slate-600 pr-5 pl-5 pt-2 pb-2 rounded-md"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profession
