export default function Headline(props) {
  return (
    <>
      <div class="text-2xl xl:text-4xl font-bold">{props.text}</div>
      <div class="m-2 w-8 h-2 bg-purple-900"></div>
    </>
  );
}
