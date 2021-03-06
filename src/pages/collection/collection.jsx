import React from 'react';
import { default as CollectionItem } from '../../components/collection-item/collection-item-container';

import './collection.scss';

const Collection = ({ match, collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  );
};

export default Collection;