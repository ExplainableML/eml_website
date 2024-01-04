import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function EventCard(props) {
    const [link, setLink] = useState("thesis")
    useEffect(()=>{
        if (props.type=="Internal Events") {
            setLink("internal_events")
        }else if (props.type=="External Events") {
            setLink("external_events")
        }
    },[])
    return (<a href={"/events/"+link}><div class=" overflow-hidden shadow-lg bg-white p-16 flex flex-col items-center justify-center">
       

       {props.type == "External Events" && <div>
       <div class="pb-4">
           <center><Image src="/external.png" objectFit="cover" width="150" height="150"></Image></center>
           </div>
        <div class="font-bold text-center text-xl">Workshops</div>
        <div class="flex flex-row justify-center items-center pt-8">
       <a class="text-purple-500 font-semibold" href="/events/external_events">View Details</a>
</div> 
        
       </div>}


       {props.type == "Internal Events" && <div>
       <div class="pb-4">
           <center><Image src="/internal.png" objectFit="cover" width="150" height="150"></Image></center>
           </div>
        <div class="font-bold text-center text-xl">Social</div>

        <div class="flex flex-row justify-center items-center pt-8">

<a class="text-purple-500 font-semibold" href="/events/internal_events">View Details</a>
</div>

       </div>}

    </div></a>)
}
