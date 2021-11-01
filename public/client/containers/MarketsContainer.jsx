// /**
//  * ************************************
//  *
//  * @module  MarketsContainer
//  * @author
//  * @date
//  * @description stateful component that renders MarketCreator and MarketsDisplay
//  *
//  * ************************************
//  */
//  import MarketCreator from '../components/MarketCreator.jsx';
//  import MarketsDisplay from '../components/MarketsDisplay.jsx';

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import actions from action creators file
// import * as actions from '../actions/actions';
// // import child components...

// const mapStateToProps = state => {

//   const props = {
//     marketList: state.markets.marketList,
//     newLocation: state.newLocation
//   };

//   return props;
// };

// const mapDispatchToProps = dispatch => ({
//   // create functions that will dispatch action creators
//   addCard: (e) => dispatch(actions.addCardActionCreator(e)),
//   deleteCard: (e) => dispatch(actions.deleteCardActionCreator(e)),
//   setNewLocation: (e) => dispatch(actions.setNewLocationActionCreator(e)),
//   addNewMarket: (e) => dispatch(actions.addMarketActionCreator(e))
// });

// class MarketsContainer extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return(
//       <div className="innerbox">
//         <MarketCreator 
//           setNewLocation = {this.props.setNewLocation}
//           addNewMarket = {this.props.addNewMarket}
//           newLocation = {this.props.NewLocation}
//         />

//         <MarketsDisplay 
//           marketList = {this.props.marketList} 
//           addCard = {this.props.addCard}
//           deleteCard = {this.props.deleteCard}
//         />
//       </div>
//     );
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
