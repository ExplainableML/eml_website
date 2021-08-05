import { useEffect } from "react";
import NavBar from "../components/NavBar";
import YearHeadline from "../components/YearHeadline"
import matter from 'gray-matter';
import PublicationGrid from "../components/PublicationGrid";


export default function Publications(props) {

  const publications = props.publicationsData.map(pub => matter(pub));
  let publicationsList = publications.map(item => item.data);

  useEffect(()=>{
    console.log(publications)
  },[])
  return (
    <div class="bg-gray-50">
      <NavBar></NavBar>
      <div className="pt-24 flex flex-col items-center justify-top min-h-screen py-2">
          <YearHeadline text="2021"></YearHeadline>
          <PublicationGrid viewAll={false} publications={publicationsList.filter((pub)=>{return pub.year==2021})}></PublicationGrid>
          <YearHeadline text="2020"></YearHeadline>
          <PublicationGrid viewAll={false} publications={publicationsList.filter((pub)=>{return pub.year==2020})}></PublicationGrid>

          <YearHeadline text="2019"></YearHeadline>
      </div>
    </div>
  );
}


export const getStaticProps = async () => {
  const fs = require("fs");

  const pub_files = fs.readdirSync(`${process.cwd()}/content/publications/`, 'utf-8');

  const publications = pub_files.filter(fn => fn.endsWith(".md"));

  const publicationsData = publications.map(publication => {
    const path = `${process.cwd()}/content/publications/${publication}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8"
    });

    return rawContent;
  });



  return {
    props: {
      publicationsData
    }
  }
}
