import Head from 'next/head'
import NavBar from '../components/NavBar'
import Headline from '../components/Headline'
import TeamMemberGrid from '../components/TeamMemberGrid'
import Hero from '../components/Hero'

import PublicationGrid from '../components/PublicationGrid'
import TeachingGrid from '../components/TeachingGrid'
import ContactGrid from '../components/ContactGrid'

export default function Home() {
  return (<div class="bg-gray-50">

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

  
  <NavBar></NavBar>
    <div className="flex flex-col items-center justify-center min-h-screen py-2  md:px-16 ">
      <Hero></Hero>
     <Headline text="Team"></Headline>
     <TeamMemberGrid team={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]}></TeamMemberGrid>
     <Headline text="Publications"></Headline>
     <PublicationGrid>
     </PublicationGrid>
     <Headline text="Teaching"></Headline>
     <TeachingGrid></TeachingGrid>
     <Headline text="Contact"></Headline>
     <ContactGrid></ContactGrid>
    </div></div>
  )
}
