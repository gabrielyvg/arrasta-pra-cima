import Image from 'next/image'
import styles from '../styles/styles.module.css'

export default function Page404(){
    return(
        <div>
           <Image
              src="/image/404.jpg"
              alt="404"
              className=""
              width={800}
              height={600}
              priority
            />
        </div>
    )
}