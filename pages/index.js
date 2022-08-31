import matter from 'gray-matter';

import Head from 'next/head'
import NavBar from '../components/NavBar'
import Headline from '../components/Headline'
import TeamMemberGrid from '../components/TeamMemberGrid'
import WorkshopGrid from '../components/WorkshopGrid'
import Hero from '../components/Hero'

import PublicationGrid from '../components/PublicationGrid'
import TeachingGrid from '../components/TeachingGrid'
import ContactGrid from '../components/ContactGrid'

import Footer from '../components/Footer';
import NewsGrid from '../components/NewsGrid';

export default function Home(props) {

  const publications = props.publicationsData.map(pub => matter(pub));
  let publicationsList = publications.map(item => item.data);

  const team = props.teamData.map(person => matter(person));
  let teamList = team.map(person => person.data);



  return (<div class="bg-gray-50">

    <Head>

<title>EML Tübingen</title>
<description text="Explainable Machine Learning Universität Tübingen"></description>

<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>


      </Head>

    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>




    <NavBar></NavBar>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Hero></Hero>
      <div class="pt-24" id="team"></div>
      <Headline id="team" text="Team"></Headline>
      <TeamMemberGrid team={teamList}></TeamMemberGrid>
      <div class="pt-24" id="publications"></div>
      <Headline id="publications" text="Publications"></Headline>
      <PublicationGrid viewAll={true} publications={publicationsList.sort(function(a,b) {return new Date(b.date)- new Date(a.date)}).slice(0,3)}></PublicationGrid>
      <div class="pt-24" id="teaching"></div>
      <Headline text="Teaching"></Headline>
      <TeachingGrid></TeachingGrid>
      <div className="pt-24" id="workshop"></div>
      <Headline text="Workshop"></Headline>
      <WorkshopGrid></WorkshopGrid>
      <div class="pt-24" id="news"></div>
      <Headline text="News" ></Headline>
      <NewsGrid></NewsGrid>
      <div class="pt-24" id="contact"></div>
      <Headline text="Contact"></Headline>
      <ContactGrid></ContactGrid>
    </div>
    <Footer></Footer>
    </div>
  )
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

  const team_files = fs.readdirSync(`${process.cwd()}/content/team/`, 'utf-8');

  const team = team_files.filter(fn => fn.endsWith(".md"));

  const teamData = team.map(team => {
    const path = `${process.cwd()}/content/team/${team}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8"
    });

    return rawContent;
  });





  return {
    props: {
      team,
      teamData,
      publicationsData
    }
  }
}