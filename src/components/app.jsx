import React, { Component } from 'react';
// import Clock from './clock';
// import ClickCounter from './contexAPI/clickCounter';
// import HoverCounter from './contexAPI/hoverCounter';
// import User from './renderProps/user';
// import Counter from './contexAPI';
// import Section from './contexAPI/section';
// import ThemeContext from './contexAPI/themeContext';
// import Todo from './useState'
// import MyComponent from './useEffect';
// import Form from './useRef';
// import Time from './useRef/time';
// import Counter from './useReducer';
// import ComplexCounter from './useReducer/complexCounter';
// import CounterThree from './useReducer/complexCounter';
import LayoutComponent from './customHook/layoutComponent';
import LayoutComponentTwo from './customHook/layoutComponentTwo';
class App extends Component{
 /*    state = {
        theme: 'dark',
       
    }

    switchTheme = ()=>{
        this.setState((prevState)=>({theme: prevState.theme === 'dark'? 'light' : 'dark'}))
    } */
    render() {
        // const {theme} = this.state;
        return(
            <div >
               {/* <Clock /> */}
               {/* HOC */}
               {/* <ClickCounter /> */}
               {/* <HoverCounter /> */}
               {/* <User rander = {(isLoggedIn)=>(isLoggedIn ? 'Soton' : 'Arshadul')} /> */}

               {/* RenderProps */}
               {/*  <Counter>
                {(counter, incrementCount)=>(
                <ClickCounter count={counter} incrementCount={incrementCount} />
                 )}
                </Counter> */}
                {/* ContextAPI */}
              {/* <ThemeContext.Provider value={{theme: theme, switchTheme: this.switchTheme }}>
              <Section />
              </ThemeContext.Provider> */}
              {/* UseState */}

              {/* <Todo /> */}

              {/* useEffect */}

              {/* <MyComponent /> */}

              {/* useRef */}

              {/* <Form /> */}
              {/* <Time /> */}
              {/* useReducer */}

              {/* <Counter /> */}
              {/* <ComplexCounter /> */}
              {/* <CounterThree /> */}

              {/* custome hook */}
              <LayoutComponent />
              <LayoutComponentTwo />


                
            </div>
        )
    }
}
export default App;