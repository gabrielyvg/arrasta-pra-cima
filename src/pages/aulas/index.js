import Sidebar from "@/components/Sidebar";
import mockObjs from '@/utils/mockObjs';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function Aulas() {
    const router = useRouter();

    useEffect(() => {
        const currentPath = router.pathname;
        if (currentPath === '/aulas' && !router.query.id) {
            router.replace('/aulas/1');
        }
    }, [router.query.id]);

    return (
        <>
            <Sidebar cursos={mockObjs.cursos} />
        </>
    )
}