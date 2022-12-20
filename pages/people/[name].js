import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

import { useRouter } from 'next/router'
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import { useEffect, useState } from 'react'

import gfm from "remark-gfm";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import rehypeRaw from 'rehype-raw'
import Headline from '../../components/Headline'
import Image from "next/legacy/image";
import References from '../../components/References'
import TeamMemberSidebar from '../../components/TeamMemberSidebar'
import TeamMemberContent from '../../components/TeamMemberContent'

export default function TeamMember(props) {
  const router = useRouter()

  const [activeSection, setActiveSection] = useState("Profile")

  const myLoader = ({ src, width, quality }) => {
    return props.data.img
  }

  useEffect(() => {

  }, [])


  return (
    <>
    <div>
       
      <NavBar otherLink={true}></NavBar>

      <div className=" pt-32 bg-gray-50 mb-32 flex justify-center ">
        <div className="container grid grid-cols-1 lg:grid-cols-5 overflow-y-scroll text-justify">
          <TeamMemberSidebar activeSection={activeSection} setActiveSection={setActiveSection} person={props.data} content={props.content}></TeamMemberSidebar>
          <TeamMemberContent activeSection={activeSection} setActiveSection={setActiveSection} content={props.content}></TeamMemberContent>
        </div>
        


      </div>
      
    </div>
 
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(`${process.cwd()}/content/team/`);

  const paths = files.map((filename) => ({
    params: {
      name: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params: { name } }) {
  const markdownWithMetadata = fs.readFileSync(path.join(`${process.cwd()}/content/team/`, name + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  return {
    props: {
      data: data,
      content: `${content}`,
    },
  };
}
