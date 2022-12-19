export default function Headline(props) {
  return (
    <>
      <div className="text-2xl xl:text-4xl font-bold">{props.text}</div>
      <div className="m-2 w-8 h-2 bg-purple-900"></div>
    </>
  );
}
