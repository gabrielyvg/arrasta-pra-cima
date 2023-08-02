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
    url: "/aulas/1",
    instrutor: "André",
  },
  {
    id: 2,
    image: image5,
    title: "Curso de Comunicação",
    subtitle: "Aprimore suas habilidades de comunicação",
    details:
      "Neste curso, você aprenderá técnicas para melhorar sua comunicação verbal e não verbal, desenvolvendo habilidades essenciais para sua vida pessoal e profissional.",
    url: "/aulas/2",
    instrutor: "Daisy",
  },
  {
    id: 3,
    image: image6,
    title: "Curso de Desenvolvimento de Apps",
    subtitle: "Crie aplicativos para dispositivos móveis",
    details:
      "Aprenda a desenvolver aplicativos para Android e iOS utilizando linguagens como Java, Kotlin, Swift e ferramentas como Android Studio e Xcode.",
    url: "/aulas/3",
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
    titulo: "Curso de Desenvolvimento Web",
    icon: "faFaceRelieved",
    image: image4,
    instrutor: "André",
    aulas: [
      {
        id: 1,
        nome: "HTML 5",
        completa: false,
        videoUrl: "https://www.youtube.com/watch?v=ok-plXXHlWw&ab_channel=Fireship",
        atividades:
          [
            {
              id: 1,
              nome: "Atividade HTML 1",
              descricao: "Descrição aqui",
              completa: true
            },
            {
              id: 2,
              nome: "Atividade HTML 2",
              descricao: "Descrição aqui",
              completa: false
            }
          ]
      },
      {
        id: 2,
        nome: "CSS",
        completa: false,
        videoUrl: "https://www.youtube.com/watch?v=OEV8gMkCHXQ&ab_channel=Fireship",
        atividades:
          [
            {
              id: 1,
              nome: "Atividade CSS 1",
              descricao: "Descrição aqui",
              completa: true
            },
            {
              id: 2,
              nome: "Atividade CSS 2",
              descricao: "Descrição aqui",
              completa: false
            }
          ]
      },
      {
        id: 3,
        nome: "JS",
        completa: false,
        videoUrl: "https://www.youtube.com/watch?v=DHjqpvDnNGE&ab_channel=Fireship",
        atividades:
          [
            {
              id: 1,
              nome: "Atividade JS 1",
              descricao: "Descrição aqui",
              completa: true
            },
            {
              id: 2,
              nome: "Atividade JS 2",
              descricao: "Descrição aqui",
              completa: false
            }
          ]
      },
    ],
  },
];

export default { cursos, navLinks, images, cards };
