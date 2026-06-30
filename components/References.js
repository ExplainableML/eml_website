import { GitHub, FileText, Linkedin, Globe, Map, Phone, Mail, Image } from 'react-feather';


export default function References(props) {
    return (<>{!props.large && <>

        {props.pdf && <span className="flex flex-row justify-left items-center p-4 py-1"><FileText color="#5A005B" size={18} /><a className="text-purple-500 font-semibold text-xs px-2" href={props.pdf}>PDF</a></span>}

        {props.arxiv && <span className="flex flex-row justify-left items-center p-4 py-1">     <FileText color="#5A005B" size={18} /><a className="text-purple-500 font-semibold text-xs  pl-2" href={props.arxiv}>arXiv</a></span>}
        {props.github && <span className="flex flex-row justify-left items-center p-4 py-1">     <GitHub color="#5A005B" size={18} /><a className="text-purple-500 font-semibold text-xs pl-2" href={props.github}>Github</a></span>}
        {props.linkedin && <span className="flex flex-row justify-left items-center p-4 py-1">     <Linkedin color="#5A005B" size={18} /><a className="text-purple-500 font-semibold text-xs pl-2" href={props.linkedin}>Linkedin</a></span>}
        {props.website && <span className="flex flex-row justify-left items-center p-4 py-1">     <Globe color="#5A005B" size={18} /><a className="text-purple-500 font-semibold text-xs pl-2" href={props.website}>Website</a></span>}
        {props.address && <span className="flex flex-row justify-left items-center p-4 py-1">     <Map color="#5A005B" size={18} /><span className="text-purple-500 font-semibold text-xs pl-2">{props.address}</span></span>}
        {props.phone && <span className="flex flex-row justify-left items-center p-4 py-1">     <Phone color="#5A005B" size={18} /><span className="text-purple-500 font-semibold text-xs pl-2">{props.phone}</span></span>}
        {props.mail && <span className="flex flex-row justify-left items-center p-4 py-1">     <Mail color="#5A005B" size={18} /><span className="text-purple-500 font-semibold text-xs pl-2">{props.mail}</span></span>}
        {props.scholar && <a className="flex flex-row justify-left items-center p-4 py-1" href={props.scholar}>     <FileText color="#5A005B" size={18} /><span className="text-purple-500 font-semibold text-xs pl-2">Google Scholar</span></a>}
        {props.demo && <span className="flex flex-row justify-left items-center p-4 py-1">     <Globe color="#5A005B" size={16} /><a className="text-purple-500 font-semibold text-xs pl-2" href={props.demo}>Demo</a></span>}
        {props.poster && <span className="flex flex-row justify-left items-center p-4 py-1">     <Image color="#5A005B" size={18} /><a className="text-purple-500 font-semibold text-xs  pl-2" href={props.poster}>Poster</a></span>}

    </>}

        {props.large && <>

            {props.pdf && <span className="flex flex-row justify-left items-center p-4 py-1"><FileText color="#5A005B" size={22} /><a className="text-purple-500 font-semibold text-xs px-2" href={props.pdf}>PDF</a></span>}

            {props.arxiv && <span className="flex flex-row justify-left items-center p-4 py-1">     <FileText color="#5A005B" size={22} /><a className="text-purple-500 font-semibold text-md  pl-2" href={props.arxiv}>arXiv</a></span>}
            {props.github && <span className="flex flex-row justify-left items-center p-4 py-1">     <GitHub color="#5A005B" size={22} /><a className="text-purple-500 font-semibold text-md pl-2" href={props.github}>Github</a></span>}
            {props.linkedin && <span className="flex flex-row justify-left items-center p-4 py-1">     <Linkedin color="#5A005B" size={22} /><a className="text-purple-500 font-semibold text-md pl-2" href={props.linkedin}>Linkedin</a></span>}
            {props.website && <span className="flex flex-row justify-left items-center p-4 py-1">     <Globe color="#5A005B" size={22} /><a className="text-purple-500 font-semibold text-md pl-2" href={props.website}>Website</a></span>}
            {props.address && <span className="flex flex-row justify-left items-center p-4 py-1">     <Map color="#5A005B" size={22} /><span className="text-purple-500 font-semibold text-md pl-2">{props.address}</span></span>}
            {props.phone && <span className="flex flex-row justify-left items-center p-4 py-1">     <Phone color="#5A005B" size={22} /><span className="text-purple-500 font-semibold text-md pl-2">{props.phone}</span></span>}
            {props.mail && <span className="flex flex-row justify-left items-center p-4 py-1">     <Mail color="#5A005B" size={22} /><span className="text-purple-500 font-semibold text-md pl-2">{props.mail}</span></span>}
            {props.scholar && <a className="flex flex-row justify-left items-center p-4 py-1" href={props.scholar}>     <FileText color="#5A005B" size={22} /><span className="text-purple-500 font-semibold text-md pl-2">Google Scholar</span></a>}
            {props.demo && <span className="flex flex-row justify-left items-center p-4 py-1">     <Globe color="#5A005B" size={22} /><a className="text-purple-500 font-semibold text-md pl-2" href={props.demo}>Demo</a></span>}
            {props.poster && <span className="flex flex-row justify-left items-center p-4 py-1">     <Image color="#5A005B" size={22} /><a className="text-purple-500 font-semibold text-md  pl-2" href={props.poster}>Poster</a></span>}

        </>}

    </>)
}
