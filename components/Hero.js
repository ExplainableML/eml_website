import Image from 'next/image'

export default function Hero () {
    return (<div class="container w-full  flex flex-col justify-center items-left px-8 pt-32 pb-32">
        <div class="grid grid-cols-1 lg:grid-cols-5">
            <div class="flex flex-col justify-center items-left col-span-2">
            <div class="font-bold text-xl lg:text-3xl">We move forward </div>
        <div class="font-bold text-xl lg:text-3xl text-purple-500">Explainable Machine Learning</div>
        <div class="font-bold text-xl lg:text-3xl text-purple-300">Zero-Shot Learning</div>
        <div class="font-bold text-xl lg:text-3xl text-purple-200">Multimodal Learning</div>
            </div>
           <div class="col-span-3">
           <Image src="/eml_unituebingen2.png" objectFit="contain" width="2000" height="1600"></Image>
           </div>
           
        </div> 
        
    </div>)
}