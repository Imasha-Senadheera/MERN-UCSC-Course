import React from "react";

// // without callback
// const ChildComponent = ({ onClick }) => {
//     console.log('ChildComponent rendered without useCallback');
//     return <button onClick={onClick}>Click me!</button>;
// };

const ChildComponent = React.memo(({ onClick }) => {
  console.log("ChildComponent rendered");
  return <button onClick={onClick}>Click me!</button>;
});

export default ChildComponent;
