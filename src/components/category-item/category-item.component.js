import { Link } from "react-router-dom";

// Assets & Styles
import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="category-container">
      {/**<img /> */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <Link to={`/${title}`}>
          <h2>{title.toUpperCase()}</h2>
          <p>SHOP NOW</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
