import TeamMemberElement from "./TeamMemberElement"

export default function TeamMemberGrid(props) {
    return (<div class="grid grid-cols-2 md:grid-cols-4 gap-16 w-full p-6 mb-16">
        {props.team.map((item)=>{return( <TeamMemberElement></TeamMemberElement>)})}
    </div>)
}