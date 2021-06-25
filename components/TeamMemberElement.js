import Image from 'next/image'

export default function TeamMemberElement(props) {



    const myLoader = ({ src, width, quality }) => {
        return `https://i1.rgstatic.net/ii/profile.image/810205579337728-1570179471160_Q512/Zeynep-Akata-2.jpg`
    }

    return (
        <div class="flex flex-col items-center justify-center">
            <Image class="rounded-full mb-4" width="200" height="200" loader={myLoader} src="Zeynep-Akata-2.jpg" alt={props.name}>

            </Image>
            <a href="" class="mt-3 text-purple-200 text-xl font-bold">Zeynep Akata</a>
            <div class="text-lg font-semibold">Professor</div>

        </div>
    )
}