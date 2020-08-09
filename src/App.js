import "./App.css";
import React, { Component } from "react";

const Corazon = (color) => {
  if (color)
    return (
      <>
        <svg style={{ display: "none" }}>
          <symbol id="s-heart" viewBox="0 0 100 100">
            <path
              id="heart"
              d="M100 34.976c0 8.434-3.635 16.019-9.423 21.274h0.048l-31.25 31.25c-3.125 3.125-6.25 6.25-9.375 6.25s-6.25-3.125-9.375-6.25l-31.202-31.25c-5.788-5.255-9.423-12.84-9.423-21.274 0-15.865 12.861-28.726 28.726-28.726 8.434 0 16.019 3.635 21.274 9.423 5.255-5.788 12.84-9.423 21.274-9.423 15.865 0 28.726 12.861 28.726 28.726z"
              fill={color}
            />
          </symbol>
        </svg>
        <svg>
          <use href="#s-heart" />
        </svg>
      </>
    );
  return (
    <>
      <svg style={{ display: "none" }}>
        <symbol id="s-heart" viewBox="0 0 100 100">
          <path
            id="heart"
            d="M100 34.976c0 8.434-3.635 16.019-9.423 21.274h0.048l-31.25 31.25c-3.125 3.125-6.25 6.25-9.375 6.25s-6.25-3.125-9.375-6.25l-31.202-31.25c-5.788-5.255-9.423-12.84-9.423-21.274 0-15.865 12.861-28.726 28.726-28.726 8.434 0 16.019 3.635 21.274 9.423 5.255-5.788 12.84-9.423 21.274-9.423 15.865 0 28.726 12.861 28.726 28.726z"
            fill={"red"}
          />
        </symbol>
      </svg>
      <svg>
        <use href="#s-heart" />
      </svg>
    </>
  );
};

class App extends Component {
  state = {
    step: 0,
  };
  aumentarStep = () => {
    this.setState({ step: this.state.step + 1 });
  };
  render() {
    const { step } = this.state;
    return (
      <>
        {step}
        <div className="row">{Corazon()}</div>
        <div className="row">
          {Corazon("blue")}
          {Corazon()}
        </div>
        <div className="row">
          {Corazon()}
          {Corazon()}
          {Corazon()}
        </div>
        <div className="row">
          {Corazon()}
          {Corazon()}
          {Corazon()}
          <div onClick={this.aumentarStep}>{Corazon()}</div>
        </div>
      </>
    );
  }
}

export default App;
