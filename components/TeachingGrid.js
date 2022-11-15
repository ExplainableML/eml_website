import TeachingCard from "./TeachingCard"
export default function TeachingGrid (props) {
    return (
        <div id="teaching" class="container grid gap-8 grid-cols-1 md:grid-cols-2 lg:gap-8 p-6 mb-16">
{ /*           <TeachingCard type="Courses"></TeachingCard>*/}
            <TeachingCard type="Seminars"></TeachingCard>  
            <TeachingCard type ="Master Thesis"></TeachingCard>
            <TeachingCard type="Lectures"></TeachingCard>  
        </div>
    )
}
