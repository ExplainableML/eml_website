import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function TeachingCard(props) {
    const [link, setLink] = useState("thesis")
    useEffect(()=>{
        if (props.type =="Master Thesis") {
            setLink("thesis");
        } else if (props.type=="Seminars") {
            setLink("seminars")
        } else {
            setLink("courses")
        }
    },[])
    return (<a href={"/teaching/"+link}><div class=" overflow-hidden shadow-lg bg-white p-16 flex flex-col items-center justify-center">
       

       {props.type == "Courses" && <div>
       <div class="pb-4">
           <Image src="/courses.png" objectFit="cover" width="200" height="200"></Image>
           </div>
        <div class="font-bold text-center text-xl">Courses</div>
       </div>}


       {props.type == "Seminars" && <div>
       <div class="pb-4">
           <Image src="/seminars_l.png" objectFit="cover" width="200" height="200"></Image>
           </div>
        <div class="font-bold text-center text-xl">Seminars</div>

        <div class="flex flex-row justify-center items-center pt-8">

<a class="text-purple-500 font-semibold" href="/teaching/seminars">View Details</a>
</div>

       </div>}

       {props.type == "Master Thesis" && <div>
       <div class="pb-4">
           <Image src="/master_l.png" objectFit="cover" width="200" height="200"></Image>
           </div>
        <div class="font-bold text-center text-xl">Master&#39;s Thesis</div>

        <div class="flex flex-row justify-center items-center pt-8">

<a class="text-purple-500 font-semibold" href="/teaching/thesis">View Details</a>
</div>


       </div>}


  


    </div></a>)
}
