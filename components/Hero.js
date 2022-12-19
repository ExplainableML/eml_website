import Image from "next/legacy/image";

export default function Hero () {
    return (<div className="container w-full  flex flex-col justify-center items-left px-8 pt-32 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="flex flex-col justify-center items-left col-span-2">
            <div className="font-bold text-xl lg:text-3xl">We move forward </div>
        <div className="font-bold text-xl lg:text-3xl text-purple-500">Explainable Machine Learning</div>
        <div className="font-bold text-xl lg:text-3xl text-purple-300">Zero-Shot Learning</div>
        <div className="font-bold text-xl lg:text-3xl text-purple-200">Multimodal Learning</div>
            </div>
           <div className="col-span-3">
           <Image src="/eml_unituebingen3.png" objectFit="contain" width="2000" height="1600"></Image>
           </div>
           
        </div> 
        
    </div>)
}
