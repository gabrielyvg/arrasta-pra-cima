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
];

export default { cursos, navLinks };