import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>  Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize((collectionUrlParam) => createSelector(
  [selectCollections],
  collections => collections[collectionUrlParam]
  // collections => collections.find(collection => collection.routeName === collectionUrlParam) when array was used for data
  )
);