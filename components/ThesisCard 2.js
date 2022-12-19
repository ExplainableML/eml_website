export default function ThesisCard(props) {
    return (<div className="w-full relative overflow-hidden bg-white shadow-lg">
        <div class="w-full bg-white py-8 px-16">
            
            <div className="font-semibold text-xl">
            {props.topic.title}
            </div>


            <div className="font-normal text-sm mt-4">
            {props.topic.description}
            </div>

            <div className="font-semibold text-lg mt-4">
            Contact: <a href={props.topic.contactlink}>{props.topic.contactname}</a>
            </div>


            
            </div></div>)
}
