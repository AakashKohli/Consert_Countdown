import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utills/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };
  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };
  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase Tickets before 20th June</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit inventore quam corrupti laudantium explicabo totam
                soluta tempore, minus reprehenderit iusto? Est cupiditate
                officia ipsum quo totam fugit quam laboriosam quod.
              </p>
              <MyButton
                text="Purchase Tickets"
                bck="#ffa800"
                color="#ffffff"
                link="https://www.google.com/"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
