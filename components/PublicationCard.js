import Image from 'next/image'

export default function PublicationCard(props) {

    const myLoader = ({ src, width, quality }) => {
        return `https://picsum.photos/200/300`
    }

    return (
        <div class=" overflow-hidden shadow-lg">
            <div class="w-full bg-purple-300 h-256 flex flex-row justify-center align-middle p-4">

            <Image class="" height="200" width="300" loader={myLoader} src="Zeynep-Akata-2.jpg" alt={props.name}/>

            </div>
            
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <div class="font-semibold text-sm mb-2">Zeynep Akata</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>

                <div>

                    
                </div>


        </div>
            )
}