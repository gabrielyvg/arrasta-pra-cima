import styles from '@/styles/Siderbar.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
// import { fas } from '@fortawesome/free-solid-svg-icons';
import ToggleButton from '../components/ToggleButton'

export default function Sidebar(props) {
    if (!Array.isArray(props.cursos)) {
        return <p>Cursos não disponíveis.</p>;
    }

    const concluidaIcone = {
        color: 'rgb(0 165 0)'
    };

    const naoConcluidaIcone = {
        color: '#970808'
    };
    
    return (
        <div className={styles.sidenav}>
            <ToggleButton />
            {props.cursos.map((curso) => (
                <div key={curso.id}>
                    <div className={styles.boxTituloIcone}>
                        <Image
                            src="/icone.jpg"
                            alt="Icone"
                            className={styles.icone}
                            width={800}
                            height={600}
                            priority
                        />
                        <h1 className={`${styles.titulo} text-4xl sm:text-6xl md:text-9xl text-center text-gray-800`}>{curso.titulo}</h1>
                    </div>
                    {curso.aulas.map((aula) => (
                        <div key={aula.id}>
                            <a className={styles.links}>
                                {aula.nome}{' '}
                                {aula.completa ? (
                                    <FontAwesomeIcon icon={faCheck} size="1x" style={concluidaIcone} />
                                ) : (
                                    <FontAwesomeIcon icon={faXmark} size="1x" style={naoConcluidaIcone} />
                                )}
                            </a>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}