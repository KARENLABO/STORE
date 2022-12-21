import { Tag } from 'antd';
import './styles.css';

function TagsCategories(props) {
  const {categories , filterbyCategory} = props;
  return (
      <div className='Tags'>
       <Tag  className='category-tag' onClick = {() => filterbyCategory('All')} key='All' color="cyan">All</Tag>

       {categories.map((category) =>
          <Tag className='category-tag' onClick = {() => filterbyCategory(category)} key={category} color="cyan">{category}</Tag>
        )}
      </div>
  );
}

export default TagsCategories;

