import { useState } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import TestimonialCard from "../components/TestimonialCard";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import homeBG from "../assets/home.webp";
import { motion } from "framer-motion";

const featuredCourses = [
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
      "Learn UI/UX from wireframes to prototypes - design beautiful interfaces.",
    category: "Design",
    duration: "4 weeks",
    students: 543,
    rating: 4.9,
    price: 149,
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Web Developer at TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    comment:
      "The courses at AK Academy transformed my career. The practical approach helped me land my dream job within months!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Analyst",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    comment:
      "Excellent content and supportive community. The instructors are industry experts who really care about student success.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 5,
    comment:
      "I went from complete beginner to working professional thanks to AK Academy. Highly recommend their design courses!",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <div>
      <section
        className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-white px-4"
        style={{ backgroundImage: `url(${homeBG})` }}
      >
        <div className="max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[2px_2px_0px_black]"
          >
            <span className="text-indigo-700 drop-shadow-[2px_2px_0px_black]">
              Learn In-Demand Skills
            </span>{" "}
            <span className="text-white drop-shadow-[2px_2px_0px_black]">
              for the Digital Age
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg sm:text-xl mb-8 drop-shadow"
          >
            Join thousands of students mastering tech skills with our
            project-based courses and expert instructors.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/courses"
              className="bg-indigo-600 text-white px-6 py-3 mb-2 rounded-full font-semibold flex items-center"
            >
              Explore Courses <FiArrowRight className="ml-2" />
            </Link>
            <button className="bg-white bg-opacity-10 border mb-2 border-white text-black hover:bg-opacity-20 px-6 py-3 rounded-full flex items-center">
              <FiPlay className="mr-2" /> Watch Demo
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2 text-indigo-700">10,000+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2 text-indigo-700">120+</h3>
              <p className="text-gray-600">Courses Available</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2 text-indigo-700">95%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2 text-indigo-700">50+</h3>
              <p className="text-gray-600">Expert Instructors</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4"><span className="text-indigo-700">Featured</span> Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our most popular courses designed to get you job-ready in
              today's tech industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/courses"
              className="btn btn-outline inline-flex items-center bg-indigo-700 p-3 rounded-full text-white"
            >
              View All Courses <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4"><span className="text-indigo-700">Why Choose </span> AK Academy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best learning experience for our
              students
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary bg-opacity-10 text-primary rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-indigo-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    className=""
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of practical
                experience in their fields.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary bg-opacity-10 text-primary rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-indigo-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-on Projects</h3>
              <p className="text-gray-600">
                Build real-world projects to showcase your skills to potential
                employers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary bg-opacity-10 text-primary rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg "
                  className="h-7 w-7 text-indigo-700"
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
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
              <p className="text-gray-600">
                Study at your own pace with lifetime access to course materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4"><span className="text-indigo-700">Student Success</span> Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our graduates about their learning experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-black">
        <div className="container ">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
             <span className="text-indigo-700">Stay Updated</span> with Our Latest Courses
            </h2>
            <p className="mb-8">
              Subscribe to our newsletter to get notified about new courses,
              discounts, and learning resources.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 border-2 focus:outline-none mb-2 sm:mb-0 sm:mr-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn btn-secondary whitespace-nowrap bg-indigo-700 rounded-full p-4 text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
