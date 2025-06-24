import { useState } from 'react'; // Add this import
import { Link } from 'react-router-dom'
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2023',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
    category: 'Development',
    date: 'May 15, 2023',
    author: 'Alex Johnson',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
  },
  {
    id: 2,
    title: 'Getting Started with Machine Learning',
    excerpt: 'A beginner-friendly guide to entering the world of machine learning and AI.',
    category: 'Data Science',
    date: 'April 28, 2023',
    author: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
  },
  {
    id: 3,
    title: 'UX Design Principles for Developers',
    excerpt: 'Essential design concepts every developer should know to create better user experiences.',
    category: 'Design',
    date: 'April 10, 2023',
    author: 'Emma Rodriguez',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd',
  },
  {
    id: 4,
    title: 'The Complete Guide to Freelancing',
    excerpt: 'How to build a successful freelance career in the tech industry from scratch.',
    category: 'Career',
    date: 'March 22, 2023',
    author: 'Sarah Williams',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
  },
  {
    id: 5,
    title: 'Python vs JavaScript: Which to Learn First?',
    excerpt: 'Comparing two popular programming languages to help beginners choose the right path.',
    category: 'Programming',
    date: 'March 5, 2023',
    author: 'Alex Johnson',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935',
  },
  {
    id: 6,
    title: 'Building Your Personal Brand as a Developer',
    excerpt: 'Strategies to establish your online presence and stand out in the tech industry.',
    category: 'Career',
    date: 'February 18, 2023',
    author: 'Sarah Williams',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
  },
]

const categories = ['All', 'Development', 'Data Science', 'Design', 'Career', 'Programming']

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <div className="py-6">
      <div className="container">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2"><span className='text-indigo-700'>AK</span> Academy Blog</h1>
          <p className="text-gray-600">
            Insights, tutorials, and industry news from our team and community
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm  ${
                  selectedCategory === category
                    ? 'bg-primary text-black border-1'
                    : 'bg-gray-200  text-gray-700 hover:bg-indigo-500 '
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-primary bg-opacity-10 text-primary text-xs px-2 py-1 rounded mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <FiUser className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FiCalendar className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-white font-medium inline-flex items-center hover:text-primary-dark bg-indigo-700 p-3 rounded-full"
                >
                  Read More <FiArrowRight className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No posts found</h3>
            <p className="text-gray-600">
              Try selecting a different category
            </p>
          </div>
        )}

        <div className="mt-10 text-center">
          <button className="bg-indigo-700 rounded-full p-3 btn btn-outline inline-flex items-center text-white">
            Load More <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}