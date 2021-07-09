import TeamMemberElement from "./TeamMemberElement"

export default function TeamMemberGrid(props) {
    return (<div class="grid grid-cols-2 md:grid-cols-5 gap-8 p-6 mb-16">
        {props.team.map((person)=>{return( <TeamMemberElement person={person}></TeamMemberElement>)})}
    </div>)
}