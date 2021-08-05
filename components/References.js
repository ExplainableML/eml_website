export default function References(props) {
    return(<>
            {props.pdf && <span><a class="text-purple-500 font-semibold text-sm" href={props.pdf}>PDF</a></span>}

        {props.arxiv && <span><a class="text-purple-500 font-semibold text-sm p-2" href={props.arxiv}>Arxiv</a></span>}
        {props.github && <span><a class="text-purple-500 font-semibold text-sm p-2" href={props.github}>Github</a></span>}
        {props.linkedin && <span><a href={props.github}>Linkedin</a></span>}
    </>)
}