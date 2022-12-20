import Image from "next/legacy/image";

export default function WorkshopMemberElement(props) {
  const myLoader = ({ src, width, quality }) => {
    return props.img;
  };

  return (
    <a href={props.link}>
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
      <div
        href={props.link}
        className="mt-3 text-purple-500 text-lg md:text-base font-bold"
      >
        {props.name}
      </div>
      <p className="mt-3 text-purple-500 text-base md:text-xs font-bold">{props.institute}</p>
    </div></a>
  );
}
