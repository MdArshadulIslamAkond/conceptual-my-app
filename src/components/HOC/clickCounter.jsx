import withCounter from "./withCounter";
import PropTypes  from "prop-types";

const ClickCounter = (props)=>{
    const {count, incrementCount} = props;
        return (
            <div>
                <button type='button' onClick={incrementCount}> Clicked {count} Times</button>
            </div>
        );
}

ClickCounter.propTypes={
    incrementCount: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
}
export default withCounter(ClickCounter);