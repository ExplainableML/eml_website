import NavBar from "../../components/NavBar";
import ThesisCard from "../../components/ThesisCard";
import matter from 'gray-matter';

export default function Thesis(props) {

    const thesis = props.thesisData.map(thesis => matter(thesis));
    let thesisList = thesis.map(thesis=>thesis.data);


    return (<>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
        <NavBar></NavBar>

        <div class="pt-32 bg-gray-50 mb-32 lg:px-20 flex flex-col items-center px-4">
            <div class="grid grid-cols-1 overflow-y-scroll">


                    {thesisList.map(item=>{

                        return (<ThesisCard topic={item} ></ThesisCard>)

                    })}

            </div>


        </div>

    </>)
}

export const getStaticProps = async () => {
    const fs = require("fs");

    const thesis_files = fs.readdirSync(`${process.cwd()}/content/teaching/thesis/`, 'utf-8');
  
    const thesis = thesis_files.filter(fn => fn.endsWith(".md"));
  
    const thesisData = thesis.map(team => {
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