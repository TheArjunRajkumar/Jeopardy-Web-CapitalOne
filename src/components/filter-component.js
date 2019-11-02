import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import _ from 'underscore'
import categories from '../categories.json'

const mapped_categories = _.map(categories, (id, elt) => ({
  key: id,
  text: elt,
  value: elt
}));

const CategoryFilterComponent = () => (
  <Dropdown
    placeholder='Category'
    fluid
    multiple
    search
    selection
    options={mapped_categories}
  />
);

export default CategoryFilterComponent