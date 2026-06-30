// import TwitterCard from "./TwitterCard";
//
// export default function NewsGrid(props) {
//
//     return (<div className="container flex flex-row justify-center items-center ">
//         <div className=" container  py-4 gap-8  w-full mb-16 px-6">
//             <TwitterCard account="ExplainableML"></TwitterCard>
//
//         </div></div>)
// }

import BlueskyCard from "./BlueskyCard";

export default function NewsGrid() {
  return (
    <div className="container flex flex-row justify-center items-center">
      <div className="container py-4 gap-8 w-full max-w-2xl mb-16 px-6">
        <BlueskyCard actor="eml-munich.bsky.social" />
      </div>
    </div>
  );
}
