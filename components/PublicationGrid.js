import PublicationCard from "./PublicationCard"
import { ChevronRight} from 'react-feather';

export default function PublicationGrid(props) {

    console.log(props.publications)
    return (

        <div id="publications" class="flex flex-col items-center mb-16">


            <div class="grid grid-cols-1 md:grid-cols-3 md:px-16 gap-8 w-full p-6">
                {props.publications.sort(function(a,b) {return new Date(b.date)- new Date(a.date)}).map(publication => <PublicationCard publication={publication}>

                </PublicationCard>)}

            </div>
            {props.viewAll && <a href="/publications" class="text-xl flex flex-row items-center font-semibold px-4 py-2 text-purple-500">View all Publications <ChevronRight></ChevronRight> </a>}
        </div>



    )
}