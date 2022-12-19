import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import References from "./References";
import TwitterCard from "./TwitterCard";
const marked = require("marked")
export default function TeamMemberSidebar(props) {

  const [menuItems, setMenuItems] = useState([])

  function getOffset(el) {
    const rect = el.getBoundingClientRect();

    if (rect.top > 0) {
      return rect.top - window.scrollY
    } else {
      return -rect.top - window.scrollY;
    }


  }

  useEffect(() => {
    let arr = [];

    let doc = document.getElementsByTagName("h1")

    window.addEventListener("scroll", function (e) {

      let offsetArray = [];
      let minVal = 10000;


      for (var i = 0, all = doc.length; i < all; i++) {
        doc[i].innerText;
        if (getOffset(doc[i]) < minVal) {
          minVal = getOffset(doc[i])
          props.setActiveSection(doc[i].innerText)
        }

      }

    })

    for (var i = 0, all = doc.length; i < all; i++) {
      doc[i].id = doc[i].innerText;
      if (i > 0) {
        doc[i].classList.add("pt-24")
      }
      
      arr.push(doc[i].innerText)
    }
    setMenuItems(arr)
  }, [])

  const myLoader = ({ src, width, quality }) => {
    return props.person.img;
  };

  return (<div className="col-span-1 ">
    <div>
      <div className="flex flex-col items-center mb-4">
        <Image
          className="rounded-full mb-4"
          width="156"
          height="156"
          objectFit="cover"
          loader={myLoader}
          src="Zeynep-Akata-2.jpg"
          alt={props.name}
        ></Image>
        <div

          className="mt-3 text-purple-500 text-xs md:text-xl font-semibold"
        >
          {props.person.name}
        </div>
        <div className="text-xs md:text-md font-semibold break-words text-center">{props.person.role}</div>
      </div>

      <div className="flex flex-col justify-left items-left w-64">

        <References {...props.person}></References>

      </div>

      <div className="flex flex-col justify-center items-center mt-8">

        {menuItems.map(item => {
          return (<>

            {props.activeSection != item && <a className="w-full" href={"#" + item}><div className="text-xs font-semibold hover:bg-purple-500 hover:text-white w-full text-center py-2 rounded-sm">{item}</div></a>}
            {props.activeSection == item && <a className="w-full" href={"#" + item}><div className="text-xs font-semibold bg-purple-500 text-white w-full text-center py-2 rounded-sm">{item}</div></a>}

          </>)
        })}

      </div>

<div className="m-8">

</div>
      {props.person.twitter && <TwitterCard className="max-w-16" account={props.person.twitter}>

      </TwitterCard>}

    </div>

    <div className="m-8"></div>
  </div>)
}
