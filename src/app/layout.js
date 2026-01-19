import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jack Pritom Soren - Full Stack Software Engineer | React, Next.js, MERN Stack Developer',
  description: 'Portfolio of Jack Pritom Soren, a passionate Full-Stack Engineer specializing in React, Next.js, MERN Stack, Spring Boot, and Supabase. Explore my projects, skills, and experience in software development.',
  keywords: ['Jack Pritom Soren', 'Full Stack Developer', 'Software Engineer', 'React Developer', 'Next.js', 'MERN Stack', 'JavaScript', 'Spring Boot', 'Supabase', 'Frontend Developer', 'Backend Developer', 'Portfolio'],
  authors: [{ name: 'Jack Pritom Soren' }],
  creator: 'Jack Pritom Soren',
  publisher: 'Jack Pritom Soren',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jackpritomsoren.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jack Pritom Soren - Full Stack Software Engineer',
    description: 'Portfolio of Jack Pritom Soren, a passionate Full-Stack Engineer specializing in React, Next.js, MERN Stack, Spring Boot, and Supabase.',
    url: 'https://jackpritomsoren.vercel.app',
    siteName: 'Jack Pritom Soren Portfolio',
    images: [
      {
        url: '/images/pp.png',
        width: 400,
        height: 400,
        alt: 'Jack Pritom Soren - Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jack Pritom Soren - Full Stack Software Engineer',
    description: 'Portfolio of Jack Pritom Soren, a passionate Full-Stack Engineer specializing in React, Next.js, MERN Stack, Spring Boot, and Supabase.',
    images: ['/images/pp.png'],
    creator: '@jps27',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // Replace with actual verification code
  },
}

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jack Pritom Soren",
    "alternateName": "jps27cse",
    "jobTitle": "Full Stack Software Engineer",
    "description": "Passionate Full-Stack Engineer specializing in React, Next.js, MERN Stack, Spring Boot, and Supabase with expertise in building scalable web applications.",
    "url": "https://jackpritomsoren.vercel.app",
    "image": "https://jackpritomsoren.vercel.app/images/pp.png",
    "sameAs": [
      "https://github.com/jps27cse",
      "https://www.linkedin.com/in/jps27cse/",
      "https://www.youtube.com/@jps27",
      "https://medium.com/@jackpritomsoren",
      "https://dev.to/jps27cse",
      "https://www.threads.net/@jps.27"
    ],
    "knowsAbout": [
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Spring Boot",
      "Supabase",
      "TypeScript",
      "Angular",
      "Docker",
      "Prisma",
      "Git",
      "Full Stack Development",
      "Web Development",
      "Software Engineering"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Bangladesh"
      }
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Bangladesh University of Business and Technology",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Bangladesh",
        "addressLocality": "Dhaka"
      }
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Square Health Ltd.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Bangladesh",
        "addressLocality": "Dhaka"
      }
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
