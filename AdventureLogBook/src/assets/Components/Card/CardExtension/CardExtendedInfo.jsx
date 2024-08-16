import CardAction from "../CardActions";
import CardSpecialDetails from "../CardSpecialDetails";
import PropTypes from "prop-types";

export default function CardExtendedInfo(props){
    const {details,actions} = props;
    return(
        <div className="side right">
            <CardSpecialDetails
                specialDetails = {details}
            />
            <CardAction 
                actionList = {actions}
            />
        </div>
    );
}

CardExtendedInfo.propTypes = {
    actions: PropTypes.array,
    details: PropTypes.array
}