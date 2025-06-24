import { FiArrowRight } from 'react-icons/fi'

// Mock data - replace with actual API calls
const successStories = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Frontend Developer at TechCorp',
    story:
      'After completing the Web Development Bootcamp at AK Academy, I was able to transition from my non-tech job to a full-time developer position in just 3 months. The hands-on projects were exactly what I needed to build my portfolio and gain confidence in my skills.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Data Analyst at DataInsights',
    story:
      'The Data Science Fundamentals course gave me the practical skills I needed to break into the field. The instructors were incredibly supportive, and the career resources helped me prepare for interviews and negotiate my salary.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'UX Designer at CreativeMinds',
    story:
      'As a self-taught designer, I needed structured learning to fill in my knowledge gaps. The UX/UI Design Masterclass provided exactly that, with real-world projects and feedback from industry professionals that helped me land my dream job.',
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Full-stack Developer at StartupCo',
    story:
      'I took several courses at AK Academy to upskill while working my full-time job. The flexible schedule and comprehensive curriculum allowed me to learn at my own pace and eventually switch careers into tech.',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    id: 5,
    name: 'Priya Patel',
    role: 'Mobile Developer at AppWorks',
    story:
      'The Mobile App Development course was a game-changer for me. I went from knowing nothing about Flutter to building my first app and getting hired as a junior developer within 6 months of completing the course.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Digital Marketing Specialist at BrandUp',
    story:
      'The Digital Marketing Strategy course helped me formalize my knowledge and stand out in a competitive job market. The practical assignments gave me concrete results to showcase during interviews.',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
]

export default function StudentStories() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Success Stories</h1>
          <p className="text-xl max-w-3xl">
            Hear from our graduates about how AK Academy helped them transform
            their careers
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{story.name}</h3>
                      <p className="text-gray-600 text-sm">{story.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{story.story}"
                  </p>
                  <button className="text-primary font-medium inline-flex items-center hover:text-primary-dark">
                    Read Full Story <FiArrowRight className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with AK
            Academy
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/courses"
              className="btn btn-primary inline-flex items-center justify-center"
            >
              Browse Courses
            </a>
            <a
              href="/contact"
              className="btn btn-outline inline-flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}