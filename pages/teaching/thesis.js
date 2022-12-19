import NavBar from "../../components/NavBar";
import ThesisCard from "../../components/ThesisCard";
import matter from 'gray-matter';
import YearHeadline from "../../components/YearHeadline";
export default function Thesis(props) {

    const thesis = props.thesisData.map(thesis => matter(thesis));
    let thesisList = thesis.map(thesis=>thesis.data);


    return (<>
        
        <NavBar otherLink={true}></NavBar>

        <div className="flex justify-center items-center ">

        
        <div className="container pt-32 bg-gray-50 mb-32 lg:px-20 flex flex-col items-center px-4  text-justify">

            <YearHeadline text="Thesis Topics"></YearHeadline>

            <p className="text-sm px-4 lg:px-32 mb-16">If you are a student at the University of Tübingen in a MSc degree program at the department of Computer Science, and are interested in working with us (e.g. for a master&#39;s thesis, research internship, research project, or as a HiWi student), please send an enquiry to shyamgopal.karthik at uni-tuebingen.de. Please include a current CV including a description of previous research/work experiences, a transcript of all previous courses and grades, and a brief statement of what research you want to do and why you want to join our group. A list of open topics is below— however, note that this list is not exhaustive, and we might have additional topics available.</p>
            <div className="grid grid-cols-1 overflow-y-scroll gap-8">


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
