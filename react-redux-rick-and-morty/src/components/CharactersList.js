import React from "react";
import {connect} from "react-redux";
import {Card, CardBody, CardImg} from 'reactstrap';

const CharactersList = (props) => {
    return (
        <>
        <div className="cardContainer">
            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                props.characters.map(character => 
                <Card className="characterCard">
                    <CardImg top width="5%" src={character.image} alt="Character Image" />
                    <CardBody>
                        {character.name}
                    </CardBody>
                </Card>)
            )}
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {}
)(CharactersList)