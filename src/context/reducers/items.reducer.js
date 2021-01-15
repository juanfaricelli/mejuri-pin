/* eslint-disable import/no-anonymous-default-export */
import actions from '../actions';

export default (state, action) => {
  let itemsLikedArray = [];
  switch (action.type) {
    case actions.GET_ITEMS_BY_CATEGORY:
      const { categoryId, subCategoryId, collectionsData } = action.payload;
      const itemsByCategory = subCategoryId && collectionsData ?
        collectionsData.find(coll => coll.id === subCategoryId).products :
        [];
      return {
        ...state,
        filter: [ categoryId, subCategoryId ],
        itemsByCategory,
      }
    case actions.GET_ITEMS_LIKED:
      return {
        ...state,
        filter: [ 'liked_items' ],
        itemsByCategory: action.payload || [],
      }
    case actions.ITEM_LIKED:
      itemsLikedArray = [ action.payload, ...state.itemsLiked ];
      localStorage.setItem('itemsLiked', JSON.stringify(itemsLikedArray))
      return {
        ...state,
        itemsLiked: itemsLikedArray,
        itemsLoading: false
      }
    case actions.ITEM_LIKED_REMOVE:
      itemsLikedArray = state.itemsLiked.filter(item => item.id !== action.payload);
      localStorage.setItem('itemsLiked', JSON.stringify(itemsLikedArray))
      return {
        ...state,
        itemsLiked: itemsLikedArray,
        itemsLoading: false
      }
    case actions.ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
