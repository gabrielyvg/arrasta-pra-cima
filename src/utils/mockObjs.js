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
        aulas: [
            {
                id: 1,
                nome: "HTML",
                completa: false,
                videoUrl: "https://www.youtube.com/watch?v=q3uXXh1sHcI&ab_channel=BBCEarth",
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
                videoUrl: "https://www.youtube.com/watch?v=BF2TZq-ntRQ&ab_channel=NationalGeographic",
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
        ],
    },
];

export default { cursos, navLinks };