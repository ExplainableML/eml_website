import { useEffect, useState } from "react";

const BSKY_SERVICE = "https://public.api.bsky.app";

function getPostUrl(actor, uri) {
  const rkey = uri?.split("/").pop();
  return rkey ? `https://bsky.app/profile/${actor}/post/${rkey}` : `https://bsky.app/profile/${actor}`;
}

function formatDate(value) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function PostImages({ images }) {
  if (!images?.length) {
    return null;
  }

  return (
    <div className={`grid gap-2 ${images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
      {images.slice(0, 4).map((image) => (
        <a key={image.fullsize || image.thumb} href={image.fullsize} target="_blank" rel="noopener noreferrer">
          <img
            src={image.thumb || image.fullsize}
            alt={image.alt || ""}
            className="w-full max-h-64 object-cover rounded border border-gray-200"
          />
        </a>
      ))}
    </div>
  );
}

function ExternalEmbed({ external }) {
  if (!external) {
    return null;
  }

  return (
    <a
      href={external.uri}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-gray-200 rounded overflow-hidden text-black hover:border-purple-500"
    >
      {external.thumb && <img src={external.thumb} alt="" className="w-full max-h-48 object-cover" />}
      <div className="p-3">
        <div className="font-semibold text-sm text-black">{external.title}</div>
        {external.description && <div className="text-xs text-gray-600 mt-1 font-normal">{external.description}</div>}
      </div>
    </a>
  );
}

function BlueskyPost({ actor, item }) {
  const post = item.post;
  const text = post.record?.text || "";
  const createdAt = post.record?.createdAt;
  const url = getPostUrl(actor, post.uri);

  return (
    <article className="border-t border-gray-200 first:border-t-0 py-4">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block text-black">
        <p className="whitespace-pre-wrap text-sm leading-6 font-normal text-gray-900">{text}</p>
        <div className="mt-2 text-xs text-gray-500 font-normal">{formatDate(createdAt)}</div>
      </a>

      {post.embed?.images && (
        <div className="mt-3">
          <PostImages images={post.embed.images} />
        </div>
      )}

      {post.embed?.external && (
        <div className="mt-3">
          <ExternalEmbed external={post.embed.external} />
        </div>
      )}

      <div className="mt-3 flex gap-4 text-xs text-gray-500 font-normal">
        <span>{post.replyCount || 0} replies</span>
        <span>{post.repostCount || 0} reposts</span>
        <span>{post.likeCount || 0} likes</span>
      </div>
    </article>
  );
}

export default function BlueskyCard({ actor }) {
  const [profile, setProfile] = useState(null);
  const [feed, setFeed] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();
    const params = new URLSearchParams({
      actor,
      limit: "2",
      filter: "posts_no_replies",
    });

    async function loadFeed() {
      try {
        const [profileResponse, feedResponse] = await Promise.all([
          fetch(`${BSKY_SERVICE}/xrpc/app.bsky.actor.getProfile?actor=${encodeURIComponent(actor)}`, {
            signal: controller.signal,
          }),
          fetch(`${BSKY_SERVICE}/xrpc/app.bsky.feed.getAuthorFeed?${params.toString()}`, {
            signal: controller.signal,
          }),
        ]);

        if (!profileResponse.ok || !feedResponse.ok) {
          throw new Error("Unable to load Bluesky feed");
        }

        const profileData = await profileResponse.json();
        const feedData = await feedResponse.json();

        setProfile(profileData);
        setFeed(feedData.feed || []);
        setStatus("ready");
      } catch (error) {
        if (error.name !== "AbortError") {
          setStatus("error");
        }
      }
    }

    loadFeed();

    return () => controller.abort();
  }, [actor]);

  return (
    <div className="shadow-lg p-4 w-full overflow-auto bg-white text-sm">
      <div className="border border-gray-300 rounded overflow-hidden bg-white">
        <a
          href={`https://bsky.app/profile/${actor}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 text-black border-b border-gray-200"
        >
          {profile?.avatar && <img src={profile.avatar} alt="" className="w-10 h-10 rounded-full" />}
          <div className="flex-1 min-w-0">
            <div className="font-bold text-lg text-black">{profile?.displayName || "ExplainableML"}</div>
            <div className="text-xs text-gray-500 font-normal truncate">@{actor}</div>
          </div>
          <span className="text-purple-500 font-semibold text-sm">Bluesky</span>
        </a>

        <div className="max-h-128 overflow-auto px-4">
          {status === "loading" && <div className="py-12 text-center text-gray-500 font-normal">Loading posts...</div>}
          {status === "error" && (
            <a
              href={`https://bsky.app/profile/${actor}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-12 text-center text-purple-500"
            >
              View posts on Bluesky
            </a>
          )}
          {status === "ready" && feed.length === 0 && (
            <div className="py-12 text-center text-gray-500 font-normal">No recent post found.</div>
          )}
          {status === "ready" &&
            feed.map((item) => <BlueskyPost key={item.post.uri} actor={actor} item={item} />)}
        </div>
      </div>
    </div>
  );
}
