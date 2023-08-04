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
    url: "/cursos/web/CSS",
    instrutor: "André",
  },
  {
    id: 2,
    image: image5,
    title: "Curso de Comunicação",
    subtitle: "Aprimore suas habilidades de comunicação",
    details:
      "Neste curso, você aprenderá técnicas para melhorar sua comunicação verbal e não verbal, desenvolvendo habilidades essenciais para sua vida pessoal e profissional.",
    url: "/cursos/comunicacao/Socializar",
    instrutor: "Daisy",
  },
  {
    id: 3,
    image: image6,
    title: "Curso de Desenvolvimento de Apps",
    subtitle: "Crie aplicativos para dispositivos móveis",
    details:
      "Aprenda a desenvolver aplicativos para Android e iOS utilizando linguagens como Java, Kotlin, Swift e ferramentas como Android Studio e Xcode.",
    url: "/cursos/app/IOS",
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
    nome: "web",
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
  {
    id: 2,
    nome: "comunicacao",
    titulo: "Curso de Comunicação",
    icon: "faFaceRelieved",
    image: image5,
    instrutor: "Daisy",
    aulas: [
      {
        id: 1,
        nome: "Socializar",
        completa: false,
        videoUrl: "https://www.youtube.com/watch?v=q3uXXh1sHcI&t=2s&ab_channel=BBCEarth",
        atividades:
          [
            {
              id: 1,
              nome: "Atividade socializar 1",
              descricao: "Descrição aqui",
              completa: true
            },
            {
              id: 2,
              nome: "Atividade socializar 2",
              descricao: "Descrição aqui",
              completa: false
            }
          ]
      },
      {
        id: 2,
        nome: "Debate",
        completa: false,
        videoUrl: "https://www.youtube.com/watch?v=tDOM-U7uStM&ab_channel=TowerBeachClub",
        atividades:
          [
            {
              id: 1,
              nome: "Atividade debate 1",
              descricao: "Descrição aqui",
              completa: true
            },
            {
              id: 2,
              nome: "Atividade debate 2",
              descricao: "Descrição aqui",
              completa: false
            }
          ]
      },
      {
        id: 3,
        nome: "Apresentação",
        completa: false,
        videoUrl: "https://www.youtube.com/watch?v=-vBUxmWeoc0&ab_channel=TheDodo",
        atividades:
          [
            {
              id: 1,
              nome: "Atividade aprensentação 1",
              descricao: "Descrição aqui",
              completa: true
            },
            {
              id: 2,
              nome: "Atividade aprensentação 2",
              descricao: "Descrição aqui",
              completa: false
            }
          ]
      },
    ],
  },
  {
    id: 2,
    nome: "app",
    titulo: "Curso de Desenvolvimento de Apps",
    icon: "faFaceRelieved",
    image: image6,
    instrutor: "Pablios",
    aulas: [
      {
        id: 1,
        nome: "IOS",
        completa: false,
        videoUrl: "https://www.youtube.com/watch?v=vYyUb_MI7to&ab_channel=GoPro",
        atividades:
          [
            {
              id: 1,
              nome: "Atividade IOS 1",
              descricao: "Descrição aqui",
              completa: true
            },
            {
              id: 2,
              nome: "Atividade IOS 2",
              descricao: "Descrição aqui",
              completa: false
            }
          ]
      },
      {
        id: 2,
        nome: "Ionic",
        completa: false,
        videoUrl: "https://www.youtube.com/watch?v=iLLXfPwrtj0&ab_channel=AlanMontgomery",
        atividades:
          [
            {
              id: 1,
              nome: "Atividade Ionic 1",
              descricao: "Descrição aqui",
              completa: true
            },
            {
              id: 2,
              nome: "Atividade Ionic 2",
              descricao: "Descrição aqui",
              completa: false
            }
          ]
      },
      {
        id: 3,
        nome: "OnePiece",
        completa: false,
        videoUrl: "https://www.youtube.com/watch?v=7JBkHavpRcA&ab_channel=SomeMoeGaming",
        atividades:
          [
            {
              id: 1,
              nome: "Atividade OnePiece 1",
              descricao: "Descrição aqui",
              completa: true
            },
            {
              id: 2,
              nome: "Atividade OnePiece 2",
              descricao: "Descrição aqui",
              completa: false
            }
          ]
      },
    ],
  },
];

export default { cursos, navLinks, images, cards };
