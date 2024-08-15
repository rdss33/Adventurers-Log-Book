import PropTypes from "prop-types";

export default function CardAction(props){
    const actionList = props.actionList;
    return(
        <div className="action-area">
            <h3 className="action-title"><span >Actions</span></h3>
            <hr />
            {actionList.map(PopulateAction)}
        </div>
    );
}

function PopulateAction(action){
    const {name,recharge,type,description} = action;
    return(
        <p><span className="action-name">{name} {recharge != null ? `(Recharge ${recharge})`:null}</span><span className="action-description">{type != null ? <span className="italic-style">{type}: </span>:null} {description}</span></p>
    );
}

CardAction.propTypes = {
    actionList: PropTypes.array
}