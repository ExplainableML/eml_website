import TeachingCard from "./TeachingCard"
export default function TeachingGrid (props) {
    return (
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full p-6">
            <TeachingCard></TeachingCard>
            <TeachingCard></TeachingCard>  
            <TeachingCard></TeachingCard>

        </div>
    )
}