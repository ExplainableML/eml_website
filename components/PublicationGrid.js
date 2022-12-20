import PublicationCard from "./PublicationCard"
import { ChevronRight} from 'react-feather';

export default function PublicationGrid(props) {


    return (

        <div id="publications" className="container flex flex-col items-center mb-16">


            <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 w-full p-6">
                {props.publications.sort(function(a,b) {return new Date(b.date)- new Date(a.date)}).map(publication => <PublicationCard publication={publication} key={publication.filename}>

                </PublicationCard>)}

            </div>
            {props.viewAll && <a href="/publications" className="text-xl flex flex-row items-center font-semibold px-4 py-2 text-purple-500">View all Publications <ChevronRight></ChevronRight> </a>}
        </div>



    )
}
