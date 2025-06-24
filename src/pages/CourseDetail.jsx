import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiClock, FiUsers, FiStar, FiChevronRight } from 'react-icons/fi'

const courseDetails = {
  id: 1,
  title: 'Web Development Bootcamp',
  instructor: 'Alex Johnson',
  instructorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  category: 'Development',
  level: 'Beginner to Advanced',
  duration: '8 weeks',
  students: 1245,
  rating: 4.8,
  price: 199,
  originalPrice: 299,
  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  description:
    'Master modern web development with this comprehensive bootcamp. Learn HTML, CSS, JavaScript, React, Node.js, and more to build full-stack web applications.',
  syllabus: [
    {
      week: 1,
      title: 'HTML & CSS Fundamentals',
      topics: [
        'HTML5 semantic elements',
        'CSS selectors and properties',
        'Flexbox and Grid layout',
        'Responsive design principles',
      ],
    },
    {
      week: 2,
      title: 'JavaScript Basics',
      topics: [
        'Variables and data types',
        'Functions and scope',
        'DOM manipulation',
        'Event handling',
      ],
    },
    {
      week: 3,
      title: 'Advanced JavaScript',
      topics: [
        'ES6+ features',
        'Asynchronous programming',
        'Working with APIs',
        'Error handling',
      ],
    },
    {
      week: 4,
      title: 'Introduction to React',
      topics: [
        'React components',
        'Props and state',
        'Hooks',
        'Component lifecycle',
      ],
    },
    {
      week: 5,
      title: 'Advanced React',
      topics: [
        'Context API',
        'React Router',
        'State management',
        'Performance optimization',
      ],
    },
    {
      week: 6,
      title: 'Backend with Node.js',
      topics: [
        'Express.js framework',
        'RESTful APIs',
        'Authentication',
        'Database integration',
      ],
    },
    {
      week: 7,
      title: 'Full-stack Project',
      topics: [
        'Project setup',
        'Frontend-backend integration',
        'Testing',
        'Deployment',
      ],
    },
    {
      week: 8,
      title: 'Final Project & Career Prep',
      topics: [
        'Capstone project',
        'Code reviews',
        'Resume and portfolio',
        'Interview preparation',
      ],
    },
  ],
  requirements: [
    'Basic computer literacy',
    'No prior programming experience required',
    'Dedication to complete the course',
  ],
  reviews: [
    {
      id: 1,
      name: 'Sarah Miller',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      date: '2 weeks ago',
      comment:
        'This course completely transformed my career. The instructor explains complex concepts in a way that makes them easy to understand. The projects were challenging but rewarding!',
    },
    {
      id: 2,
      name: 'David Kim',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      rating: 4,
      date: '1 month ago',
      comment:
        'Great content overall. I wish there was more about testing and TypeScript, but the core material is excellent. The community support is fantastic too.',
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      rating: 5,
      date: '2 months ago',
      comment:
        'I went from zero to job-ready in 3 months thanks to this course. The career resources alone are worth the price. Highly recommend!',
    },
  ],
}

export default function CourseDetail() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const [enrolled, setEnrolled] = useState(false)

  const course = courseDetails

  const handleEnroll = () => {
    setEnrolled(true)
  }

  return (
    <div className="py-12">
      <div className="container">
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm text-gray-700 hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <FiChevronRight className="text-gray-400 mx-1" />
                  <Link
                    to="/courses"
                    className="ml-1 text-sm text-gray-700 hover:text-primary md:ml-2"
                  >
                    Courses
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <FiChevronRight className="text-gray-400 mx-1" />
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                    {course.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block bg-primary bg-opacity-10 text-primary text-xs px-2 py-1 rounded mb-2">
                      {course.category}
                    </span>
                    <h1 className="text-2xl font-bold">{course.title}</h1>
                  </div>
                  <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                    <FiStar className="text-yellow-500 fill-current" />
                    <span className="ml-1 font-medium">
                      {course.rating} ({course.students}+ students)
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <FiClock className="mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FiUsers className="mr-1" />
                    <span>{course.level}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700">{course.description}</p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex flex-wrap gap-4 mb-6 ">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`px-4 py-2 rounded-md bg-indigo-700 text-white ${
                        activeTab === 'overview'
                          ? 'bg-indigo-700 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-indigo-900'
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setActiveTab('syllabus')}
                      className={`px-4 py-2 rounded-md bg-indigo-700 text-white ${
                        activeTab === 'syllabus'
                          ? 'bg-indigo-700 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-indigo-900'
                      }`}
                    >
                      Syllabus
                    </button>
                    <button
                      onClick={() => setActiveTab('reviews')}
                      className={`px-4 py-2 rounded-md bg-indigo-700 text-white ${
                        activeTab === 'reviews'
                          ? 'bg-indigo-700 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-indigo-900'
                      }`}
                    >
                      Reviews
                    </button>
                  </div>

                  {activeTab === 'overview' && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        About This Course
                      </h3>
                      <p className="text-gray-700 mb-6">
                        This comprehensive bootcamp will take you from beginner
                        to job-ready web developer in just 8 weeks. You'll learn
                        by building real projects that you can showcase in your
                        portfolio. By the end of the course, you'll be able to
                        build full-stack web applications using modern
                        technologies.
                      </p>

                      <h3 className="text-xl font-semibold mb-4">
                        What You'll Learn
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>Build responsive websites with HTML & CSS</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>Create interactive UIs with JavaScript</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>Develop single-page apps with React</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>Build RESTful APIs with Node.js and Express</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>Deploy applications to the cloud</span>
                        </li>
                        <li className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>Prepare for technical interviews</span>
                        </li>
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">
                        Requirements
                      </h3>
                      <ul className="space-y-2 mb-6">
                        {course.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-gray-500 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Instructor</h3>
                      <div className="flex items-start">
                        <img
                          src={course.instructorAvatar}
                          alt={course.instructor}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-semibold">
                            {course.instructor}
                          </h4>
                          <p className="text-gray-600 text-sm mb-2">
                            Senior Web Developer at TechCorp
                          </p>
                          <p className="text-gray-700">
                            Alex has over 10 years of experience in web
                            development and has trained thousands of students. He
                            specializes in JavaScript frameworks and loves
                            helping beginners break into the tech industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'syllabus' && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Syllabus</h3>
                      <div className="space-y-4">
                        {course.syllabus.map((week) => (
                          <div
                            key={week.week}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                          >
                            <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
                              <h4 className="font-medium">
                                Week {week.week}: {week.title}
                              </h4>
                              <button className="text-primary hover:text-primary-dark">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div className="px-4 py-3">
                              <ul className="space-y-2">
                                {week.topics.map((topic, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start text-gray-700"
                                  >
                                    <svg
                                      className="h-5 w-5 text-gray-400 mr-2 mt-0.5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Reviews</h3>
                      <div className="space-y-6">
                        {course.reviews.map((review) => (
                          <div
                            key={review.id}
                            className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                          >
                            <div className="flex items-center mb-3">
                              <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-10 h-10 rounded-full mr-3"
                              />
                              <div>
                                <h4 className="font-medium">{review.name}</h4>
                                <div className="flex items-center text-sm text-gray-500">
                                  <div className="flex mr-2">
                                    {[...Array(5)].map((_, i) => (
                                      <FiStar
                                        key={i}
                                        className={`${
                                          i < review.rating
                                            ? 'text-yellow-500 fill-current'
                                            : 'text-gray-300'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span>{review.date}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-18 border-2 border-indigo-700 ">
              <div className="mb-6">
                {course.originalPrice && (
                  <span className="text-gray-500 line-through mr-2">
                    ${course.originalPrice}
                  </span>
                )}
                <span className="text-3xl font-bold text-primary">
                  ${course.price}
                </span>
              </div>

              {enrolled ? (
                <div className="text-center py-4 text-green-700 mb-6 bg-lime-300 rounded-full">
                  You're enrolled in this course!
                </div>
              ) : (
                <button
                  onClick={handleEnroll}
                  className="btn btn-primary w-full mb-6 bg-indigo-700 p-3 rounded-full"
                >
                  Enroll Now
                </button>
              )}

              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Duration: {course.duration}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span>Level: {course.level}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>Certificate of Completion</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                  <span>Lifetime Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}