import Sidebar from "@/components/Sidebar";
import mockObjs from '@/utils/mockObjs';
import { useRouter } from 'next/router';
import styles from '@/styles/Aulas.module.css';
import VideoPlayer from '@/components/VideoPlayer';
import { useState, useEffect } from 'react';

function encontrarAulaPorNome(nome) {
    var aulaSelecionada;
    mockObjs.cursos.map((curso) => (
        aulaSelecionada = curso.aulas.find(aula => aula.nome === nome)
    ));
    return aulaSelecionada;
}

export default function Cursos() {
    const router = useRouter();
    let curso = router.query.slug;
    // const { id } = router.query;
    const aulaSelecionada = encontrarAulaPorNome(curso?.[1]);
    const [atividades, setAtividades] = useState([]);

    useEffect(() => {
        // if (curso?.[0] && !curso?.[1]) {
        //     // adicionar validação de quando um id ou nome não existe nas aulas para redirecionar a 404
        //     router.push('/');
        //     return;
        // }


        if (aulaSelecionada) {
            setAtividades(aulaSelecionada.atividades.map(atividade => ({
                ...atividade,
                isChecked: false,
            })));
        }
    }, [aulaSelecionada]);

    const handleCheckboxChange = (atividadeId) => {
        setAtividades((prevAtividades) =>
            prevAtividades.map((atividade) =>
                atividade.id === atividadeId
                    ? { ...atividade, isChecked: !atividade.isChecked }
                    : atividade
            )
        );
    };

    if (!aulaSelecionada) {
        return <p>Aula não encontrada.</p>;
    }

    return (
        <>
        {mockObjs.cursos.map((curso) => (
            <Sidebar curso={curso} />
        ))}
        <div className={styles.container}>
            <div className={styles.video}>
                <VideoPlayer videoUrl={aulaSelecionada.videoUrl} />
            </div>
            <div className={styles.center}>
                <h1 className={styles.titulo}>Atividades da aula {aulaSelecionada.nome}:</h1>
                <ul>
                    {atividades.map((atividade) => (
                        <li key={atividade.id}>
                            <input
                                type="checkbox"
                                id={`checkboxAtividade_${atividade.id}`}
                                checked={atividade.isChecked}
                                onChange={() => handleCheckboxChange(atividade.id)}
                                value={atividade.id}
                                className={styles.label}
                            />
                            <label htmlFor={`checkboxAtividade_${atividade.id}`}>
                                {atividade.nome}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
    )
}