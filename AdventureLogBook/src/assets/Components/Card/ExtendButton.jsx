import PropTypes from "prop-types";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

export default function ExtendButton(props){
    const {isExpanded,expandCommand,collapseCommand} = props;
    function onClickBehaviour(event){
        isExpanded ? collapseCommand() : expandCommand(); // Toggle the current state of the card, to either expand or collapse
        let clickedObject = event.target; // Get the clicked element
        while(clickedObject.className!=="extend-arrow")
        {
            clickedObject = clickedObject.parentElement; // Keep going up the hierarchy until the button is found
        }
        clickedObject.blur(); // Unfocus the button so it will no longer be black
    }
    return(
        <button className="extend-arrow" onClick={onClickBehaviour}>
            {isExpanded? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />} {/* This line will toggle between the expand and collapse arrow based on the current state of the card (expanded or collapsed)*/}
        </button>
    );
}



ExtendButton.propTypes = {
    isExpanded: PropTypes.bool,
    expandCommand: PropTypes.func,
    collapseCommand: PropTypes.func
}