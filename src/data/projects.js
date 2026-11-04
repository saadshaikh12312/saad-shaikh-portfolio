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
