import { useRouter } from 'next/router';
import styles from '@/styles/Aulas.module.css';
import VideoPlayer from '@/components/VideoPlayer';
import Sidebar from "@/components/Sidebar";
import mockObjs from '@/utils/mockObjs';
import { useState, useEffect } from 'react';

function encontrarAulaPorId(id) {
    var aulaSelecionada;
    mockObjs.cursos.map((curso) => (
        aulaSelecionada = curso.aulas.find(aula => aula.id === id)
    ));
    return aulaSelecionada;
}

export default function Aula() {
    const router = useRouter();
    const { id } = router.query;
    const aulaSelecionada = encontrarAulaPorId(parseInt(id, 10));
    const [atividades, setAtividades] = useState([]);

    useEffect(() => {

        if (!id) {
            // adicionar validação de quando um id ou nome não existe nas aulas para redirecionar a 404
            router.push('/404');
            return;
        }

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
            <Sidebar cursos={mockObjs.cursos} />
            <div className={styles.container}>
                <div className={styles.video}>
                    <VideoPlayer videoUrl={aulaSelecionada.videoUrl} />
                </div>
                <div className={styles.container}>
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
    );
}