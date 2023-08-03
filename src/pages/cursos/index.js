import Sidebar from "@/components/Sidebar";
import mockObjs from '@/utils/mockObjs';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function Cursos() {


    return (
        <>
            {mockObjs.cursos.map((curso) => (
                <Sidebar curso={curso} />
            ))}
        </>
    )
}