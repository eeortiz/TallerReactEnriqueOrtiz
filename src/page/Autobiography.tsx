import { useFormik } from 'formik'

import { useNavigate } from 'react-router-dom'

import * as Yup from 'yup'

import { useContext } from 'react'

import { TodoContext } from '../context/TodoContext'

const Autobiography = () => {
  const navigate = useNavigate()

  const { receiveBiography } = useContext(TodoContext)

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      Autobiography: '',
    },

    onSubmit: (values) => {
      receiveBiography(values)
      alert('envio correcto')
      navigate('/Resumen')
    },

    validationSchema: Yup.object({
      Autobiography: Yup.string()
        .required('Campo Requerido')
        .max(55, 'Debe digitar max 35 caracteres')
        .min(3, ' Debe tener mas de tres caracteres'),
    }),
  })

  return (
    <div className="w-full justify-center  flex">
      <div className="pt-5 w-7/12   ">
        <h1 className="text-white text-center pb-2">Autobiografia</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="Autobiography"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Biografia
            </label>

            <input
              type="text"
              {...getFieldProps('Autobiography')}
              className=" shadow appearance-none border rounded w-full py-2 h-24 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {touched.Autobiography && errors.Autobiography && (
              <span className="text-red-500">{errors.Autobiography}</span>
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

export default Autobiography
