import { Link } from 'react-router-dom'
import { FiClock, FiUsers, FiStar } from 'react-icons/fi'

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
          {course.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{course.title}</h3>
          <div className="flex items-center text-yellow-500">
            <FiStar className="fill-current" />
            <span className="ml-1 text-gray-700">{course.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <FiClock className="mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <FiUsers className="mr-1" />
            <span>{course.students} students</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-primary">
            ${course.price}
            {course.originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${course.originalPrice}
              </span>
            )}
          </span>
          <Link
            to={`/courses/${course.id}`}
            className="btn btn-outline px-4 py-2 text-sm bg-indigo-700 p-3 rounded-full text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}