import TeamMemberElement from "./TeamMemberElement"

export default function TeamMemberGrid(props) {
    return (<div id="team" className="grid container grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-6 mb-16">
        {props.team.sort((a,b)=>{return a.order - b.order}).map((person)=>{return( <TeamMemberElement person={person} key={person.link}></TeamMemberElement>)})}
    </div>)
}
