import Image from 'next/image'

export default function PublicationCard(props) {

    const myLoader = ({ src, width, quality }) => {
        return props.publication.img
    }

    return (
        <div class="overflow-hidden bg-white shadow-lg">
            <div class="w-full bg-white h-256 ">

            <Image width="500" height="256" objectFit="cover"  loader={myLoader} src="Zeynep-Akata-2.jpg" alt={props.name}/>

           
            </div>
            
                <div class="px-6 py-4 text-center max-w-128">
                    <div class="font-bold text-lg mb-2">{props.publication.title}</div>
                    <div class="font-semibold text-xs text-gray-600 mb-2">{props.publication.authors}</div>
                    <div class="font-normal  text-xs text-gray-500 mb-2">{props.publication.publisher}</div>
                    <div class="font-normal  text-xs text-gray-600 mb-2">{props.publication.year}</div>
                </div>

                <div class="flex flex-row justify-center items-center p-8">

                    <button class="text-purple-400 font-semibold">View Details</button>
                </div>


        </div>
            )
}