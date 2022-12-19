import Image from "next/legacy/image";
import { useEffect, useState } from 'react'


export default function TeachingCard(props) {
    const [link, setLink] = useState("thesis")
    useEffect(()=>{
        if (props.type =="Master Thesis") {
            setLink("thesis");
        } else if (props.type=="Seminars") {
            setLink("seminars")
        }else if (props.type=="Lectures") {
            setLink("lectures")
        }
    },[])
    return (<a href={"/teaching/"+link}><div className=" overflow-hidden shadow-lg bg-white p-16 flex flex-col items-center justify-center">
       

       {props.type == "Lectures" && <div>
       <div className="pb-4">
           <Image src="/seminars_l.png" objectFit="cover" width="200" height="200"></Image>
           </div>
        <div className="font-bold text-center text-xl">Lectures</div>
        <div className="flex flex-row justify-center items-center pt-8">
       <div className="text-purple-500 font-semibold" href="/teaching/lectures">View Details</div>
</div> 
        
       </div>}


       {props.type == "Seminars" && <div>
       <div className="pb-4">
           <Image src="/seminars_l.png" objectFit="cover" width="200" height="200"></Image>
           </div>
        <div className="font-bold text-center text-xl">Seminars</div>

        <div className="flex flex-row justify-center items-center pt-8">

<div className="text-purple-500 font-semibold" href="/teaching/seminars">View Details</div>
</div>

       </div>}

       {props.type == "Master Thesis" && <div>
       <div className="pb-4">
           <Image src="/master_l.png" objectFit="cover" width="200" height="200"></Image>
           </div>
        <div className="font-bold text-center text-xl">Master&#39;s Thesis</div>

        <div className="flex flex-row justify-center items-center pt-8">

<div className="text-purple-500 font-semibold" href="/teaching/thesis">View Details</div>
</div>
           </div>}


    </div></a>)
}
