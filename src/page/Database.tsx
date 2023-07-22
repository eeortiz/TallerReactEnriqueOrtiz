import { useFormik } from 'formik'

import { useNavigate } from 'react-router-dom'

import * as Yup from 'yup'

import { useContext } from 'react'

import { TodoContext } from '../context/TodoContext'

const Database = () => {
  const { receiveData } = useContext(TodoContext)

  const navigate = useNavigate()

  TodoContext

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: '',
    },

    onSubmit: (values) => {
      receiveData(values)

      if (values === values) {
        alert('envio correcto')
        navigate('/Ocupacion')

        // navigate(
        //   `../Resumen/${values.FirstName} ${values.Email} ${values.Phone} ${values.LastName}`
        // )
        // localStorage.setItem('Basicos', JSON.stringify(values))
      }
    },

    validationSchema: Yup.object({
      FirstName: Yup.string()
        .required('Campo Requerido')
        .max(15, 'Debe digitar max 15 caracteres')
        .min(3, 'EL nombre debe tener mas de tres caracteres'),

      LastName: Yup.string()
        .required('Campo Requerido')
        .max(15, 'Debe digitar max 10 caracteres')
        .min(3, 'EL apellido debe tener mas de tres caracteres'),

      Email: Yup.string()
        .required('Campo Requerido')
        .email('El correo no tiene formato valido'),

      Phone: Yup.string()
        .required('Campo Requerido')
        .max(10, 'Debe digitar max 10 caracteres')
        .min(3, 'EL numero tener mas de tres caracteres'),
    }),
  })

  return (
    <div className="w-full justify-center  flex">
      <div className="pt-5 w-5/12   ">
        <h1 className="text-white text-center pb-2">
          Datos Básicos
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="FirstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nombres
            </label>

            <input
              type="text"
              {...getFieldProps('FirstName')}
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {touched.FirstName && errors.FirstName && (
              <span className="text-red-500">{errors.FirstName}</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="LastName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Apellidos
            </label>

            <input
              {...getFieldProps('LastName')}
              type="text"
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {touched.LastName && errors.LastName && (
              <span className="text-red-500">{errors.LastName}</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="Email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>

            <input
              {...getFieldProps('Email')}
              type="email"
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {touched.Email && errors.Email && (
              <span className="text-red-500">{errors.Email}</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="Phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Teléfono
            </label>

            <input
              {...getFieldProps('Phone')}
              type="text"
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {touched.Phone && errors.Phone && (
              <span className="text-red-500">{errors.Phone}</span>
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

export default Database
