import React, {userEffect} from 'react';

const Category = ({navigation}) => {
  const [category_list, setCategoryList] = React.useState([
    {
      id: 1,
      name: "Women's Fashion",
      bgColor: '#BF012C',
      cmp: '',
    },
    {
      id: 2,
      name: "Men's Fashion",
      bgColor: '#BF012C',
      cmp: '',
    },
    {
      id: 3,
      name: "Kids' Fashion",
      bgColor: '#BF012C',
      cmp: '',
    },
    {
      id: 4,
      name: 'Beauty',
      bgColor: '#BF012C',
      cmp: '',
    },
    {
      id: 5,
      name: 'Jwellary',
      bgColor: '#BF012C',
      cmp: '',
    },
    {
      id: 6,
      name: 'Home Furnishings',
      bgColor: '#BF012C',
      cmp: '',
    },
  ]);
};
export default Category;
