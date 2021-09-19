import Image from "next/image";
import { useEffect, useState } from "react";
import References from "./References";
const marked = require("marked")
export default function TeamMemberSidebar(props) {

  const [menuItems, setMenuItems] = useState([])


  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY
    
  }



  useEffect(() => {
    let arr = [];

    let doc = document.getElementsByTagName("h1")

    document.addEventListener("scroll" , function(e)  {
      for (var i = 0, all = doc.length; i < all; i++) {
        doc[i].id = doc[i].innerText;
        props.setActiveSection(doc[i].innerText)
      }
    })

    

    for (var i = 0, all = doc.length; i < all; i++) {
      doc[i].id = doc[i].innerText;

      console.log(getOffset(doc[i]))
      arr.push(doc[i].innerText)
    }
    setMenuItems(arr)





  }, [])
  const myLoader = ({ src, width, quality }) => {
    return props.person.img;
  };
  return (<div class="col-span-1 lg:fixed">
    <div>
      <div class="flex flex-col items-center mb-6">
        <Image
          class="rounded-full mb-4"
          width="200"
          height="200"
          objectFit="cover"
          loader={myLoader}
          src="Zeynep-Akata-2.jpg"
          alt={props.name}
        ></Image>
        <div

          class="mt-3 text-purple-500 text-xs md:text-xl font-semibold"
        >
          {props.person.name}
        </div>
        <div class="text-xs md:text-md font-semibold break-words text-center">{props.person.role}</div>
      </div>

      <div class="flex flex-col justify-center items-left">

        <References {...props.person}></References>

      </div>

      <div class="flex flex-col justify-center items-center mt-8">

        {menuItems.map(item => {
          return <a class="w-full" href={"#"+item}><div class="text-sm font-semibold hover:bg-purple-500 hover:text-white w-full text-center py-2 rounded-sm">{item}</div></a>
        })}

      </div>

    </div>
  </div>)
}