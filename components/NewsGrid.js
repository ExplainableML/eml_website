import TwitterCard from "./TwitterCard";

export default function NewsGrid(props) {

    return (<div class="flex flex-row justify-center items-center w-full lg:px-16 ">
        <div id="news" class="grid grid-cols-1 lg:grid-cols-2   gap-8 p-6 mb-16 ">
            <TwitterCard account="ExplainableML"></TwitterCard>

        </div></div>)
}