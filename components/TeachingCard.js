export default function TeachingCard(props) {
    return (<div class=" overflow-hidden shadow-lg bg-white p-16 flex flex-col items-center justify-center mb-16">
       

       {props.type == "Courses" && <div>
        Courses
       </div>}


       {props.type == "Seminars" && <div>
            Seminars
       </div>}

       {props.type == "Master Thesis" && <div>
            Master Thesis
     </div>}


        <div class="flex flex-row justify-center items-center ">

            <button class="text-purple-500 font-semibold">View Details</button>
        </div>


    </div>)
}