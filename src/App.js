import store from "./components/redux/store";
import { Provider } from 'react-redux';
import './App.css';
import Landing from './components/Landing';
import React from "react";

class App extends React.Component {

  render() {
  return (
    <div className="App">
      <Provider store={store}>
        <Landing />
      </Provider>
    </div>
  );
}
}

export default App;
