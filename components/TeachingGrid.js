import TeachingCard from "./TeachingCard"
export default function TeachingGrid (props) {
    return (
        <div id="teaching" class="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
            <TeachingCard type="Courses"></TeachingCard>
            <TeachingCard type="Seminars"></TeachingCard>  
            <TeachingCard type ="Master Thesis"></TeachingCard>

        </div>
    )
}