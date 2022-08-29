import WorkshopCard from "./WorkshopCard"
export default function WorkshopGrid (props) {
    return (
        <div id="teaching" class="container grid gap-8 grid-cols-1 md:grid-cols-1 lg:gap-8 p-6 mb-16">
            <WorkshopCard type="XAI"></WorkshopCard>
        </div>
    )
}
