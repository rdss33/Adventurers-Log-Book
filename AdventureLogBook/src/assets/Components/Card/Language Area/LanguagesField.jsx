import PropTypes from "prop-types";

export default function LanguagesField(props){
    const languagesArray = props.languagesArray;
    return(
        <p><span className="field-name">Languages </span>{languagesArray.map(PopulateLanguages)}</p>
    );
}
function PopulateLanguages(language,index){
    return(
        <span className="field-value">{index>0?", ":null}{language}</span>
    );
}

LanguagesField.propTypes = {
    languagesArray: PropTypes.array
}