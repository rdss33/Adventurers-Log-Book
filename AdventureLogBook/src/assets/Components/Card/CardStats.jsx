import PropTypes from "prop-types";

export default function CardStats(props){
    const {armorClass: AC,
        hitPoints: HP,
        speed} = props.stats;
    return(
        <div className="stats">
                <p><span className="field-name">Armor Class:</span><span className="field-value"> {AC}</span></p>
                <p><span className="field-name">Hitpoints:</span> <span className="field-value"> {HP}</span></p>
                <p><span className="field-name">Speed:</span><span className="field-value"> {speed} ft.</span></p>
            </div>
    );
}

CardStats.propTypes = {
    stats: PropTypes.object
}