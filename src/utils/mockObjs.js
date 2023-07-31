import image1 from "/public/curso_1.jpeg";
import image2 from "/public/curso_2.jpeg";
import image3 from "/public/curso_3.jpeg";
import image4 from "/public/andre.jpeg";
import image5 from "/public/daisy.jpeg";
import image6 from "/public/pablios.png";

const images = [
  {
    id: 1,
    image: image1,
    title: "Desenvolvimento Web",
  },
  {
    id: 2,
    image: image2,
    title: "Comunicação",
  },
  {
    id: 3,
    image: image3,
    title: "Desenvolvimento App",
  },
];

const cards = [
  {
    id: 1,
    image: image4,
    title: "Curso de Desenvolvimento Web",
    subtitle: "Aprenda a criar sites e aplicativos web",
    details:
      "Este curso aborda as principais tecnologias e ferramentas para desenvolvimento web, incluindo HTML, CSS, JavaScript, React, NextJS, entre outras.",
    url: "/aulas/web",
    instrutor: "André",
  },
  {
    id: 2,
    image: image5,
    title: "Curso de Comunicação",
    subtitle: "Aprimore suas habilidades de comunicação",
    details:
      "Neste curso, você aprenderá técnicas para melhorar sua comunicação verbal e não verbal, desenvolvendo habilidades essenciais para sua vida pessoal e profissional.",
    url: "/aulas/comunicao",
    instrutor: "Daisy",
  },
  {
    id: 3,
    image: image6,
    title: "Curso de Desenvolvimento de Apps",
    subtitle: "Crie aplicativos para dispositivos móveis",
    details:
      "Aprenda a desenvolver aplicativos para Android e iOS utilizando linguagens como Java, Kotlin, Swift e ferramentas como Android Studio e Xcode.",
    url: "/aulas/app",
    instrutor: "Pablios",
  },
];
  

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "aulas",
    title: "Aulas",
  },
  // {
  //     id: "contato",
  //     title: "Contato",
  // },
];

const cursos = [
  {
    id: 1,
    titulo: "HTML 5",
    icon: "faFaceRelieved",
    professor: "Pessoa teste",
    atividades: [
      {
        id: 1,
        nome: "Atividade 1",
        completa: true,
      },
      {
        id: 2,
        nome: "Atividade 2",
        completa: false,
      },
    ],
  },
];

export default { cursos, navLinks, images, cards };
