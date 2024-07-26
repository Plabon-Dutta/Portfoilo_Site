import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `Welcome to my portfolio! I'm Plabon, a Competitive Programmer with a passion for Programming. This space is dedicated to showcasing my work, skills, and creative journey. Here, you'll find a collection of my projects, each reflecting my dedication and expertise. Whether you're here to explore my portfolio or get in touch, I hope you find something that inspires you. Thank you for visiting, and I look forward to connecting with you!`;

export const ABOUT_TEXT = `Welcome to my portfolio! I am a highly motivated and dedicated individual with a passion for continuous learning and personal development. With a strong work ethic and commitment to achieving my goals, I thrive on taking on new challenges and quickly adapting to diverse environments.`;
export const ABOUT_TEXT2 = `In my free time, I enjoy reading, exercising, and spending quality time with friends and family. As an avid traveler, I am always seeking new adventures and experiences that broaden my perspective and enrich my personal growth.`;
export const ABOUT_TEXT3 = `I am eager to connect with you and welcome any feedback that can help me improve further. Let's engage in a conversation about what makes each of us unique and explore opportunities for growth and collaboration.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - Present",
    role: "Teaching Assistant",
    company: "University of Asia Pacific.",
    description: `Support the lead teacher in delivering lessons and assist in grading assignments, tests, and quizzes. Provide feedback to students on their work and maintain accurate records of student performance. Prepare instructional materials and resources and conduct small group or one-on-one tutoring sessions`,
    technologies: ["Computer Fundamentals", "Structerd Programming", "Java", "DSA"],
  },
  {
    year: "Jan 2024 - May 2024",
    role: "Research Intern",
    company: "AMIR Lab",
    description: `Engage in research activities focused on advanced machine intelligence and deep learning. Collaborate with researchers on ongoing projects and experiments. Participate in lab meetings, discussions, and workshops to enhance the understanding of research methodologies. Contribute to the development of research papers, reports, and presentations.`,
    technologies: ["Machine Learning", "Deep Learning", "Federated Learning"],
  },
];

export const PROJECTS = [
  {
    title: "Geasture Translator",
    image: project1,
    description:
      "A functional real-time vision-based American sign language recognition for Dumb and Deaf people has been developed for ASL alphabets that can translate American Sign Language to Text and Speech.",
    technologies: ["Python", "OpenCV", "Machine Learning"],
  },
  {
    title: "BlockChain Based CrowdFunding Platform",
    image: project2,
    description:
      "A smart blockchain-based crowdfunding platform (Web Application) can become a source of money for a project by asking many contributors to donate a small amount to it individually. People using this platform can crowdfund for just about anything.",
    technologies: ["HTML", "CSS", "Django", "Solidity", "Blockchain"],
  },
  {
    title: "Banking Management System",
    image: project3,
    description:
      "A Banking Management System using Java streamlines banking operations by managing customer accounts, transactions, and financial services. It includes features for account creation, balance inquiry, fund transfers, and transaction history, ensuring security and reliability for both staff and customers",
    technologies: ["Java", "JavaFX"],
  },
  {
    title: "Sea Beach View with Computer Graphics",
    image: project4,
    description:
      "Sea Beach View with Computer Graphics is a digital artwork that beautifully depicts a seaside landscape. It showcases realistic waves, golden sands, and vibrant skies, created using advanced graphics techniques. This blend of technology and art offers an immersive, visually captivating beach scene.",
    technologies: ["C++", "OpenGL3"],
  },
  {
    title: "Portfolio Site",
    image: project5,
    description:
      "A sleek and responsive portfolio website designed to showcase professional skills and projects. Features include an interactive about section, project details, and a contact form.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "89, 3/F, Banani, Dhaka-1213",
  phoneNo: "+88 01851316950",
  email: "connectplabon@gmail.com",
};