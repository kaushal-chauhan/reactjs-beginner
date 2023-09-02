import logo from './logo.svg';
import './App.css';
import FunctionalComp from "./components/FunctionalComp"
import ClassComp from "./components/ClassComp"
import PropsWithFunc from "./components/PropsWithFunc"
import PropsWithClass from "./components/PropsWithClass"
import ClasswithState from "./components/ClasswithState"
import InputBox from "./components/QtyBox/InputBox"
import ConditionalRendering from "./components/ConditionalRendering"
import ProductListing from "./components/ProductListing"
import StylesElement from "./components/StylesElement"
import Formelement from "./components/Formelement"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <PropsWithFunc logo={logo} logoalt="React Js">
          Test Children props
        </PropsWithFunc>
        <PropsWithClass logo={logo} logoalt="React Js">
          Test Children props
        </PropsWithClass> */}
        {/* <FunctionalComp />
        <ClassComp />
        <ClasswithState /> */}
        {/* <InputBox />
        <InputBox />
        <InputBox /> */}
        {/* <ConditionalRendering /> */}
        {/* <ProductListing /> */}
        {/* <StylesElement /> */}
        <Formelement />
      </header>
    </div>
  );
}

export default App;
