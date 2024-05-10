import Counter from ".";
import HoverCounter from "./hoverCounter";
import ThemeContext from "./themeContext";
// import React, {Component} from "react";
import { useContext } from "react";


export default function Content(){
    const context = useContext(ThemeContext);
    const {theme, switchTheme} = context;
        return (
            <div>
                <h1>This is a content</h1>
                <Counter>
                    {(counter, incrementCount)=>
                     (
                        <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
                     )

                    }
                </Counter>
            </div>
        )
    }
/* export default class Content extends Component {

// with static contextType API
    static contextType = ThemeContext;
    render() {
        const {theme, switchTheme} = this.context;
        return (
            <div>
                <h1>This is a content</h1>
                <Counter>
                    {(counter, incrementCount)=>
                     (
                        <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
                     )

                    }
                </Counter>
            </div>
        )
    }
} */
// without static contextType API

// Content.contextType = ThemeContext;

// without then contextType API

/* export default function Content(){
    return(
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(counter, incrementCount)=>{
                    return <ThemeContext.Consumer>
                        {
                            ({theme, switchTheme}) => <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
                        }
                    </ThemeContext.Consumer>
                }}
            </Counter>
        </div>
    )
} */