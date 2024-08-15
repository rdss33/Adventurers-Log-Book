import CardAbilityScores from "./CardAbilityScores";
import CardAction from "./CardActions";
import CardExtendedInfo from "./CardExtendedInfo";
import CardHeading from "./CardHeading";
import CardSpecialDetails from "./CardSpecialDetails";
import CardStats from "./CardStats";
import './card-style.css';
import PropTypes from "prop-types";

export default function MonsterCard(props){
    const monster = props.monsterObj;
    return(
        <div className="monster card">
            <div className="side left">
                <CardHeading 
                    heading = {monster.heading}
                />
                <hr />
                <CardStats 
                    stats = {monster.stats}
                />
                <hr />
                <CardAbilityScores 
                    abilityScores = {monster.abilityScores}
                />
                <hr />
                <CardExtendedInfo 
                    extendedInfo = {monster.extendedInfo}
                />
            </div>
            <div className="side right">
                <CardSpecialDetails
                    specialDetails = {monster.specialDetails}
                />
                <CardAction 
                    actionList = {monster.actionList}
                />
            </div>
        </div>
        
    );
}


MonsterCard.propTypes = {
    monsterObj: PropTypes.object
}