import categoriesData from "./categories.data";
import DirectoryItem from "../directory-item/directory-item.component";

import "./categories.styles.scss";

const CategoriesDirectory = () => (
  <div className="categories-container">
    {categoriesData.map((category) => (
      <DirectoryItem category={category} key={category.id} />
    ))}
  </div>
);

export default CategoriesDirectory;
