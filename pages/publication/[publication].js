import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import NavBar from "../../components/NavBar"
import { useRouter } from 'next/router'
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import { useEffect } from 'react'

export default function Publication(props) {
  const router = useRouter()
  const { publication } = router.query

  useEffect(()=>{
    console.log(props.content)
  },[])

    return (
        <>
        <NavBar></NavBar>
        <div class="pt-32 bg-gray-50 h-screen lg:px-20 flex flex-col items-center">
 
      <article>
        <ReactMarkdown escapeHtml={false} children={props.content} />
        <ReactMarkdown>*React-Markdown* is **Awesome**</ReactMarkdown>

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
      content: content,
    },
  };
}