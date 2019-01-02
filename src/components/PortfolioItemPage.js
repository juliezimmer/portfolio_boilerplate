import React from 'react';

// id will be used on this page for params
const PortfolioItem = (props) => (
   <div>
      <h1>An app I've created</h1>
      <p>The app has an id of {props.match.params.id} </p>
   </div>
);

export default PortfolioItem;