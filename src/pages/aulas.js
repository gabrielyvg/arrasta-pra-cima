import styles from '@/styles/Aulas.module.css'
import Sidebar from "@/components/Sidebar";
import mockObjs from '@/utils/mockObjs';
import VideoPlayer from '@/components/VideoPlayer';

export default function Aulas() {
    const video = "https://www.youtube.com/watch?v=q3uXXh1sHcI&ab_channel=BBCEarth"
    return (
        <>
            <Sidebar cursos={mockObjs.cursos} />
            <div className={styles.mainContent}>
                <VideoPlayer videoUrl={video} />
            </div>
        </>
    )
}