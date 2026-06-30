import Image from "next/image";

export default function TeamMemberElement(props) {
  const myLoader = ({ src, width, quality }) => {
    return props.person.img;
  };

  return (
    <a href={"/people/" + props.person.link}>
    <div className="flex flex-col items-center justify-center">
      <Image
        className="rounded-full mb-4"
        width="200"
        height="200"
        objectFit="cover"
        loader={myLoader}
        src="Zeynep-Akata-2.jpg"
        alt={props.name}
      ></Image>
      <a
        href={"/people/" + props.person.link}
        className="mt-3 text-purple-500 text-xs md:text-lg font-bold"
      >
        {props.person.name}
      </a>
      <div className="text-xs md:text-md font-semibold break-words text-center">{props.person.role}</div>
    </div></a>
  );
}
