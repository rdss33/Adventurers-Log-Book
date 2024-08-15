import PropTypes from "prop-types";

export default function SensesField(props){
    const sensesArray = props.sensesArray;
    return(
        <p><span className="field-name">Senses </span>{sensesArray.map(PopulateSenses)}</p>
    );
}
function PopulateSenses(senseObj,index){
    return(
        <span className="field-value">{index>0?", ":null}{senseObj.name} {senseObj.value}</span>
    );
}

SensesField.propTypes = {
    sensesArray: PropTypes.array
}