import NavBar from "../../components/NavBar";
import ThesisCard from "../../components/ThesisCard";
import matter from 'gray-matter';
import YearHeadline from "../../components/YearHeadline";
export default function Thesis(props) {

    const thesis = props.thesisData.map(thesis => matter(thesis));
    let thesisList = thesis.map(thesis=>thesis.data);


    return (<>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
        <NavBar otherLink={true}></NavBar>

        <div class="flex justify-center items-center ">

        
        <div class="container pt-32 bg-gray-50 mb-32 lg:px-20 flex flex-col items-center px-4  text-justify">

            <YearHeadline text="Thesis Topics"></YearHeadline>

            <p class="text-sm px-4 lg:px-32 mb-16">If you are a student at the University of Tübingen in a MSc degree program at the department for Computer Science, and are interested in working with us (e.g. for a masters thesis, research internship, research project), please send an enquiry to eml-sekretariat at inf.uni-tuebingen.de. Please include a current CV including a description of previous research/work experiences, a transcript of all previous courses and grades, and a brief statement of what research you want to do and why you want to join our group. A list of open topics is below— however, note that this list is not exhaustive, and we might have additional topics available.</p>
            <div class="grid grid-cols-1 overflow-y-scroll gap-8">


                    {thesisList.map(item=>{

                        return (<ThesisCard topic={item} ></ThesisCard>)

                    })}

            </div>


        </div>
        </div>

    </>)
}

export const getStaticProps = async () => {
    const fs = require("fs");

    const thesis_files = fs.readdirSync(`${process.cwd()}/content/teaching/thesis/`, 'utf-8');
  
    const thesis = thesis_files.filter(fn => fn.endsWith(".md"));
  
    const thesisData = thesis.map(thesis => {
      const path = `${process.cwd()}/content/teaching/thesis/${thesis}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8"
      });
  
      return rawContent;
    });
  
  
  
  
    return {
      props: {
        thesisData,
      }
    }

}
