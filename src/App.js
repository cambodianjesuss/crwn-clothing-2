const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womans",
    },
    {
      id: 5,
      title: "Mens",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => {
        const { id, title } = category;
        return (
          <div className="category" key={id}>
            {/**<img /> */}
            <div className="category-body">
              <h2>{title}</h2>
              <p>Shot Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
