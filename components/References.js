export default function References(props) {
    return(<>
            {props.pdf && <span><a class="text-purple-500 font-semibold text-sm p-8" href={props.pdf}>PDF</a></span>}

        {props.arxiv && <span><a class="text-purple-500 font-semibold text-sm p-8" href={props.arxiv}>Arxiv</a></span>}
        {props.github && <span><a class="text-purple-500 font-semibold text-sm p-8" href={props.github}>Github</a></span>}
        {props.linkedin && <span><a class="text-purple-500 font-semibold text-sm p-8" href={props.linkedin}>Linkedin</a></span>}
        {props.website && <span><a class="text-purple-500 font-semibold text-sm p-8" href={props.website}>Website</a></span>}
        {props.googlescholar && <span><a class="text-purple-500 font-semibold text-sm p-8" href={props.googlescholar}>Google Scholar</a></span>}


    </>)
}