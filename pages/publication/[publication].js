import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import NavBar from "../../components/NavBar"
import { useRouter } from 'next/router'
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import { useEffect } from 'react'

import gfm from "remark-gfm";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you


export default function Publication(props) {
  const router = useRouter()
  const { publication } = router.query

  const {rehypeRaw} = require("rehype-raw")

  useEffect(()=>{
    console.log(props.content)
  },[])

    return (
        <>
        <NavBar></NavBar>
        <div class="pt-32 bg-gray-50 h-screen lg:px-20 flex flex-col items-left">
 
      <article>
        <ReactMarkdown     remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeKatex, rehypeRaw]} skipHtml={false} escapeHtml={false} children={props.content} />

      </article>

        </div>
        </>
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