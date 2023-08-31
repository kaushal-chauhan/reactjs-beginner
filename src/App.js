import logo from './logo.svg';
import './App.css';
import FunctionalComp from "./components/FunctionalComp"
import ClassComp from "./components/ClassComp"
import PropsWithFunc from "./components/PropsWithFunc"
import PropsWithClass from "./components/PropsWithClass"
import ClasswithState from "./components/ClasswithState"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <PropsWithFunc logo={logo} logoalt="React Js">
          Test Children props
        </PropsWithFunc> */}
        {/* <PropsWithClass logo={logo} logoalt="React Js">
          Test Children props
        </PropsWithClass> */}
        <FunctionalComp />
        <ClassComp />
        <ClasswithState />
      </header>
    </div>
  );
}

export default App;
