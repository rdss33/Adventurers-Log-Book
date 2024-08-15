import PropTypes from "prop-types";

function modifierCalculator(abilityScore){
    return (Math.floor((abilityScore-10)/2));
}

function modifierSymbol(abilityScore){
    return  abilityScore >= 10? "+":"";
}

function PopulateField(abilityScore){
    return (
        <p><span className="field-value">{abilityScore} ({modifierSymbol(abilityScore)}{modifierCalculator(abilityScore)})</span></p>
    );
}
export default function CardAbilityScores(props){
    const {str,dex,con,int,wis,cha} = props.abilityScores;
    return(   
        <div className="ability-score">
                <p><span className="field-name">STR</span></p>
                <p><span className="field-name">DEX</span></p>
                <p><span className="field-name">CON</span></p>
                <p><span className="field-name">INT</span></p>
                <p><span className="field-name">WIS</span></p>
                <p><span className="field-name">CHA</span></p>
                {PopulateField(str)}
                {PopulateField(dex)}
                {PopulateField(con)}
                {PopulateField(int)}
                {PopulateField(wis)}
                {PopulateField(cha)}
        </div>
    );
}

CardAbilityScores.propTypes = {
    abilityScores: PropTypes.object
}