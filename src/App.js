import React, {Component} from "react";
import Shape from "./shape.js";

class Selector extends Component{

  constructor(){
    super();
    this.state ={
      seletedShape: "square",
    }
  }

  // this is where our methods relative

  selectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName,
    })
  }



  render(){
    return(
      <div className="container">
        <div className="navbar">
          <div>Selected: <span> {this.state.seletedShape}</span></div>
        </div>

        <div className="shape-list">
        <Shape shape="square" selectShape={this.selectShape}/>
        <Shape shape="circle" selectShape={this.selectShape}/>
        <Shape shape="triangle" selectShape={this.selectShape}/>
        </div>
      </div>
    )
  }






}


export default Selector;
