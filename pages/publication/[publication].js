import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

import { useRouter } from 'next/router'
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import { useEffect } from 'react'

import gfm from "remark-gfm";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import rehypeRaw from 'rehype-raw'
import Headline from '../../components/Headline'
import Image from "next/legacy/image";
import References from '../../components/References'
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';


export default function Publication(props) {
  const router = useRouter()

  const myLoader = ({ src, width, quality }) => {
    return props.data.img
}




  useEffect(()=>{

  },[])

  const renderers = {
    //This custom renderer changes how images are rendered
    //we use it to constrain the max width of an image to its container
    image: ({
        alt,
        src,
        title,
    }) => (
        <img 
            alt={alt} 
            src={src} 
            title={title} 
            style={{ maxWidth: 200 }}  />
    ),
    math: ({ value }) => <div style={{ maxWidth: 200 }}><BlockMath>{value}</BlockMath></div>,
    inlineMath: ({ value }) => <div style={{ maxWidth: 200 }}><InlineMath>{value}</InlineMath></div>
};


    return (
        <div className="">
               


        <NavBar otherLink={true}></NavBar>

        <div className="pt-32 bg-gray-50 mb-32 lg:px-20 flex flex-col items-center px-4">



          <div className="mb-8 flex flex-col items-center">
          <div>
          <Image width="764" height="256" objectFit="contain"  loader={myLoader} src="Zeynep-Akata-2.jpg" alt={props.name}/>

          </div>

              <div className="lg:text-3xl font-bold text-center">
                {props.data.title}
              </div>
              <div className="bg-purple-500 h-2 w-8 mb-2 mt-2">


              </div>

              <div className="lg:text-md text-gray-800 text-center">{props.data.authors}</div>
              <div className="lg:text-md text-gray-400 text-center">{props.data.publisher}</div>
              <div className="lg:text-md text-gray-400 text-center">{props.data.year}</div>

              <div className="flex lg:flex-row justify-center items-center">
                <References {...props.data} large={true}></References>
              </div>
      <br></br>
              <div className="lg:text-xl  font-semibold">
                Abstract
              </div>

              <div className="w-90vw lg:w-800 text-justify break-words">
              <ReactMarkdown   remarkPlugins={[remarkMath, gfm]}
		rehypePlugins={[rehypeKatex, rehypeRaw]} skipHtml={false} escapeHtml={false} children={props.data.abstract} />
              </div>
            
              <div className=" w-90vw lg:w-800 bg-gray-50  flex flex-col items-center px-4" >

<div className="container text-justify" style={{marginRight:16, marginLeft:16, overflowX:"auto"}}>
<ReactMarkdown   remarkPlugins={[remarkMath, gfm]}
rehypePlugins={[rehypeKatex, rehypeRaw]} skipHtml={false} escapeHtml={false} children={props.content} />
</div>


</div>

          </div>
 
 

        </div>
<Footer></Footer>
        </div>
    )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(`${process.cwd()}/content/publications/`);

  const paths = files.map((filename) => ({
    params: {
      publication: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params: { publication } }) {
   const markdownWithMetadata = fs
    .readFileSync(path.join(`${process.cwd()}/content/publications/`, publication + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  return {
    props: {
      data:data,
      content: `${content}`,
    },
  };
}
