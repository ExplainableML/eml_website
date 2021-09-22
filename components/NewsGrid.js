import TwitterCard from "./TwitterCard";

export default function NewsGrid(props) {

    return (<div class="flex flex-row justify-center items-center w-full lg:px-16 ">
        <div id="news" class="grid grid-cols-2   lg:px-44 py-4 gap-8 w-full mb-16 ">
            <TwitterCard account="ExplainableML"></TwitterCard>

        </div></div>)
}