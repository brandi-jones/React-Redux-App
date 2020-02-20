import React from "react";
import {connect} from "react-redux";
import {getData} from "../actions/index.js";


const CharactersForm = (props) => {

    const handleGetData = event => {
        event.preventDefault();
        props.getData(); //call the getData function imported from actions in response to clicking the browse characters button
    };

    return (
        <>
            {/* if currently fetching data, display that, otherwise display the button to the page */}
            {props.isFetchingData ? (
                <div>Currently fetching data...</div>
            ) : (
                <button onClick={handleGetData}>Browse Characters</button>
            )}
        </>
    )
};

//we use isFetchingData state here in this component, so we need to map it to props in order to use it
const mapStateToProps = (state) => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(
    mapStateToProps,
    {getData}
)(CharactersForm);