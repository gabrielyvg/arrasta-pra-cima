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
        videoUrl: "https://www.youtube.com/watch?v=q3uXXh1sHcI&ab_channel=BBCEarth",
        aulas: [
            {
                id: 1,
                nome: "HTML",
                completa: false,
                atividades:
                [
                    {
                        id: 1,
                        nome: "Atividade 1",
                        completa: true
                    },
                    {
                        id: 2,
                        nome: "Atividade 2",
                        completa: false
                    }
                ]
            },
        ],

    },
];

export default { cursos, navLinks };