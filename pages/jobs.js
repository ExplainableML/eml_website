import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import matter from 'gray-matter';
import ReactMarkdown from "react-markdown";


import gfm from "remark-gfm";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import rehypeRaw from 'rehype-raw'

export default function Thesis(props) {


  const jobs = props.jobsData.map((sem, content)=> matter(sem));


  let jobsList = jobs.map(item => item.data);
  const [activeJob, setActiveJob] = useState(jobsList[0].title);

  useEffect(()=>{
    setActiveJob(jobsList[0].title)
    var els = document.getElementsByTagName("ul");
    for(var i = 0, all = els.length; i < all; i++){
         els[i].classList.add('list-disc');
         els[i].classList.add('pl-4');
     }
  },[])


  useEffect(()=>{
    var els = document.getElementsByTagName("ul");
    for(var i = 0, all = els.length; i < all; i++){
         els[i].classList.add('list-disc');
         els[i].classList.add('pl-4');
     }
  },[activeJob])

  return (<>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>
    <NavBar otherLink={true}></NavBar>

    <div class=" pt-32 bg-gray-50 mb-32 lg:px-20 flex flex-col items-center px-4">
      <div class="container grid grid-cols-1 lg:grid-cols-4 overflow-y-scroll w-full">
        <div class="col-span-1">
          <div>
            <div class="flex flex-col justify-center items-center">

              {jobsList.map(item => {
                return (<>

                  {activeJob != item.title && <a class="w-full" onClick={()=>{setActiveJob(item.title)}}><div class="text-xs font-semibold hover:bg-purple-500 hover:text-white w-full text-center py-2 rounded-sm ">{item.title}</div></a>}
                  {activeJob == item.title && <a class="w-full" onClick={()=>{setActiveJob(item.title)}}><div class="text-xs font-semibold bg-purple-500 text-white w-full text-center py-2 rounded-sm ">{item.title}</div></a>}

                </>)
              })}

            </div>

          </div>

        </div>
        <div class="col-span-3 px-2">

          {jobs.filter((item)=>{return item.data.title == activeJob}).map(item=>{
            return <ReactMarkdown   remarkPlugins={[remarkMath, gfm]}
            rehypePlugins={[rehypeKatex, rehypeRaw]} skipHtml={false} escapeHtml={false} children={item.content} />
          })}

        </div>

      </div>


    </div>

  </>)
}


export const getStaticProps = async () => {
  const fs = require("fs");

  const job_files = fs.readdirSync(`${process.cwd()}/content/jobs/`, 'utf-8');

  const jobs = job_files.filter(fn => fn.endsWith(".md"));

  const jobsData = jobs.map(job => {
    const path = `${process.cwd()}/content/jobs/${job}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8"
    });

    return rawContent;
  });




  return {
    props: {
      jobsData,
    }
  }

}