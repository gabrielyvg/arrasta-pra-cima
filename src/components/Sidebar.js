import styles from '@/styles/Siderbar.module.css';
import Image from 'next/image';
import ToggleButton from '../components/ToggleButton'
import Link from 'next/link';
import { useState } from 'react';

const Toggle = () => {
    const [isToggled, setIsToggled] = useState(false);
  
    const handleToggle = () => {
      setIsToggled(!isToggled);
    };

    if (isToggled) {
        const toggle  = {
            width: "0px"
        }
    }
  
    return (
      <label>
        <input type="checkbox" checked={isToggled} onChange={handleToggle} />
        <span>{isToggled ? 'ON' : 'OFF'}</span>
      </label>
    );
};

export default function Sidebar(props) {
    return (
        <div className={`${styles.sidenav}`}>
            <div className={styles.boxTituloIcone}>
                <Image
                    src={props.curso.image}
                    alt="Icone"
                    className={styles.icone}
                    width={800}
                    height={600}
                    priority
                />
                <ToggleButton />
                <h1 className={styles.titulo}></h1>
            </div>
            <div key={props.curso.id}>
                {props.curso.aulas.map((aula) => (
                    <div key={aula.id}>
                        <Link className={styles.links} href={`./${props.curso.nome}/${aula.nome}`}>
                            {aula.nome}
                        </Link>
                    </div>
                ))}
            </div>
            <Toggle/>
        </div>
    );
}