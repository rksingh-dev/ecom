import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      // Extract unique categories
      const uniqueCategories = [...new Set(data.map(item => item.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.log("Error fetching data");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  const filteredPosts = selectedCategory === "all" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Categories Section */}
      <div className="flex items-center justify-center py-8 overflow-x-auto whitespace-nowrap">
        <button 
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 mx-2 rounded-full transition-all ${
            selectedCategory === "all" 
              ? "bg-green-600 text-white" 
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 mx-2 rounded-full capitalize transition-all ${
              selectedCategory === category 
                ? "bg-green-600 text-white" 
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
          {filteredPosts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
