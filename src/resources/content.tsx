import { About, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Christina",
  lastName: "Stoiber",
  name: "Christina Stoiber",
  role: "Data Visualization Researcher & UX Designer",
  avatar: "/images/portrait-christina.jpg",
  email: "cstoiber90@gmail.com",
  location: "Europe/Vienna", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "German"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};


const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/NChristina",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/christina-stoiber-99233723b/",
  },
  {
    name: "Orcid",
    icon: "orcid",
    link: "https://orcid.org/0000-0002-1764-1467",
  },
   {
    name: "Google Scholar",
    icon: "googleScholar",
    link: "https://scholar.google.com/citations?user=0b65cYsAAAAJ&hl=de",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home-2.jpg", //it is the picture shown when sharing on social media
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Making Data Accessible, Meaningful and Learnable</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Christina Stoiber, a data visualization researcher & UX designer.  <br /> 
      My overall goal is to support users in understanding complex data through intuitive and engaging visual representations.  
     
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Christina is a data visualization researcher and UX designer with a passion for transforming complex data into clear visual respesentation.
        My work bridges research and practice by merging cognitive science, data visualization, 
        and user-centered design to help people learn, explore, and make better decisions through data.
        <br />
       <a
          href="/pdf/lebenslauf_stoiber_EN_2025_short-industry.pdf"
          download ="cv_christina_stoiber.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          Download my CV (PDF)
        </a>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "University of Applied Sciences St. Pölten",
        timeframe: "2015 - Present",
        role: "Researcher, UX Designer, and Deputy Head",
        achievements: [
          <>
            Deputy Head of Josef Ressel Center for Knowledge-Assisted Visual Analytics
            for Industrial Manufacturing Data & Coordination of three projects in cooperation with
            industry partners
          </>,
          <>
            Managing cross-functional teams, organizing co-workshops, driving information architecture, conducting user research, validating prototypes, working with stakeholders
          </>,   
           <>
            Writing and reviewing scientific papers
          </>,
           <>
            Teaching and advising Bachelor and Master students
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "University of Applied Sciences Upper Austria",
        timeframe: "2017 - 2018",
        role: "Lecturer",
        achievements: [
          <>
            Teaching master students in the field of Information visualization and Visual Analytics
          </>,        
        ],
        images: [],
      },
      {
        company: "Chriative –Design & Graphics",
        timeframe: "2014 - 2021",
        role: "Self-employed graphic designer",
        achievements: [
          <>
            Designing and developing of websites (Wordpress CMS)
          </>,  
            <>
            Producing corporate designs, and print media for different small and medium-sized
            companies
          </>,        
        ],
        images: [],
      },
        {
        company: "University of Applied Sciences St. Pölten",
        timeframe: "2013 - 2015",
        role: "Self-employed graphic designer",
        achievements: [
          <>
            Working on different research projects in the field of data visualization, HCI, and usability
          </>,               
        ],
        images: [],
      },
      {
        company: "Fluidtime Data Services GmbH",
        timeframe: "2013",
        role: "Internship (6 months)",
        achievements: [
          <>
            Internship in the field of interaction design and usability
          </>, 
           <>
           Developing of low- and high-fidelity prototypes for a public transport
          </>, 
          <>
           Preparing and conducting usability evaluations and user research
          </>,                   
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education & Training",
    institutions: [
      {
        name: "PhD (Dr.techn.) Informatics at TU Wien, Austria",
        description: <>Disseration: Visualization Onboarding: Supporting users in understanding unfamiliar visual
representations, Supervisor: FH-Prof. Priv.-Doz. Dipl.-Ing. Dr. Wolfgang Aigner, MSc</>,
      },
      {
        name: "Master degree (Dipl.-Ing.) Digital Media Technologies (Media Computing) at University of Applied Sciences St. Pölten , Austria",
        description: <>Master thesis: Visualization Techniques for Climbing Self-Assessment</>,
      },
       {
        name: "Bachelor degree (BSc) Media Technology (Interactive Media) at University of Applied Sciences St. Pölten , Austria",
        description: <></>,
      },
       {
        name: "Reife- und Diplomprüfung",
        description: <>Höhere Lehranstalt für wirtschaftliche Berufe (IT-Creativ), St. Pölten</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma & Sketch",
        description: (
          <>Creating user interfaces and prototypes using Figma and Sketch</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "vega",
            icon: "vega",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Coding skills & Visualization tools",
        description: (
          <>Basic coding skills in JavaScript, D3.js, and Vega-Lite; experienced in creating interactive dashboards using Tableau and Datawrapper</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "d3.js",
            icon: "d3",
          },
          {
            name: "vega",
            icon: "vega",
          },
           {
            name: "tableau",
            icon: "tableau",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      }, 
      {
        title: "Data Analysis & Visualization",
        description: (
          <>Experienced in data analysis & visualization using R</>
        ),
        tags: [
          {
            name: "rproject",
            icon: "rproject",
          },         
        ],
        // optional: leave the array empty if you don't want to display images
        images: [    
        ],
      },
       {
        title: "Adobe Creative Suite",
        description: (
          <>Experienced in designing and editing visual content using Adobe Illustrator, Photoshop, and InDesign</>
        ),
        tags: [
          {
            name: "adobe",
            icon: "adobe",
          },         
        ],
        // optional: leave the array empty if you don't want to display images
        images: [    
        ],
      },   
    ],
  },
};


const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};



export { person, social, newsletter, home, about, work, };
