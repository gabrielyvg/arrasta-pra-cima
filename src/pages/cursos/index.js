import Sidebar from "@/components/Sidebar";
import mockObjs from '@/utils/mockObjs';
export default function Cursos() {


    return (
        <>
            {mockObjs.cursos.map((curso) => (
                <div key={curso.id}>
                    <Sidebar curso={curso} />
                </div>
            ))}
        </>
    )
}