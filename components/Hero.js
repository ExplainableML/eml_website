import Image from 'next/image'

export default function Hero () {
    return (<div style={{backgroundImage: "url(/eml.png)"}} class="container w-full  flex flex-col justify-center items-left px-8 pt-32 pb-32">
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="flex flex-col justify-center items-left">
            <div class="font-bold text-xl lg:text-4xl">We move forward </div>
        <div class="font-bold text-xl lg:text-4xl text-purple-500">Explainable Machine Learning</div>
        <div class="font-bold text-xl lg:text-4xl text-purple-300">Zero Shot Learning</div>
        <div class="font-bold text-xl lg:text-4xl text-purple-200">Multimodal Learning</div>
            </div>
           <div >
           <Image src="/eml.png" objectFit="cover" width="2000" height="2000"></Image>
           </div>
           
        </div> 
        
    </div>)
}