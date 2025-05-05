import "./Home.css";

const categories = [
  "Fiction",
  "Non-Fiction",
  "Science Fiction",
  "Fantasy",
  "Mystery",
  "Biography",
  "Self-Help",
  "Children's Books"
];

const Home = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to Online Library System 📚</h1>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index} className="category-item">{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
