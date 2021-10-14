import TwitterCard from "./TwitterCard";

export default function NewsGrid(props) {

    return (<div class="container flex flex-row justify-center items-center ">
        <div id="news" class=" container  py-4 gap-8  w-full mb-16 px-6">
            <TwitterCard account="ExplainableML"></TwitterCard>

        </div></div>)
}