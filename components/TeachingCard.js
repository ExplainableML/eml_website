import Image from 'next/image'


export default function TeachingCard(props) {
    return (<div class=" overflow-hidden shadow-lg bg-white p-16 flex flex-col items-center justify-center">
       

       {props.type == "Courses" && <div>
       <div class="pb-4">
           <Image src="/courses.png" objectFit="cover" width="200" height="200"></Image>
           </div>
        <div class="font-bold text-center text-xl">Courses</div>
       </div>}


       {props.type == "Seminars" && <div>
       <div class="pb-4">
           <Image src="/seminars.png" objectFit="cover" width="200" height="200"></Image>
           </div>
        <div class="font-bold text-center text-xl">Seminars</div>
       </div>}

       {props.type == "Master Thesis" && <div>
       <div class="pb-4">
           <Image src="/master.png" objectFit="cover" width="200" height="200"></Image>
           </div>
        <div class="font-bold text-center text-xl">Master Thesis</div>
       </div>}


        <div class="flex flex-row justify-center items-center pt-8">

            <button class="text-purple-500 font-semibold">View Details</button>
        </div>


    </div>)
}