import { useState } from "react";
import CourseCard from "../components/CourseCard";
import { FiSearch, FiFilter } from "react-icons/fi";

const allCourses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description:
      "Master modern web development with HTML, CSS, JavaScript and React.",
    category: "Development",
    duration: "8 weeks",
    students: 1245,
    rating: 4.8,
    price: 199,
    originalPrice: 299,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    description:
      "Learn Python, Pandas, NumPy and data visualization techniques.",
    category: "Data Science",
    duration: "6 weeks",
    students: 876,
    rating: 4.7,
    price: 179,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    id: 3,
    title: "UX/UI Design Masterclass",
    description:
      " Learn UI/UX from wireframes to prototypes - design beautiful interfaces.",
    category: "Design",
    duration: "4 weeks",
    students: 543,
    rating: 4.9,
    price: 149,
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
  },
  {
    id: 4,
    title: "Mobile App Development with Flutter",
    description: "Build cross-platform mobile apps using Flutter framework.",
    category: "Development",
    duration: "5 weeks",
    students: 765,
    rating: 4.6,
    price: 169,
    originalPrice: 229,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
  },
  {
    id: 5,
    title: "Digital Marketing Strategy",
    description: "Learn SEO, social media marketing, and content strategy.",
    category: "Marketing",
    duration: "3 weeks",
    students: 432,
    rating: 4.5,
    price: 129,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
  },
  {
    id: 6,
    title: "Python for Beginners",
    description: "Start your programming journey with Python basics.",
    category: "Programming",
    duration: "4 weeks",
    students: 987,
    rating: 4.7,
    price: 99,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
  },
];

const categories = [
  "All",
  "Development",
  "Data Science",
  "Design",
  "Marketing",
  "Programming",
];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [durationFilter, setDurationFilter] = useState("All");

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesPrice =
      course.price >= priceRange[0] && course.price <= priceRange[1];
    const matchesDuration =
      durationFilter === "All" ||
      (durationFilter === "Short" && parseInt(course.duration) <= 4) ||
      (durationFilter === "Medium" &&
        parseInt(course.duration) > 4 &&
        parseInt(course.duration) <= 8) ||
      (durationFilter === "Long" && parseInt(course.duration) > 8);

    return matchesSearch && matchesCategory && matchesPrice && matchesDuration;
  });

  return (
    <div className="py-12">
      <div className="container">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Our <span className="text-indigo-700">Courses</span></h1>
          <p className="text-gray-600">
            Browse through our comprehensive catalog of courses
          </p>
        </div>

        <div className="mb-8">
          <div className="w-full flex justify-center items-center py-4">
            <div className="relative flex-grow max-w-md w-full">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button
              className="btn btn-outline flex items-center p-2 ms-2 rounded-full text-white bg-indigo-700"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FiFilter className="mr-2 " /> Filters
            </button>
          </div>

          {showFilters && (
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="mr-2"
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </h3>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>$0</span>
                    <span>$500</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Duration</h3>
                  <div className="space-y-2">
                    {[
                      "All",
                      "Short (<4 weeks)",
                      "Medium (4-8 weeks)",
                      "Long (>8 weeks)",
                    ].map((duration) => (
                      <label key={duration} className="flex items-center">
                        <input
                          type="radio"
                          name="duration"
                          checked={
                            (duration === "Short (<4 weeks)" &&
                              durationFilter === "Short") ||
                            (duration === "Medium (4-8 weeks)" &&
                              durationFilter === "Medium") ||
                            (duration === "Long (>8 weeks)" &&
                              durationFilter === "Long") ||
                            (duration === "All" && durationFilter === "All")
                          }
                          onChange={() => {
                            if (duration === "All") setDurationFilter("All");
                            else if (duration.includes("Short"))
                              setDurationFilter("Short");
                            else if (duration.includes("Medium"))
                              setDurationFilter("Medium");
                            else if (duration.includes("Long"))
                              setDurationFilter("Long");
                          }}
                          className="mr-2"
                        />
                        {duration}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-4 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === category
                    ? "bg-primary text-black border-1"
                    : "bg-gray-200  text-gray-700 hover:bg-indigo-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No courses found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filters to find what you're looking
              for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
