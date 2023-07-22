import { TodoProvider } from './context/TodoProvider'
import './index.css'
import Navigate from './routes/Navigate'

function App() {
  return (
    <>
      <TodoProvider>
        <Navigate />
      </TodoProvider>
    </>
  )
}

export default App
