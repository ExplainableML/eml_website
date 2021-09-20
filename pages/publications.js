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
              <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>
      <NavBar></NavBar>
      <div className="pt-24 flex flex-col items-center justify-top min-h-screen py-2">
          <YearHeadline text="2021"></YearHeadline>
          <PublicationGrid viewAll={false} publications={publicationsList.filter((pub)=>{return pub.year==2021})}></PublicationGrid>
          <YearHeadline text="2020"></YearHeadline>
          <PublicationGrid viewAll={false} publications={publicationsList.filter((pub)=>{return pub.year==2020})}></PublicationGrid>

          <YearHeadline text="2019"></YearHeadline>
          <PublicationGrid viewAll={false} publications={publicationsList.filter((pub)=>{return pub.year==2019})}></PublicationGrid>

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
