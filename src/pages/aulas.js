import Link from "next/link";
import styles from '@/styles/Aulas.module.css'
import Sidebar from "@/components/Sidebar";
import mockObjs from '@/utils/mockObjs';
import YouTubeVideo from '@/components/YoutubeVideo';

export default function Aulas() {
    const videoId = '1qw5ITr3k9E';
    return (
        <>
            <Sidebar cursos={mockObjs.cursos} />
            <div className={styles.mainContent}>
                <YouTubeVideo videoId={videoId} />
            </div>

        </>
    )
}