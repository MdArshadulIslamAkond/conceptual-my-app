import withCounter from "./withCounter";
import PropTypes from 'prop-types'
const HoverCounter = (props)=>{
    const {count, incrementCount} = props;
        return (
            <div>
                <h1  onMouseOver={incrementCount}> Hovered {count} Times</h1>
            </div>
        );
}

HoverCounter.propTypes={
    count: PropTypes.number.isRequired,
    incrementCount: PropTypes.func.isRequired
}
export default withCounter(HoverCounter);