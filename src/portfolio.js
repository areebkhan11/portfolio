/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Areeb",
  logo_name: "Areeb.k()",
  nickname: "Areeb / Khan",
  full_name: "Areeb Khan",
  subTitle:
    "Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1DYXbNESHvSeNHJbfTWbH17Cv_kjQ7kIi/view?usp=sharing",
  mail: "mailto:areebkhan123123@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/areebkhan11",
  linkedin: "https://www.linkedin.com/in/areeb-khan-33808716a/",
  gmail: "areebkhan123123@gmail.com",
  gitlab: "https://gitlab.com/harikanani",
  facebook: "https://www.facebook.com/aerhan.khan/",
  twitter: "https://twitter.com/areebkhan110",
  instagram: "https://www.instagram.com/rebkhan/?hl=en",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter and Android",
        "⚡ Creating application backend in Node, Express ",
        "⚡ Integration of third party services such as  AWS "
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "fa-css3",
        //   style: {
        //     color: "#1572B6",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "PHP",
        //   fontAwesomeClassname: "simple-icons:php",
        //   style: {
        //     color: "#7377AD",
        //   },
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "simple-icons:java",
        //   style: {
        //     color: "#f89820",
        //   },
        // },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        // {
        //   skillName: "MySQL",
        //   fontAwesomeClassname: "simple-icons:mysql",
        //   style: {
        //     color: "#4479A1",
        //   },
        // },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        // {
        //   skillName: "Apache",
        //   fontAwesomeClassname: "simple-icons:apache",
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "simple-icons:c",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Iqra University North Campus",
      subtitle: "Bachelor of Science In Computer Science",
      logo_path: "IU.png",
      alt_name: "IU",
      duration: "2017 - 2021",
      descriptions: [
        // "⚡ I'm currently pursuing my bachelors in Information Technology."
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering degree. ",
      ],
      website_link: "https://iqra.edu.pk/",
    },
    {
      title: "Govt. College For Men Nazimabad",
      subtitle: "Pre-Engineering",
      logo_path: "ssgandhy.png",
      alt_name: "SSGC",
      duration: "2015 - 2016",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.facebook.com/GCNKARACHI/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/18lhLwLdxUpAWP0xsGnhHYutYSMbP5dRB/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    // {
    //   title: "Hackathon",
    //   subtitle: "Hack The Mountains",
    //   logo_path: "hackathon1.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ad1i2ou3b0C987Pr96XFkSFgKDLcJmq7/view?usp=sharing",
    //   alt_name: "hackathon",
    //   color_code: "#E2405F",
    // },
    // {
    //   title: "A300: Atlas Security",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },
    {
      title: "Interactivity with JavaScript",
      subtitle: "University of Michigan",
      logo_path: "iit.png",
      certificate_link:
        "https://drive.google.com/file/d/1ad1i2ou3b0C987Pr96XFkSFgKDLcJmq7/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
    // {
    //   title: "Hack20",
    //   subtitle: "Flutter International Hackathon",
    //   logo_path: "flutter.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
    //   alt_name: "Flutter International Hackathon",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Postman Student Expert",
    //   subtitle: "Postman",
    //   logo_path: "postman.png",
    //   certificate_link:
    //     "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#fffbf3",
    // },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have experience with ReactJS, Redux, MaterialUI, Tailwind CSS, NodeJS, Express, MongoDB, GraphQL, Next JS, and a lot of other frameworks of JavaScript. I have worked on multiple projects using the MERN stack, and have experience in developing CMS using Strapi with PostgreSQL. I'm diligent with my duties and responsibilities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work History",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Zaavia",
          company_url: "http://zaavia.net/",
          logo_path: "valora.jpg",
          duration: "Oct 2021 - present",
          location: "Office",
          description:
          `Train, manage and provide guidance to junior software development staff.
          Work closely with the Project Manager and Team Leads on change request functions.
          Develops new and maintains existing applications.
          Increased productivity and problem-solving technics by 20%.
          We primarily used MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
          `,
            // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Junior Software Developer",
          company: "Zaavia",
          company_url: "http://zaavia.net/",
          logo_path: "valora.jpg",
          duration: "Jan 2021 - Oct 2021 · 10 mos",
          location: "Office",
          description:
          `Work closely with the Client and Team on change request functions.
          We Primarily used React, strapi GraphQl and many other technologies. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
          `,
            // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "Wordpress Developer",
          company: "SERP",
          company_url: "https://www.serpresearchcenter.com/",
          logo_path: "nightowls.jpg",
          duration: "Oct 2020 - Dec 2020 · 3 mos",
          location: "Office",
          description:
          `Work closely with the Client and Team on change request functions.
          We Primarily used React, strapi GraphQl and many other technologies. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
          `,
            // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        }
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "harikrushn.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I blog on tech and latist updates in programming specialy on React js and other JavaScript frameworks, I do try to document it so it can be helpful to others.",
    link: "https://medium.com/@areebkhan123123/about",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Social Media App",
      url: "https://github.com/areebkhan11/SocialMedaiApp-MERN-",
      description: "Complete project on MERB stack added login authentication with google and registration Search option Pagination and Comments option.",
      languages: [
        {
          name: "Mongo Db",
          iconifyClass: "logos-mongodb-icon",
        }, {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Redux",
          iconifyClass: "logos-redux",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "1",
      name: "React Shopping App",
      url: "https://github.com/areebkhan11/Shopping-App-REACT",
      description:
        "Complete e-commerce application list of all items with search type option, add to cart, list of items in cart and callculation on the items in the cart.",
      languages: [
        {
          name: "bootstrap",
          iconifyClass: "logos-bootstrap",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Redux",
          iconifyClass: "logos-redux",
        },
      ],
    },
    {
      id: "2",
      name: "Google Docs Clone",
      url: "https://github.com/areebkhan11/google-docs-clone-Socket.io",
      description:
        "google docs clone in react usnig Socket.io inplemented in react",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Quill",
          iconifyClass: "ri-quill-pen-line",
        },
        {
          name: "socket-io",
          iconifyClass: "logos-socket-io",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "Cocktails Search",
      url: "https://github.com/areebkhan11/React-Cocktails-searching-",
      description:
        "React project fetching the list of cocktails and showing details of cocktails having Search bar implemented with context api.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },{
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },{
          name: "material-ui",
          iconifyClass: "logos-material-ui",
        },
        
      ],
    },
    {
      id: "4",
      name: "CRUD - MERN stack",
      url: "https://github.com/areebkhan11/MERN-Stack-crud-App-/tree/main",
      description:
        "A simple create update delete app implemented using Mongodb, Express, React, NodeJs .",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Mongo Db",
          iconifyClass: "logos-mongodb-icon",
        },
      ],
    },
    {
      id: "3",
      name: "Mobile Shopping App",
      url: "https://github.com/areebkhan11/Flutter-Shopping-App/tree/main/SHOPAPP/my_app",
      description:
        "Flutter shopping project using complete statefull widgets",
      languages: [
        {
          name: "flutter",
          iconifyClass: "logos-flutter",
        },{
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        
      ],
    },
    {
      id: "4",
      name: "Expence Tracker",
      url: "https://github.com/areebkhan11/ExpenceTracker",
      description:
        "Simple Expence tracker using React js and material ui.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "material-ui",
          iconifyClass: "logos-material-ui",
        },
      ],
    },
    {
      id: "5",
      name: "Calculator",
      url: "https://github.com/areebkhan11/calculator-in-JavaScript",
      description:
        "Simple calculator using html css and javascript",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
       
      ],
    },
    {
      id: "6",
      name: "Online Quiz",
      url: "https://github.com/areebkhan11/online-quiz",
      description:
        "Complete Quiz application using javascript calculation of score of a user ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
   
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
