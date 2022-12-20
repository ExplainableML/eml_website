import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function WorkshopCard(props) {
    const [link, setLink] = useState("XAI")
    useEffect(()=>{
        if (props.type =="XAI") {
            setLink("eml-workshop");

        }else {
            setLink("courses")
        }
    },[])
    return (<a href={"/"+link}><div class=" overflow-hidden shadow-lg bg-cover p-16 flex flex-col items-center justify-center"
    style={{backgroundImage: "url('https://c.pxhere.com/photos/b8/4b/autumn_t_bingen_nature_fall_leaves_southern_germany_october_colorful_fall_color-845134.jpg!d')",
        height: "350px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"}}>

        {props.type == "XAI" && <div>
           <div className="font-bold text-center text-xl"     style={{ height: "100px", width: "800px", display: "table-cell", verticalAlign:"middle"}}>
               <p style={{  fontSize: "24pt", color:"white"}}>Explainability in Machine Learning</p>

<p style={{  fontSize: "12pt", color:"white"}}> March 28-29th, 2023  |  Alte Aula, Tübingen, Germany</p></div>

           <div className="flex flex-row justify-center items-center pt-8">
               {/*<a class="text-purple-500 font-semibold" href="/eml-workshop">View Details</a>*/}
               <a class="text-white font-semibold" href="/eml-workshop">View Details</a>

</div>

       </div>}


    </div></a>)
}
