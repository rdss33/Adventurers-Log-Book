import PropTypes from "prop-types";

export default function CardSpecialDetails(props){
    const specialDetails = props.specialDetails;
    return(
        <div className="special-details">
            {specialDetails.map(PopulateDetails)}
        </div>
    );
}

function PopulateDetails(detailObj){
    const {name,description} = detailObj;
    return(
        <p><span className="detail-name">{name}</span><span className="detail-description">{description}</span></p>
    );
}


CardSpecialDetails.propTypes = {
    specialDetails: PropTypes.array
}