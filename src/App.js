import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
function App() {

  let todos = [
    {
      sno:1,
      title:'Learn React',
      describe:'Learning React Js is ver fun!'
    },
    {
      sno:3,
      title:'Implement React',
      describe:'Learning React Js is ver fun2!'
    },
    {
      sno:3,
      title:'Proceed with React Native',
      describe:'Learning React Js is ver fun3!'
    },
  ]

  return (
    <>
      <Header title="My Todos List" showSearchBar={true}/>
      <Todos todos={todos}/>
      <Footer/>
    </>
  );
}

export default App;
