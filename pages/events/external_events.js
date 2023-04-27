import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import matter from 'gray-matter';
import ReactMarkdown from "react-markdown";


import gfm from "remark-gfm";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import rehypeRaw from 'rehype-raw'
import WorkshopMemberElement from "../../components/WorkshopMemberElement";
export default function Thesis(props) {


  const seminars = props.seminarsData.map((sem, content)=> matter(sem));

  
  let seminarsList = seminars.map(item => item.data);
  const [activeSeminar, setActiveSeminar] = useState(seminarsList[0].title);

  useEffect(()=>{
    setActiveSeminar(seminarsList[0].title)
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
  },[activeSeminar])

  return (<>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>
    <NavBar otherLink={true}></NavBar>

    <div class=" pt-32 bg-gray-50 mb-32 lg:px-20 flex flex-col items-center px-4">
      <div class="container grid grid-cols-1 lg:grid-cols-4 overflow-y-scroll w-full">
        <div class="col-span-1 ">
          <div>
          
            <div class="flex flex-col justify-center items-center">

              {seminarsList.map(item => {
                return (<>

                  {activeSeminar != item.title && <a class="w-full" onClick={()=>{setActiveSeminar(item.title)}}><div class="text-xs font-semibold hover:bg-purple-500 hover:text-white w-full text-center py-2 rounded-sm ">{item.title}</div></a>}
                  {activeSeminar == item.title && <a class="w-full" onClick={()=>{setActiveSeminar(item.title)}}><div class="text-xs font-semibold bg-purple-500 text-white w-full text-center py-2 rounded-sm ">{item.title}</div></a>}
					
                </>)
              })}

            </div>

          </div>
        </div>

        <div class="col-span-3">
			
          {seminars.filter((item)=>{return item.data.title == activeSeminar}).map(item=>{
            return <ReactMarkdown   remarkPlugins={[remarkMath, gfm]}
            rehypePlugins={[rehypeKatex, rehypeRaw]} skipHtml={false} escapeHtml={false} children={item.content} />
          })}
			<h1>Speakers</h1>
    <div id="speakers" className="border-b-2 grid container grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 mb-2 text-center">
             <WorkshopMemberElement name="Trevor Darrell" img="/workshop/darrell.png" link="https://people.eecs.berkeley.edu/~trevor/" institute="UC Berkeley"></WorkshopMemberElement>
             <WorkshopMemberElement name="Ruth Fong" img="/workshop/ruth.png" link="https://www.ruthfong.com/" institute="Princeton University"></WorkshopMemberElement>
             <WorkshopMemberElement name="Mara Graziani" img="/workshop/mara.png" link="https://maragraziani.com/" institute="IBM & HES-SO Valais"></WorkshopMemberElement>
             <WorkshopMemberElement name="Mauricio Reyes" img="/workshop/mauricio.png" link="https://mauricioreyes.me/" institute="Univ. of Bern"></WorkshopMemberElement>
             <WorkshopMemberElement name="Wojciech Samek" img="/workshop/samek.png" link="https://iphome.hhi.de/samek/" institute="Fraunhofer HHI & TU Berlin"></WorkshopMemberElement>
             <WorkshopMemberElement name="Bernt Schiele" img="/workshop/bernt.png" link="https://https://www.mpi-inf.mpg.de/departments/computer-vision-and-machine-learning/people/bernt-schiele/" institute="MPI for Informatics & Saarland University"></WorkshopMemberElement>
             <WorkshopMemberElement name="Ulrike von Luxburg" img="/workshop/ulrike.png" link="http://www.tml.cs.uni-tuebingen.de/team/luxburg/" institute="Univ. of Tübingen"></WorkshopMemberElement>

    </div>
    
    
    <h1>Organizers</h1>
                        <div id="organizers" className="border-b-2 text-center grid container grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 mb-2">
             <WorkshopMemberElement name="Zeynep Akata" img="/workshop/zeynep.png" link="https://www.eml-unitue.de/people/zeynep-akata" institute="Univ. of Tübingen"></WorkshopMemberElement>
             <WorkshopMemberElement name="Stephan Alaniz" img="/workshop/stephan.png" link="https://www.eml-unitue.de/people/stephan-alaniz" institute="Univ. of Tübingen"></WorkshopMemberElement>
             <WorkshopMemberElement name="Christian Baumgartner" img="/workshop/christian.png" link="https://baumgach.github.io/" institute="Univ. of Tübingen"></WorkshopMemberElement>
             <WorkshopMemberElement name="Almut Sophia Koepke" img="/workshop/placeholder.png" link="https://www.eml-unitue.de/people/almut-sophia-koepke" institute="Univ. of Tübingen"></WorkshopMemberElement>
             <WorkshopMemberElement name="Massimiliano Mancini" img="/workshop/massi.png" link="https://mancinimassimiliano.github.io/" institute="Univ. of Tübingen"></WorkshopMemberElement>
             <WorkshopMemberElement name="Seong Joon Oh" img="/workshop/joon.png" link="https://coallaoh.github.io/" institute="Univ. of Tübingen"></WorkshopMemberElement>
        </div>
        <table>
                    <tr>
                        <th width={"30%"} align={"left"}>Workshop funded by the <br/>"Cluster of Excellence - <br/>Machine Learning: New Perspectives for Science"</th>
                        <th><img src="/workshop/cluster.png"/></th>
                    </tr>
                </table>
    
        </div>

      </div>


    </div>

  </>)
}


export const getStaticProps = async () => {
  const fs = require("fs");

  const seminar_files = fs.readdirSync(`${process.cwd()}/content/events/external_events`, 'utf-8');

  const seminars = seminar_files.filter(fn => fn.endsWith(".md"));

  const seminarsData = seminars.map(seminar => {
    const path = `${process.cwd()}/content/events/external_events/${seminar}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8"
    });

    return rawContent;
  });




  return {
    props: {
      seminarsData,
    }
  }

}
