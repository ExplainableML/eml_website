import EventCard from "./EventCard"
export default function EventGrid (props) {
    return (
        <div id="teaching" class="container grid gap-8 grid-cols-1 md:grid-cols-2 lg:gap-8 p-6 mb-16">
{ /*           <TeachingCard type="Courses"></TeachingCard>*/}
            <EventCard type="External Events"></EventCard>  
            <EventCard type="Internal Events"></EventCard>  
        </div>
    )
}