import React from 'react';
// import PropTypes from 'prop-types';
class Clock extends React.Component {
    constructor(props) {

        super(props);
        this.state ={
            date : new Date(),
            locale : 'bn-BD'
        }
        // this.tick = this.tick.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
   
    componentDidMount() {
        // this.intervalId = setInterval(this.tick,1000)
        this.intervalId = setInterval(()=>this.tick(),1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    tick() {
        this.setState({
            date : new Date()
        })
    }
    handleClick (){
        const language = this.state.locale
        if(language === 'bn-BD'){
            this.setState({
                locale : 'en-Us'
            })
        }else{
            this.setState({
                locale : 'bn-BD'
            })
        } 
       
    }
    /* handleClick= () =>{
        const language = this.state.locale
        if(language === 'bn-BD'){
            this.setState({
                locale : 'en-Us'
            })
        }else{
            this.setState({
                locale : 'bn-BD'
            })
        }
       
    } */
    // tick=()=> {
    //     this.setState({
    //         date : new Date()
    //     })
    // }
    render() {
        const {date, locale} = this.state;
        return(
           <div>
             <h1>
                <span> 
                    {date.toLocaleTimeString(locale)}
                </span>
            </h1>
            <button onClick={this.handleClick}>Click Here</button>
           </div>

        )
    }
}
/* Clock.propTypes ={
    locale : PropTypes.string.isRequired
} */

export default Clock;