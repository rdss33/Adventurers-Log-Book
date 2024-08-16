import CardBase from "./CardBase/CardBase";
import CardExtendedInfo from "./CardExtension/CardExtendedInfo";
import ExtendButton from "./ExtendButton";
import './card-style.css';
import PropTypes from "prop-types";
import { useState } from "react";



export default function CreatureCard(props){
    const creature = props.monsterObj;
    const [isExpanded,setIsExpanded] = useState(false);
    function ExpandCard(){
        setIsExpanded(true);
    }
    
    function CollapseCard(){
        setIsExpanded(false);
    }
    
    return(
        <div className="card-wrapper">
            <div className="monster card">
                <CardBase
                    heading = {creature.heading}
                    stats = {creature.stats}
                    abilityScores = {creature.abilityScores}
                    extraInfo = {creature.extraInfo}
                />
                {isExpanded? <CardExtendedInfo
                    details = {creature.specialDetails}
                    actions = {creature.actionList}
                />:null}
            </div>
            <ExtendButton
                isExpanded = {isExpanded}
                expandCommand = {ExpandCard}
                collapseCommand = {CollapseCard}
            />
        </div>
    );
}
CreatureCard.propTypes = {
    monsterObj: PropTypes.object
}