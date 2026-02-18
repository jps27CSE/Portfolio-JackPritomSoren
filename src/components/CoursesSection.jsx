import Image from "next/image";

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "System Design Mastery Course in Bangla",
      description: "Learn to design scalable and efficient systems. Master fundamental concepts of system architecture and solve real-world design problems.",
      thumbnail: "/images/courses/systemdesign.jpg",
      duration: "8 weeks",
      level: "All Levels",
      students: "1.2K",
      rating: 4.9,
      price: "Free",
      category: "System Design",
      link: "https://www.youtube.com/playlist?list=PLiGGopVZ-5D0lSZmDPBSlg9bT4kncg9aX"
    },
    {
      id: 2,
      title: "JavaScript Deep Concepts Mastery Course (Bangla)",
      description: "Understand how JavaScript works behind the scenes. Master internals and think like an engineer with practical examples.",
      thumbnail: "/images/courses/javascript.jpg",
      duration: "6 weeks",
      level: "Advanced",
      students: "2.8K",
      rating: 4.8,
      price: "Free",
      category: "JavaScript",
      link: "https://www.youtube.com/playlist?list=PLiGGopVZ-5D0TGaLomf01a7NdUo6hQMzf"
    },
    {
      id: 3,
      title: "Web Security Essentials in Bangla",
      description: "Learn web authentication, cookies, sessions, JWTs, and essential security concepts explained in Bangla. Master the fundamentals of web security and protect your applications.",
      thumbnail: "/images/courses/websecurity.jpg",
      duration: "4 weeks",
      level: "Intermediate",
      students: "1.5K",
      rating: 4.7,
      price: "Free",
      category: "Security",
      link: "https://www.youtube.com/playlist?list=PLiGGopVZ-5D2SawszQ8kzJAUBCVnCNtjn"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Courses
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Explore courses on system design, programming deep dives, frameworks, and real projects. 
            Learn practical skills and build your expertise in modern software development.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden"
            >
              {/* Course Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl group-hover:ring-4 group-hover:ring-blue-400/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  {course.category}
                </div>
              </div>

              {/* Course Content */}
              <div className="space-y-4">
                {/* Title and Level */}
                <div className="flex items-start justify-between">
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 line-clamp-2"
                  >
                    {course.title}
                  </a>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    {course.level}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 min-h-[3.5rem]">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-white">{course.price}</div>
                  </div>
                </div>

              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>


      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-20 right-20 w-4 h-4 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-80"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-indigo-400 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-10 left-20 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-70"></div>
    </section>
  );
}