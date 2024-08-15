import PropTypes from "prop-types";

export default function SkillsField(props){
    const skillsArray = props.skillsArray;
    return(
        <p><span className="field-name">Skills </span>{skillsArray.map(PopulateSkill)}</p>
    );
}
function PopulateSkill(skillObj,index){
    return(
        <span className="field-value">{index>0?", ":null}{skillObj.name} +{skillObj.value}</span>
    );
}
SkillsField.propTypes = {
    skillsArray: PropTypes.array
}