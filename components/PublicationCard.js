import Image from "next/legacy/image";

export default function PublicationCard(props) {

    const myLoader = ({ src, width, quality }) => {
        return props.publication.img
    }

    return (
        <a href={"/publication/"+props.publication.filename} className="relative overflow-hidden bg-white shadow-lg">
            <div className="w-full bg-white h-256 flex justify-center items-center ">

            <Image width="500" height="256" objectFit="contain"  loader={myLoader} src="Zeynep-Akata-2.jpg" alt={props.name}/>

           
            </div>
            
                <div className="px-6 py-4 text-center max-w-128">
                    <div className="font-bold text-lg mb-2">{props.publication.title}</div>
                    <div className="font-semibold text-xs text-gray-600 mb-2">{props.publication.authors}</div>
                    <div className="font-normal  text-xs text-gray-500 mb-2">{props.publication.publisher} {props.publication.year}</div>

                </div>

                <div className=" flex flex-row justify-center items-center p-8">

                    <div href={"/publication/"+props.publication.filename} className=" absolute  bottom-8 text-purple-500 font-semibold">View Details</div>
                </div>


        </a>
            )
}
