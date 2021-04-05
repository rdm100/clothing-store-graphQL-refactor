import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview';

import './collection-overview.scss';

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps}/>
      ))
    }
    </div>
  );
};

export default CollectionOverview;