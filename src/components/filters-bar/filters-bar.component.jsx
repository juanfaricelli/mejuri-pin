/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { CategoriesAPI } from '../../api/categories.api';

import { parentFilters } from '../../api/categories.constants';
import { ItemsContext } from '../../context/items.context';

import { FiltersList } from '../filters-list/filters-list.component';
import { SpinnerThreeDotsIcon } from '../icons/spinner-three-dots-icon.component';

import './filters-bar.component.scss';

export const FiltersBar = () => {
  const [subcategoriesLoading, setSubcategoriesLoading] = useState(true);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(parentFilters[0].id);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  const { getItemsByCategory, listItems, itemsLiked } = useContext(ItemsContext);

  useEffect(() => {
    setSelectedSubCategory('');
    setSubcategoriesLoading(true);
    if (selectedCategory === parentFilters[0].id) {
      setSubcategories([]);
      setSubcategoriesLoading(false);
    } else {
      CategoriesAPI.getCategoryByKey(selectedCategory)
        .then( res => {
          const subcategoriesData = [...res.data];
          setSubcategories(subcategoriesData);
          setSelectedSubCategory(subcategoriesData[0].id);
          setSubcategoriesLoading(false);
        })
        .catch(error => {
          console.log(`getCategoryByKey Request Failed. ERROR: ${JSON.stringify(error)}`);
          setSubcategories([]);
          setSubcategoriesLoading(false);
        });
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedSubCategory && selectedCategory !== parentFilters[0].id) {
      getItemsByCategory(selectedCategory, selectedSubCategory, subcategories);
    } else if (selectedCategory === parentFilters[0].id) {
      listItems(itemsLiked);
    }
  }, [selectedSubCategory, selectedCategory, itemsLiked]);

  return(
    <div className="filter-bar" data-testid="filter-bar">
      <FiltersList key="parent-filters" collection={parentFilters} setSelectedCategory={setSelectedCategory}/>
      { subcategoriesLoading && <SpinnerThreeDotsIcon width={30}/>}
      { !subcategoriesLoading && subcategories && <FiltersList key="child-filters" collection={subcategories} setSelectedCategory={setSelectedSubCategory}/>}
    </div>
  );
};
