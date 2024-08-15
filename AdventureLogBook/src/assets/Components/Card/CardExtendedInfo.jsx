import PropTypes from "prop-types";
import SkillsField from "./Skill Area/SkillField";
import SensesField from "./Senses Area/SensesField";
import LanguagesField from "./Language Area/LanguagesField";


export default function CardExtendedInfo(props){
   
    const extendedInfo = props.extendedInfo;
    return(
        <div className="extended-info">
            {extendedInfo.skills.length>0 ? <SkillsField skillsArray= {extendedInfo.skills}/> : null}
            {extendedInfo.senses.length>0 ? <SensesField sensesArray= {extendedInfo.senses}/> : null}
            {extendedInfo.languages.length>0 ? <LanguagesField languagesArray= {extendedInfo.languages}/> : null}
            <p><span className="field-name">Challenge Rating </span>{extendedInfo.challengeRating} ({extendedInfo.experience} XP)</p>
        </div>
    );
}

CardExtendedInfo.propTypes = {
    extendedInfo: PropTypes.object
}