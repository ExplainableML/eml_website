import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import rehypeRaw from 'rehype-raw'
import { useEffect } from "react";

export default function TeamMemberContent(props) {

    useEffect(()=>{
        var els = document.getElementsByTagName("ul");
        for(var i = 0, all = els.length; i < all; i++){   
             els[i].classList.add('list-disc');
         }
    }, [])
    return (<div class="col-span-1 lg:col-span-4 min-h-screen lg:pl-72 mb-16">
             <ReactMarkdown   remarkPlugins={[remarkMath, gfm]}
    rehypePlugins={[rehypeKatex, rehypeRaw]} skipHtml={false} escapeHtml={false} children={props.content} />
    </div>)
}