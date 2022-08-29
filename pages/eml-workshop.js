import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

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
import Headline from '../components/Headline'
import Image from "next/image"
import References from '../components/References'
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import WorkshopMemberElement from "../components/WorkshopMemberElement";


export default function Workshop(props) {
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
        <div class="">
                  <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>


        <NavBar otherLink={true}></NavBar>

        <div class="pt-32 bg-gray-50 mb-32 lg:px-20 flex flex-col items-center px-4">



          <div class="mb-8 flex flex-col items-center">


      <br></br>


              <div class="w-90vw lg:w-800 text-justify break-words">
              <ReactMarkdown   remarkPlugins={[remarkMath, gfm]}
		rehypePlugins={[rehypeKatex, rehypeRaw]} skipHtml={false} escapeHtml={false} children={props.data.abstract} />
              </div>
            
              <div class=" w-90vw lg:w-800 bg-gray-50  flex flex-col items-center px-4" >

<div class="container text-justify" style={{marginRight:16, marginLeft:16, overflowX:"auto"}}>
<ReactMarkdown   remarkPlugins={[remarkMath, gfm]}
rehypePlugins={[rehypeKatex, rehypeRaw]} skipHtml={false} escapeHtml={false} children={props.content} />

</div>

<h1>Speakers</h1>
    <div id="speakers" className="border-b-2 grid container grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 mb-16 text-center">
             <WorkshopMemberElement name="Trevor Darrell" img="/workshop/darrell.png" link="https://people.eecs.berkeley.edu/~trevor/" institute="UC Berkley"></WorkshopMemberElement>
    </div>
<h1>Organizers</h1>
                        <div id="organizers" className="border-b-2 text-center grid container grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 mb-16">
             <WorkshopMemberElement name="Zeynep Akata" img="/workshop/zeynep.png" link="https://www.eml-unitue.de/people/zeynep-akata" institute="Univ. of Tübingen"></WorkshopMemberElement>
             <WorkshopMemberElement name="Stephan Alaniz" img="/workshop/stephan.png" link="https://www.eml-unitue.de/people/stephan-alaniz" institute="Univ. of Tübingen"></WorkshopMemberElement>
             <WorkshopMemberElement name="Christian Baumgartner" img="/workshop/christian.png" link="https://baumgach.github.io/" institute="Univ. of Tübingen"></WorkshopMemberElement>
             <WorkshopMemberElement name="A. Sophia Koepke" img="/workshop/sophia.png" link="https://www.eml-unitue.de/people/almut-sophia-koepke" institute="Univ. of Tübingen"></WorkshopMemberElement>
             <WorkshopMemberElement name="Massimiliano Mancini" img="/workshop/massi.png" link="https://mancinimassimiliano.github.io/" institute="Univ. of Tübingen"></WorkshopMemberElement>
             <WorkshopMemberElement name="Seong Joon Oh" img="/workshop/joon.png" link="https://coallaoh.github.io/" institute="Univ. of Tübingen"></WorkshopMemberElement>
        </div>
                              <div>
                <table>
                    <tr>
                        <th width={"40%"} align={"left"}>Workshop funded by the <br/>"Cluster of Excellence - <br/>Machine Learning for Science"</th>
                        <th><img src="/workshop/cluster.png" width="500"/></th>
                        <th><img src="/workshop/uni-tue.png" width="500"/></th>
                    </tr>
                </table>
            </div>

</div>
          </div>
 
 

        </div>

<Footer></Footer>
        </div>
    )
}


export async function getStaticProps() {
   const markdownWithMetadata = fs
    .readFileSync(path.join(`${process.cwd()}/content/eml-workshop.md`))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  return {
    props: {
      data:data,
      content: `${content}`,
    },
  };
}
