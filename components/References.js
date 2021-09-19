import { GitHub, FileText, Linkedin, Globe} from 'react-feather';


export default function References(props) {
    return(<>

            {props.pdf && <span><a class="text-purple-500 font-semibold text-sm p-8" href={props.pdf}>PDF</a></span>}

            {props.arxiv && <span class="flex flex-row justify-center items-center p-4 py-1">     <FileText color="#5A005B" size={16}/><a class="text-purple-500 font-semibold text-sm pl-2" href={props.arxiv}>Arxiv</a></span>}
        {props.github && <span class="flex flex-row justify-center items-center p-4 py-1">     <GitHub color="#5A005B" size={16}/><a class="text-purple-500 font-semibold text-sm pl-2" href={props.github}>Github</a></span>}
        {props.linkedin && <span class="flex flex-row justify-center items-center p-4 py-1">     <Linkedin color="#5A005B" size={16}/><a class="text-purple-500 font-semibold text-sm pl-2" href={props.linkedin}>Linkedin</a></span>}
        {props.website && <span class="flex flex-row justify-center items-center p-4 py-1">     <Globe color="#5A005B" size={16}/><a class="text-purple-500 font-semibold text-sm pl-2" href={props.website}>Website</a></span>}
        {props.googlescholar && <span><a class="text-purple-500 font-semibold text-sm p-8" href={props.googlescholar}>Google Scholar</a></span>}


    </>)
}