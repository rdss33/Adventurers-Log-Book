import PropTypes from "prop-types";

export default function CardHeading(props){
    const {name,size,type,alignment} = props.heading;
    return(
        <div className="heading">
            <h3><span className="card-title">{name}</span></h3>
            <p><span>{size} {type}, {alignment}</span></p>
        </div>
    );

}

CardHeading.propTypes = {
    heading: PropTypes.object
}