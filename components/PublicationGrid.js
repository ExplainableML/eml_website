import PublicationCard from "./PublicationCard"
export default function PublicationGrid (props) {
    return (

        <div class="flex flex-col items-center mb-16">

  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full p-6">
            <PublicationCard>

            </PublicationCard>


            <PublicationCard>
                
            </PublicationCard>



            <PublicationCard>
                
            </PublicationCard>



        </div>
        <button class="text-xl font-semibold text-purple-400">View all Publications ></button>
        </div>

        

    )
}