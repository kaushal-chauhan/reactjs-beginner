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
import ClassLifeCycle from "./components/ClassLifeCycle"
import FragmentTest from './components/FragmentTest'
import PureComp from "./components/PureComponentTest/PureComp"
import NormalComp from "./components/PureComponentTest/NormalComp"
import ReactMemoTest from "./components/ReactMemoTest/Parent"
import ReactRefsTest from "./components/ReactRefsTest"
import ForwardRefTest from "./components/ForwardRefTest"
import PortalTest from "./components/PortalTest"
import ErrorBoundary from "./components/ErrorBoundary"
import TestError from "./components/TestError"
import HoverCounter from "./components/HigherOrderComponents/HoverCounter"
import ClickCounter from "./components/HigherOrderComponents/ClickCounter"

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
        {/* <Formelement /> */}
        {/* <ClassLifeCycle /> */}
        {/* <FragmentTest /> */}
        {/* <PureComp />
        <NormalComp /> */}
        {/* <ReactMemoTest /> */}
        {/* <ReactRefsTest /> */}
        {/* <ForwardRefTest /> */}
        {/* <PortalTest /> */}
        {/* <ErrorBoundary>
          <TestError />
        </ErrorBoundary>
        <ErrorBoundary>
          <TestError hasError="1"/>
        </ErrorBoundary> */}
        <HoverCounter title="Test-11"/>
        <ClickCounter />
      </header>
    </div>
  );
}

export default App;
