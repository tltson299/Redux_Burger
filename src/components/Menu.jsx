import React from "react";
import { connect } from "react-redux";
import { ADD_ITEM, REMOVE_ITEM } from "../actions/types";

function Menu(props) {
  const addItem = (name) => {
    props.dispatch({ type: ADD_ITEM, payload: name });
  };

  const removeItem = (name) => {
    props.dispatch({ type: REMOVE_ITEM, payload: name });
  };

  return (
    <div className="menu" style={{ width: 400, margin: "auto" }}>
      <h2 className="text-center mb-5">Menu</h2>

      <table className="w-100">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th className="text-center">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item, index) => {
            return (
              <tr key={index}>
                <td style={{ width: "30%" }}>{item.name}</td>
                <td style={{ width: "30%" }}>{item.price} VNĐ</td>
                <td
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <button
                    className="btn btn-danger mr-auto"
                    onClick={() => {
                      removeItem(item.name);
                    }}
                  >
                    -
                  </button>
                  <p style={{margin: 0}}>{item.count}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      addItem(item.name);
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p className="text-end mt-5">
        <b>Total: {props.total} VNĐ</b>
      </p>
    </div>
  );
}

const mapStateToProps = (state) => state.burger;
export default connect(mapStateToProps)(Menu);
