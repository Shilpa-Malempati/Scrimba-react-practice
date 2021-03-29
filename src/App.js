import React, { Component } from 'react';
import FunComponent from './ReactFunComponents/FunComponent'
import  ParentAndChildComp  from './ReactParentAndChildComponets/ParentAndChildComp'
import JsxToJavaScriptConv from './JsxToJavaScriptAndInlineStyles/JsxToJavaScriptConv'
import Contacts from './ReactProps/Contacts'
import MainJokes from './ReactProps/MainJokes';
import './App.css';
import ReactDOM from "react-dom"
import MappingComponents from './MappingComponentsInReact/MappingComponents';
import SimpleExample from './ClassBasedComponents/SimpleExample';
import SimpleEx from './ReactState/SimpleEx';
import LogInAndLogOutUsingState from './ReactState/LogInAndLogOutUsingState';
import UsingMap from './ReactState/UsingMap';
import SimpleEX from './HandlingEvents/SimpleEx'
import ChangingState from './HandlingEvents/ChangingState';
import CheckBoxEx from './HandlingEvents/CheckBoxEx';
import LifeCycleMethods from './ReactLifeCycleMehods/LifeCycleMethods';
import Main from './ConditionalRendering/Main';
import Main2 from './ConditionalRendering/Main2';
import RenderPractice from './ConditionalRendering/RenderPractice';
import ApiUpdate from './APIUpdates/FetchingData';
import FetchingData from './APIUpdates/FetchingData';
import ReactFormsPart1 from './ReactForms/ReactFormsPart1';
import ReactFormPart2 from './ReactForms/ReactFormPart2';
import ReactFormPart3 from './ReactForms/ReactFormPart3';
import MainPage from './MemeGenerator/MainPage';

class App extends Component {
  render() {
    return (
      ReactDOM.render(<FunComponent/>, document.getElementById("root"))
      // ReactDOM.render(<ParentAndChildComp/>, document.getElementById("root"))
      // ReactDOM.render(<JsxToJavaScriptConv/>, document.getElementById("root"))
      // ReactDOM.render(<Contacts/>, document.getElementById("root"))
      // ReactDOM.render(<MainJokes/>, document.getElementById("root"))
      // ReactDOM.render(<MappingComponents/>, document.getElementById("root"))
      // ReactDOM.render(<SimpleExample/>, document.getElementById("root"))
      //  ReactDOM.render(<SimpleEx/>, document.getElementById("root"))
      // ReactDOM.render(<LogInAndLogOutUsingState/>, document.getElementById("root"))
      //  ReactDOM.render(<UsingMap/>, document.getElementById("root"))
      // ReactDOM.render(<SimpleEX/>, document.getElementById("root"))
      // ReactDOM.render(<ChangingState/>, document.getElementById("root"))
      //  ReactDOM.render(<CheckBoxEx/>, document.getElementById("root"))
      // ReactDOM.render(<LifeCycleMethods/>, document.getElementById("root"))
      //  ReactDOM.render(<Main/>, document.getElementById("root"))
      // ReactDOM.render(<Main2/>, document.getElementById("root"))
      //  ReactDOM.render(<RenderPractice/>, document.getElementById("root"))
      // ReactDOM.render(<FetchingData/>, document.getElementById("root"))
      // ReactDOM.render(<ReactFormsPart1/>, document.getElementById("root"))
      // ReactDOM.render(<ReactFormPart2/>, document.getElementById("root"))
      // ReactDOM.render(<ReactFormPart3/>, document.getElementById("root"))
      // ReactDOM.render(<MainPage/>, document.getElementById("root"))
    
    );
  }
}

export default App;
