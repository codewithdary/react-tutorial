import  PropTypes from "prop-types";

const Header = ( { header }) => {
    
    return(
        <div>
            <h1>
                {header}
            </h1>
        </div>
    );
}

Header.defaultProps = {
    header: 'Car Overview'
}

export default Header