export default function TwitterCard(props) {
    return (<div class="shadow-lg p-4 max-h-256 h-72 overflow-auto bg-white">
        <a class="twitter-timeline" href={"https://twitter.com/"+props.account+"?ref_src=twsrc%5Etfw"}>Tweets by uni_tue</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>)
}