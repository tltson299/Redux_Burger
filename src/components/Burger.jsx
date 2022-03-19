import React from "react";
import { connect } from "react-redux";

function Burger(props) {
  return (
    <div className="burger">
      <div className="breadTop"></div>
      {props.items.map((item, index) => {
        let render = [];
        for (let i = 0; i < item.count; ++i) {
          render.push(
            <div
              key={`${item.name} ${i + 1}`}
              className={item.name.toLowerCase()}
            ></div>
          );
        }
        return render;
      })}
      <div className="breadBottom"></div>
    </div>
  );
}

const mapStateToProps = (state) => state.burger;
export default connect(mapStateToProps)(Burger);
