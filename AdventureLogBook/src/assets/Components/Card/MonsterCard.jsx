import CardAbilityScores from "./CardAbilityScores";
import CardExtendedInfo from "./CardExtendedInfo";
import CardHeading from "./CardHeading";
import CardStats from "./CardStats";
import './card-style.css';
import PropTypes from "prop-types";

export default function MonsterCard(props){
    const monster = props.monsterObj;
    return(
        <div className="monster card left-side">
            <CardHeading 
                heading = {monster.heading}
            />
            <CardStats 
                stats = {monster.stats}
            />
            <CardAbilityScores 
                abilityScores = {monster.abilityScores}
            />
            <CardExtendedInfo 
                extendedInfo = {monster.extendedInfo}
            />
        </div>
    );
}


MonsterCard.propTypes = {
    monsterObj: PropTypes.object
}