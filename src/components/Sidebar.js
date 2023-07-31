import styles from '@/styles/Siderbar.module.css';
import Image from 'next/image';
import ToggleButton from '../components/ToggleButton'
import Link from 'next/link';

export default function Sidebar(props) {
    if (!Array.isArray(props.cursos)) {
        return <p>Cursos não disponíveis.</p>;
    }

    return (
        <div className={styles.sidenav}>
            <div className={styles.boxTituloIcone}>
                <Image
                    src="/icone.jpg"
                    alt="Icone"
                    className={styles.icone}
                    width={800}
                    height={600}
                    priority
                />
                <ToggleButton />
                <h1 className={styles.titulo}></h1>
            </div>
            {props.cursos.map((curso) => (
                <div key={curso.id}>
                    {curso.aulas.map((aula) => (
                        <div key={aula.id}>
                            <Link className={styles.links} href={`./${aula.id}`}>
                                {aula.nome}
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}