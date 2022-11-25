import categoriesData from "./categories.data";
import CategoryItem from "../category-item/category-item.component";

import "./categories.styles.scss";

const CategoriesDirectory = () => (
  <div className="categories-container">
    {categoriesData.map((category) => (
      <CategoryItem category={category} key={category.id} />
    ))}
  </div>
);

export default CategoriesDirectory;
