import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { addFeatures, removeItem } from "./actions/actions";
//react-redux is a bridge piece between React and Redux

const App = ({ state, addFeatures, removeItem }) => {
  const removeFeature = item => {
    removeItem(item);
    console.log(`this is a remove item feature`, item);
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    addFeatures(item);
    console.log(`this is an add item feature`, item);
    // dipsatch an action here to add an item
  };
  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} buyItem={buyItem} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

// 'our connected component is using a mapStateToProps function to map pieces of our state tree to this components props

export default connect(mapStateToProps, { addFeatures, removeItem })(App);
