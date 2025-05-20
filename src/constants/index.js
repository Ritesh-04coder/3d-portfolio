const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 23, suffix: "+", label: "Satisfied Clients" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 99, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
   {
    imgPath: "/images/logos/company-logo-11.png",
  },
   {
    imgPath: "/images/logos/company-logo-1.png",
  },
   {
    imgPath: "/images/logos/company-logo-7.png",
  },
   {
    imgPath: "/images/logos/company-logo-6.png",
  },
   {
    imgPath: "/images/logos/company-logo-9.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Git Workflows",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git Workflows",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Ritesh brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp4.svg",
    logoPath: "/images/logo2.png",
    title: "Frontend Developer",
    date: "January 2023 - Jan 2024",
    responsibilities: [
      "Built responsive, pixel-perfect UI components using React, Webhooks.",
      "Collaborated with designers to translate Figma/Sketch mocks into interactive interfaces.",
      "Optimized bundle sizes and lazy-loaded assets to achieve sub-200ms page loads.",
    ],
  },
  {
    review: "Ritesh’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.svg",
    logoPath: "/images/logo1.svg",
    title: "Full Stack Developer",
    date: "June 2024 - Jan 2025",
    responsibilities: [
  "Developed full-stack web applications using Next.js with server-side rendering and API routes.",
  "Integrated frontend and backend logic within Next.js, ensuring seamless data flow and performance.",
  "Designed and maintained MongoDB schemas; optimized queries to improve response times.",
  "Implemented OAuth2 authentication and configured CI/CD pipelines using GitHub Actions.",
],

  },
  {
    review: "Ritesh’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/logo3.png",
    logoPath: "/images/logo3.png",
    title: "DevOps Engineer",
    date: "March 2025 Present",
    responsibilities: [
      "Automated server provisioning and configuration using Terraform and Ansible.",
      "Built Docker images and managed Kubernetes deployments on AWS EKS.",
      "Monitored infrastructure health with Prometheus/Grafana and optimized alerting.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Aarav Mehta",
    mentions: "@aaravmehta",
    review:
      "I can’t say enough good things about Ritesh. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Priya Sharma",
    mentions: "@priyasharma",
    review:
      "Working with Ritesh was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Rohan Iyer",
    mentions: "@rohaniyer",
    review:
      "Collaborating with Ritesh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ritesh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ritesh is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Sneha Kapoor",
    mentions: "@snehakapoor",
    review:
      "Ritesh was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Dev Patel",
    mentions: "@devpatel",
    review:
      "Ritesh’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Neha Verma",
    mentions: "@nehaverma",
    review:
      "Ritesh was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

 const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/ritesshhh.04?igsh=MTNjcHpjYzc4amFvNg==",
  },
  {
    name: "github",
    imgPath: "/images/github1.png",
    url: "https://github.com/Ritesh-04coder",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/RiteshS18572143?t=mc4nfj34HJoJ-KGHSZPWMQ&s=09",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/ritesh-singh-98403927b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];


export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
