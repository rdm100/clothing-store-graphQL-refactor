import React from 'react';
import { Route } from 'react-router-dom';
import { default as CollectionsOverview } from '../../components/collection-overview/collection-overview-container';
import { default as Collection } from '../collection/collection-container';

const Shop = ({ match }) => {
  return ( 
    <div className='shop'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection}/>
    </div>
    );
};
 
export default Shop;