import Image from "next/image";

export default function WorkshopMemberElement(props) {
  const myLoader = ({ src, width, quality }) => {
    return props.img;
  };

  return (
    <a href={props.link}>
    <div class="flex flex-col items-center justify-center">
      <Image
        class="rounded-full mb-4"
        width="200"
        height="200"
        objectFit="cover"
        loader={myLoader}
        src="Zeynep-Akata-2.jpg"
        alt={props.name}
      ></Image>
      <a
        href={props.link}
        class="mt-3 text-purple-500 text-lg md:text-base font-bold"
      >
        {props.name}
      </a>
      <p class="mt-3 text-purple-500 text-base md:text-xs font-bold">{props.institute}</p>
    </div></a>
  );
}
