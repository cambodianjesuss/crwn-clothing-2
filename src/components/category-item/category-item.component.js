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
        <h2>{title}</h2>
        <p>Shot Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
