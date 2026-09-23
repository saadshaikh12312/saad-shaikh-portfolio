export const personalInfo = {
  name: "Saad Shaikh",
  role: "Full-Stack Developer",
  positioning: "MERN Stack Development + Java Full-Stack Development",
  location: "Pune, Maharashtra, India",
  status: "Available for Opportunities",
  email: "saadshaikh966532@gmail.com",
  github: "https://github.com/saadshaikh12312",
  linkedin: "https://www.linkedin.com/in/saad-shaikh-aminoddin",
  leetcode: "https://leetcode.com/u/XGHqgeoovn/",
  resumeUrl: "/resume/SaadResume_MERN.pdf",
  downloadResumeName: "Saad-Shaikh-Resume.pdf",
  heroGreeting: "Hi, I'm Saad Shaikh.",
  heroStatement: "I build practical full-stack web applications across both MERN and Java ecosystems, focusing on dependable backend APIs, responsive web interfaces, and clean, problem-solving code.",
  typingPhrases: [
    "Full-Stack Developer",
    "MERN Stack Developer",
    "Java Full-Stack Developer",
    "Backend & API Developer"
  ],
  aboutHeadline: "A little about me",
  aboutNarrative: [
    "I'm a Computer Science graduate and early-career Full-Stack Developer based in Pune, India.",
    "My work spans both the modern JavaScript (MERN) ecosystem and Java-based backend development. On the Java side, I build structured REST APIs and services with Java, Spring Boot, and MySQL. On the MERN side, I develop full-stack applications with React, Node.js, Express.js, and MongoDB.",
    "I enjoy solving practical problems, understanding what happens under the hood, and continuously refining my code quality, database design, and user interfaces."
  ]
};

export const skillsCategories = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Java", "Spring Boot", "REST APIs"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "Mongoose", "MySQL"]
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "Postman", "Cloudinary", "Mapbox"]
  },
  {
    category: "Core Concepts",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Authentication & Authorization",
      "MVC Architecture"
    ]
  }
];

// Alias for backward compatibility
export const skillsGrouped = skillsCategories;

export const projectsData = [
  {
    id: "wonderlust",
    number: "01",
    badge: "Featured Project",
    category: "MERN Stack / MVC",
    subtitle: "Travel & Accommodation Listing Platform",
    title: "Wonderlust",
    shortDescription: "A full-stack travel listing platform inspired by Airbnb for discovering, creating, reviewing, and managing accommodation listings.",
    fullDescription: "Developed a full-stack travel listing platform inspired by Airbnb that allows users to explore, create, update, and manage accommodation listings. Implemented secure authentication and authorization with Passport.js, ownership-based access control, listing and review management, search functionality, location autocomplete, and interactive maps using Mapbox. Integrated Cloudinary for image upload and management, MongoDB and Mongoose for data storage and schema design, and Joi for server-side validation. Built using an MVC architecture with a responsive EJS and Bootstrap interface.",
    keyCapabilities: [
      "Accommodation listing discovery & category filtering",
      "Listing creation, editing, and deletion with ownership control",
      "Authentication and authorization with Passport.js",
      "Interactive Mapbox geolocation & location autocomplete",
      "Review and 5-star rating system with Cloudinary image management",
      "MongoDB persistence with Joi server-side validation"
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Bootstrap 5",
      "JavaScript",
      "Passport.js",
      "Joi",
      "Cloudinary",
      "Multer",
      "Mapbox",
      "Express Session",
      "Connect-Mongo"
    ],
    githubUrl: "https://github.com/saadshaikh12312/Wonderlust",
    liveDemoUrl: "https://wonderlust-rqhl.onrender.com/listings",
    images: [
      {
        url: "/images/wonderlust/01-home-explore.png",
        caption: "Explore Listings & Category Filter Bar"
      },
      {
        url: "/images/wonderlust/02-listing-details.png",
        caption: "Accommodation Details & Pricing View"
      },
      {
        url: "/images/wonderlust/03-mapbox.png",
        caption: "Interactive Mapbox Geolocation"
      },
      {
        url: "/images/wonderlust/04-add-listing.png",
        caption: "Add New Listing Creation Form"
      },
      {
        url: "/images/wonderlust/05-update-listing.png",
        caption: "Update / Edit Existing Listing"
      },
      {
        url: "/images/wonderlust/06-signup.png",
        caption: "User Account Registration"
      },
      {
        url: "/images/wonderlust/07-login.png",
        caption: "User Authentication Login"
      },
      {
        url: "/images/wonderlust/08-reviews.png",
        caption: "Review & 5-Star Rating Subsystem"
      }
    ]
  },
  {
    id: "bookloop",
    number: "02",
    badge: "Featured Project",
    category: "MERN Stack / MVC",
    subtitle: "Student Textbook Exchange Platform",
    title: "BookLoop",
    shortDescription: "A student-focused textbook marketplace for buying, selling, exchanging, and donating academic books.",
    fullDescription: "Developed a full-stack textbook exchange platform that allows students to create and manage book listings, search and filter academic books, and sell, donate, or exchange them. Implemented secure authentication and authorization, book ownership controls, request-based workflows, request notifications, image uploads with Cloudinary, and MongoDB-based data management. Built the application using an MVC architecture with a responsive EJS and Bootstrap interface.",
    plannedFeature: "In-app real-time chat planned to replace external messaging after request acceptance.",
    keyCapabilities: [
      "Student-focused academic textbook marketplace",
      "Buy, sell, exchange, and donate workflows",
      "Book listing management with search & filtering",
      "Secure authentication & authorization with Passport.js",
      "Ownership-based access control and request notifications",
      "Cloudinary image uploads & MongoDB Atlas persistence"
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Bootstrap 5",
      "JavaScript",
      "Passport.js",
      "Joi",
      "Cloudinary",
      "Multer",
      "Express Session",
      "Connect-Mongo"
    ],
    githubUrl: "https://github.com/saadshaikh12312/BookLoop",
    liveDemoUrl: "https://bookloop-8vh5.onrender.com/",
    images: [
      {
        url: "/images/bookloop/01-browse-books.png",
        caption: "Available Books Catalog & Search Filters"
      },
      {
        url: "/images/bookloop/02-landing.png",
        caption: "Landing Banner & Student Marketplace"
      },
      {
        url: "/images/bookloop/03-add-book.png",
        caption: "Host / Add New Book Listing Form"
      }
    ]
  }
];

export const experienceData = [
  {
    company: "AMSHRADHA LLP",
    role: "Teaching Assistant – DSA (Java)",
    type: "Part-Time",
    duration: "August 2026 – December 2026",
    location: "Remote / Pune, India",
    description: "Provided technical support to students learning Data Structures and Algorithms using Java by resolving programming queries, debugging code, explaining DSA concepts, and assisting students through text-based and call-based support. Helped students understand problem-solving approaches and improve their coding skills through clear, structured guidance.",
    coreAreas: [
      "Data Structures & Algorithms",
      "Java Debugging",
      "Technical Mentorship",
      "Problem-Solving Approaches"
    ]
  }
];

export const educationData = [
  {
    degree: "B.Sc. Computer Science",
    college: "SSVPS College, Dhule",
    university: "North Maharashtra University",
    location: "Dhule, Maharashtra, India",
    duration: "2023 – 2026",
    overallCgpa: "8.70",
    principalCgpa: "9.02",
    isPrimary: true
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    college: "Jai Hind Junior College",
    location: "Dhule, Maharashtra, India",
    duration: "2022 – 2023",
    percentage: "60%",
    isPrimary: false
  }
];