import { Link } from "react-router-dom";

// Assets & Styles
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="directory-container">
      {/**<img /> */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-body-container">
        <Link to={`/${title}`}>
          <h2>{title.toUpperCase()}</h2>
          <p>SHOP NOW</p>
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
