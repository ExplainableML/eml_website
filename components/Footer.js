export default function Footer() {
  return (
    <div class="min-w-screen p-16 min-h-128  text-white bg-purple-500">

      <div class=" grid grid-cols-1 lg:grid-cols-2 gap-4" style={{maxWidth:512}}>
      <span class="font-semibold">
        {"(c) 2021 Explainable Machine Learning Tübingen "}
      </span>{" "}
      <a class="" href="/impressum">
        Impressum
      </a>
      </div>

    </div>
  );
}
