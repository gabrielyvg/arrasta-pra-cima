import Sidebar from "@/components/Sidebar";
import mockObjs from '@/utils/mockObjs';
export default function Cursos() {


    return (
        <>
            {mockObjs.cursos.map((curso) => (
                <Sidebar curso={curso} />
            ))}
        </>
    )
}