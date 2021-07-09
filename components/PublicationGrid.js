import PublicationCard from "./PublicationCard"
export default function PublicationGrid(props) {

    console.log(props.publications)
    return (

        <div class="flex flex-col items-center mb-16">


            <div class="grid grid-cols-1 md:grid-cols-3 md:px-16 gap-8 w-full p-6">
                {props.publications.slice(0,3).map(publication => <PublicationCard publication={publication}>

                </PublicationCard>)}

            </div>
            <a href="/publications" class="text-xl font-semibold px-4 py-2 text-purple-500">View all Publications ></a>
        </div>



    )
}