import { TwitterTimelineEmbed } from 'react-twitter-embed';


export default function TwitterCard(props) {
    return (<div className="shadow-lg lg:col-span-2 p-4 max-h-256   w-full overflow-auto bg-white text-sm">
         <TwitterTimelineEmbed
  sourceType="profile"
  screenName={props.account}
  options={{height: 400}}
/>
        </div>)
}
