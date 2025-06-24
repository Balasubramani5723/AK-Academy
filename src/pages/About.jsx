import { FiAward, FiUsers, FiBook, FiBriefcase } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-primary-dark py-5 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-700">
            AK <span className="text-black">Academy</span>
          </h1>
          <p className="text-xl text-gray-800">
            Empowering individuals with cutting-edge skills for the digital age.
            Our mission is to make quality education accessible to everyone.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Team working together"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-indigo-700">
                Our <span className="text-black">Story</span> 
              </h2>
              <p className="text-gray-700 mb-4">
                Founded in 2015, AK Academy began as a small initiative to teach
                coding skills to underprivileged youth. What started as weekend
                workshops quickly grew into a full-fledged online learning
                platform serving students worldwide.
              </p>
              <p className="text-gray-700 mb-6">
                Today, we're proud to have helped over 10,000 students acquire
                in-demand skills and launch rewarding careers in tech. Our
                project-based approach and industry-expert instructors ensure
                that our graduates are job-ready from day one.
              </p>
              <Link
                to="/courses"
                className="btn btn-primary inline-flex items-center bg-indigo-700 text-white p-3 rounded-full"
              >
                Explore Our Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border-indigo-700 border-2">
              <div className="w-16 h-16 bg-primary bg-opacity-10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 border-indigo-700 border-2">
                <FiAward size={33} className="text-indigo-700" />
              </div>
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-gray-600">Courses Offered</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-indigo-700 border-2">
              <div className="w-16 h-16 bg-primary bg-opacity-10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 border-indigo-700 border-2">
                <FiUsers size={33} className="text-indigo-700" />
              </div>
              <h3 className="text-3xl font-bold mb-2">10K+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-indigo-700 border-2">
              <div className="w-16 h-16 bg-primary bg-opacity-10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 border-indigo-700 border-2">
                <FiBook size={33} className="text-indigo-700" />
              </div>
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-gray-600">Hours of Content</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-indigo-700 border-2">
              <div className="w-16 h-16 bg-primary bg-opacity-10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 border-indigo-700 border-2">
                <FiBriefcase size={33} className="text-indigo-700" />
              </div>
              <h3 className="text-3xl font-bold mb-2">85%</h3>
              <p className="text-gray-600">Career Advancement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-indigo-700">
              Meet <span className="text-black">Our Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate educators and industry experts dedicated to your
              success
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-indigo-700">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                bio: "Former lead developer with 15+ years of experience in web technologies.",
                image:
                  "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg",
              },
              {
                name: "Sarah Williams",
                role: "Head of Instruction",
                bio: "Education specialist with a passion for curriculum development.",
                image:
                  "https://img.freepik.com/premium-photo/professional-indian-business-woman-suit-corporate-office_753390-10897.jpg",
              },
              {
                name: "Michael Chen",
                role: "Data Science Lead",
                bio: "Data scientist with expertise in machine learning and AI applications.",
                image:
                  "https://img.freepik.com/free-photo/happy-bearded-man-business-clothes-looking-camera_171337-11392.jpg",
              },
              {
                name: "Emma Rodriguez",
                role: "UX Design Lead",
                bio: "Award-winning designer with a focus on user-centered design principles.",
                image:
                  "https://t3.ftcdn.net/jpg/06/04/88/42/360_F_604884254_MGt40Y4wE1gyheD7bTX6wbDZ9afN2njJ.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="rounded-lg shadow-md overflow-hidden bg-gray-200"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-primary text-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 text-indigo-700">
            Ready to <span className="text-black">Start Learning?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with
            AK Academy
          </p>
          <Link
            to="/courses"
            className="btn btn-secondary inline-flex items-center mx-auto bg-indigo-700 p-3 rounded-full text-white"
          >
            Browse Courses
          </Link>
        </div>
      </section>
    </div>
  );
}
