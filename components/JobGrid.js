import JobCard from "./JobCard"
export default function JobGrid (props) {
    return (
        <div id="jobs" class="container grid gap-8 grid-cols-1 md:grid-cols-3 lg:gap-8 p-6 mb-16">
            <JobCard type="Jobs"></JobCard>
        </div>
    )
}
