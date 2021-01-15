import React, {createContext, useReducer} from 'react';
import ItemsReducer from './reducers/items.reducer';
import actions from './actions';



// Initial State
const initialState = {
  itemsByCategory: [],
  itemsLiked: JSON.parse(localStorage.getItem('itemsLiked')) || [],
}

// Create context
export const ItemsContext = createContext(initialState);

// Provider component
export const ItemsProvider = ({children}) => {
  const [state, dispatch] = useReducer(ItemsReducer, initialState);

  // Actions
  const getItemsByCategory = (categoryId, subCategoryId, collectionsData) => {
    try {
      dispatch({
        type: actions.GET_ITEMS_BY_CATEGORY,
        payload: { categoryId, subCategoryId, collectionsData }
      });
    } catch (error) {
      dispatch({
        type: actions.ERROR,
        payload: error.response.data.error
      });
    }
  }

  const listItems = (collectionData) => {
    try {
      dispatch({
        type: actions.GET_ITEMS_LIKED,
        payload: collectionData,
      });
    } catch (error) {
      dispatch({
        type: actions.ERROR,
        payload: error.response.data.error
      });
    }
  }

  const addItemLiked = (itemData) => {
    try {
      dispatch({
        type: actions.ITEM_LIKED,
        payload: itemData
      });
    } catch (error) {
      dispatch({
        type: actions.ERROR,
        payload: error.response.data.error
      });
    }
  }

  const removeItemLiked = (itemId) => {
    try {
      dispatch({
        type: actions.ITEM_LIKED_REMOVE,
        payload: itemId
      });
    } catch (error) {
      dispatch({
        type: actions.ERROR,
        payload: error.response.data.error
      });
    }
  }

  return (<ItemsContext.Provider value={{
    ...state,
    getItemsByCategory,
    listItems,
    addItemLiked,
    removeItemLiked,
  }}>
    {children}
  </ItemsContext.Provider>);
}
export default ItemsProvider