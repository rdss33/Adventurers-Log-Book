import CardAbilityScores from "../CardAbilityScores";
import CardExtraInfo from "../CardExtraInfo";
import CardHeading from "../CardHeading";
import CardStats from "../CardStats";
import PropTypes from "prop-types";

export default function CardBase(props){
    const {heading,stats,abilityScores,extraInfo} = props;
    return(
        <div className="side left">
                <CardHeading 
                    heading = {heading}
                />
                <hr />
                <CardStats 
                    stats = {stats}
                />
                <hr />
                <CardAbilityScores 
                    abilityScores = {abilityScores}
                />
                <hr />
                <CardExtraInfo 
                    extendedInfo = {extraInfo}
                />
        </div>
    );
}
CardBase.propTypes = {
    heading: PropTypes.object,
    stats: PropTypes.object,
    abilityScores: PropTypes.object,
    extraInfo: PropTypes.object
}