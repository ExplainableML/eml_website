import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function JobCard(props) {
    const [link, setLink] = useState("jobs")
    useEffect(()=>{
        if (props.type =="Jobs") {
            setLink("jobs");
        }
    },[])
    return (<a href={"/"+link}><div class=" overflow-hidden shadow-lg bg-white p-16 flex flex-col items-center justify-center">

       {props.type == "Jobs" && <div>
       <div class="pb-4">
           <Image src="/master_l.png" objectFit="cover" width="200" height="200"></Image>
           </div>
        <div class="font-bold text-center text-xl">Jobs</div>

        <div class="flex flex-row justify-center items-center pt-8">

<a class="text-purple-500 font-semibold" href="/jobs">View Details</a>
</div>
           </div>}


    </div></a>)
}
