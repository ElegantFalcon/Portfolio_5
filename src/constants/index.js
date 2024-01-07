import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    baabtra,
    Arduino,
    django,
    mysql,
    postgre,
    tripguide,
    threejs,
    untangled,
    songsift,
    solidity
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "NodeJS Developer",
      icon: web,
    },
    {
      title: "Django Developer",
      icon: mobile,
    },
    {
      title: "Arduino Developer",
      icon: backend,
    },
    {
      title: "Robotics Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "Mysql",
      icon: mysql,
    },
    {
      name: "PostgreSql",
      icon: postgre,
    },
    {
      name: "Arduino",
      icon: Arduino,
    },
    
    
    
    
  ];
  
  const experiences = [
    {
      title: "Django Developer",
      company_name: "Baabtra.com",
      icon: baabtra,
      iconBg: "white",
      date: "August 2022 - November 2022",
      points: [
        "Developing and maintaining web applications using Django and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
   
  ];
  
  const testimonials = [
   
  ];
  
  const projects = [
    {
      name: "Untangled",
      description:
        "Untangled is a mental health website that offers a depression test, locates nearby therapists and doctors, and provides resources for mental health and well-being. It aims to provide comprehensive support for individuals with depression.",
      tags: [
        {
          name: "Rasa Framework",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        },
      ],
      
      image: untangled ,
      source_code_link: "",
    },
    {
      name: "SongSift",
      description:
        "Song Sift is an ML based recommendation project that utilizes various technologies and libraries to create a web application for song analysis and recommendation. It combines machine learning, data processing, and APIs to provide a powerful tool for music enthusiasts.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreejS",
          color: "green-text-gradient",
        },
        {
          name: "Intel OneApi",
          color: "pink-text-gradient",
        },
      ],
      image: songsift ,
      source_code_link: "https://github.com/ElegantFalcon/SongSift",
    },
    {
      name: "Smart Contract",
      description:
        "This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Solidity",
          color: "green-text-gradient",
        },
        {
          name: "Hardhat",
          color: "pink-text-gradient",
        },
      ],
      image: solidity,
      source_code_link: "/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };