const categories = ["Music", "Tech", "Sports", "Art", "Food", "Business"];

const Categories = () => {
  return (
    <section className="categories">
      <h2>Browse by Category</h2>
      <div className="categories-grid">
        {categories.map((cat) => (
          <button key={cat} className="category-chip">{cat}</button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
