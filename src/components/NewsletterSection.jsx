import Image from "next/image";

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Inside the Stack with Jack
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Full-stack engineering, system design, and AI — real-world patterns, scalable architectures, and practical programming.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <Image
                  src="/images/newsletter.jpg"
                  alt="Inside the Stack with Jack Newsletter"
                  width={400}
                  height={300}
                  className="relative z-10 rounded-xl shadow-2xl object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Newsletter Info */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">What You'll Get:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="w-3 h-3 bg-purple-400 rounded-full mt-1 flex-shrink-0"></span>
                    <span>Deep dives into full-stack architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-3 h-3 bg-pink-400 rounded-full mt-1 flex-shrink-0"></span>
                    <span>System design patterns and best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mt-1 flex-shrink-0"></span>
                    <span>Software engineering career tips and growth strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-3 h-3 bg-indigo-400 rounded-full mt-1 flex-shrink-0"></span>
                    <span>RAG, AI topics, and practical programming tips</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7429800998791196672"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Subscribe on LinkedIn
                </a>
                <a
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7429800998791196672"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-white/20 border border-white/30 transition-all duration-300"
                >
                  View Latest Post
                </a>
                </div>

                {/* Stats */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-3xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          500+
                        </div>
                        <div className="text-sm text-gray-300 font-medium">Active Subscribers</div>
                        <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-80"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-pulse opacity-50"></div>
    </section>
  );
}