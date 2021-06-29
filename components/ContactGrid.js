import ContactCard from "./ContactCard"
export default function ContactGrid(props) {
    return (

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full p-6">

                    <ContactCard></ContactCard>
                
            </div>
    )
}