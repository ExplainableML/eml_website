import { GitHub, FileText, Linkedin, Globe, Map, Phone, Mail} from 'react-feather';


export default function References(props) {
    return(<>

            {props.pdf && <span class="flex flex-row justify-left items-center p-4 py-1"><FileText color="#5A005B" size={18}/><a class="text-purple-500 font-semibold text-sm px-2" href={props.pdf}>PDF</a></span>}


            {props.arxiv && <span class="flex flex-row justify-left items-center p-4 py-1">     <FileText color="#5A005B" size={18}/><a class="text-purple-500 font-semibold text-sm  pl-2" href={props.arxiv}>Arxiv</a></span>}
        {props.github && <span class="flex flex-row justify-left items-center p-4 py-1">     <GitHub color="#5A005B" size={18}/><a class="text-purple-500 font-semibold text-sm pl-2" href={props.github}>Github</a></span>}
        {props.linkedin && <span class="flex flex-row justify-left items-center p-4 py-1">     <Linkedin color="#5A005B" size={18}/><a class="text-purple-500 font-semibold text-sm pl-2" href={props.linkedin}>Linkedin</a></span>}
        {props.website && <span class="flex flex-row justify-left items-center p-4 py-1">     <Globe color="#5A005B" size={18}/><a class="text-purple-500 font-semibold text-sm pl-2" href={props.website}>Website</a></span>}
        {props.address && <span class="flex flex-row justify-left items-center p-4 py-1">     <Map color="#5A005B" size={18}/><span class="text-purple-500 font-semibold text-sm pl-2">{props.address}</span></span>}
        {props.phone && <span class="flex flex-row justify-left items-center p-4 py-1">     <Phone color="#5A005B" size={18}/><span class="text-purple-500 font-semibold text-sm pl-2">{props.phone}</span></span>}
        {props.mail && <span class="flex flex-row justify-left items-center p-4 py-1">     <Mail color="#5A005B" size={18}/><span class="text-purple-500 font-semibold text-sm pl-2">{props.mail}</span></span>}
        {props.scholar && <a class="flex flex-row justify-left items-center p-4 py-1" href={props.scholar}>     <FileText color="#5A005B" size={18}/><span class="text-purple-500 font-semibold text-sm pl-2">Google Scholar</span></a>}
        {props.demo && <span class="flex flex-row justify-left items-center p-4 py-1">     <Globe color="#5A005B" size={16}/><a class="text-purple-500 font-semibold text-xs pl-2" href={props.demo}>Demo</a></span>}



    </>)
}
