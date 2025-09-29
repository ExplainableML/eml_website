"use client";

import dynamic from "next/dynamic";

const BlueskyEmbed = dynamic(
  async () => {
    await import("bluesky-profile-feed-embed");
    await import("bluesky-profile-feed-embed/style.css");
    await import("bluesky-profile-feed-embed/themes/light.css");
    return (props) => (
      <bluesky-profile-feed
        actor={props.actor}
        include-pins
        style={{ display: "block", width: "100%" }}  // ✅ force full width
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://bsky.app/profile/${props.actor}`}
          className="bluesky-profile-feed-fallback"
        >
          View profile on Bluesky
        </a>
      </bluesky-profile-feed>
    );
  },
  { ssr: false }
);

export default function BlueskyCard({ actor }) {
  return (
    <div className="shadow-lg lg:col-span-2 p-4 max-h-256 w-full overflow-auto bg-white text-sm">
      <BlueskyEmbed actor={actor} />
    </div>
  );
}
