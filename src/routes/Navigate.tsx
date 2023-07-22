import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'

import Occupation from '../page/Occupation'
import Profession from '../page/Profession'

import Summary from '../page/Summary'
import Autobiography from '../page/Autobiography'
import Database from '../page/Database'

const Navigate = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/Datos_Basicos"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Datos Basicos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Ocupacion"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Ocupacion
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Profesion"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Profesion
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Autobiografia"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Auto Biografia
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Resumen"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Resumen
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/Datos_Basicos" element={<Database />} />
          <Route path="/Ocupacion" element={<Occupation />} />
          <Route path="/Profesion" element={<Profession />} />
          <Route path="/Autobiografia" element={<Autobiography />} />
          <Route path="/Resumen" element={<Summary />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Navigate
