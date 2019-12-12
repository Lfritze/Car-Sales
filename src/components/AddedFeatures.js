import React from "react";
import { connect } from "react-redux";

import AddedFeature from "./AddedFeature";

const AddedFeatures = ({ car, removeFeature }) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature
              key={item.id}
              feature={item}
              removeFeature={removeFeature}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    car: state.car
  };
};
// 'our connected component is using a mapStateToProps function to map pieces of our state tree to this components props

export default connect(mapStateToProps, {})(AddedFeatures);
