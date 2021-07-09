import NavBar from "../components/NavBar";
import YearHeadline from "../components/YearHeadline"

export default function Publications() {
  return (
    <div class="bg-gray-50">
      <NavBar></NavBar>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <YearHeadline text="2021"></YearHeadline>
          <YearHeadline text="2020"></YearHeadline>
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
