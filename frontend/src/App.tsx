import { Header } from "./components/Header"
import { NotificationButton } from "./components/NotificationButton"
import { Home } from "./pages/Home"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <Home />
      </main>
    </>
  )
}

export default App
