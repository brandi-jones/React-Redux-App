import React from 'react';
import './App.css';
import CharacterForm from "./components/CharactersForm.js";
import CharacterList from "./components/CharactersList.js";
import {createStore, applyMiddleware} from 'redux';
import {reducer} from "./reducers/reducer.js";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Rick and Morty Characters</h1>
        <CharacterForm/>
        <CharacterList/>
      </div>
    </Provider>
  );
}

export default App;
