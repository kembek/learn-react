import React, { Component } from "react";
import "./box.css";

const Context = React.createContext();
const theme = {
  black: "black",
  red: "red"
};

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: theme["black"]
    };
  }

  render() {
    return (
      <Context.Provider
        value={{
          theme: this.state,
          changeColor: color =>
            this.setState({
              color: theme[color]
            })
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Box = props => <div className={`box box--${props.color}`} />;

const Consumer = props => {
  return (
    <Context.Consumer>{context => props.children(context)}</Context.Consumer>
  );
};

const BoxWrapper = props => (
  <Consumer>
    {context => {
      const {
        theme: { color }
      } = context;
      return <Box color={color} {...props} />;
    }}
  </Consumer>
);

const Button = props => (
  <button onClick={() => props.onClickChangeColor(props.text)}>
    {props.text.toUpperCase()}
  </button>
);

const ButtonWrapper = props => (
  <Consumer>
    {context => {
      const { changeColor } = context;

      return <Button onClickChangeColor={changeColor} {...props} />;
    }}
  </Consumer>
);

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <div>
            <div>
              <div>
                <BoxWrapper />
              </div>
            </div>
          </div>
        </div>

        <ButtonWrapper text="red" />
        <ButtonWrapper text="black" />
      </Provider>
    );
  }
}

export default App;
