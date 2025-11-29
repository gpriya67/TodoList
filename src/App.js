import logo from './logo.svg';
import './App.css';
import Todolist from './component/Todolist';
import Header from './component/Header';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header/>
   <Todolist />
   <ToastContainer position="top-right" autoClose={2000}  style={{
    maxWidth: '250px',         
    margin: '0.5rem',         
    fontSize: '14px',           
  }} />
    </div>
  );
}

export default App;
