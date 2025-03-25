export default async function Page({ params }) {
  const { md, cornea } = await params; // Destructure dynamic route parameters

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 ">Course Module: {md}</h1>
      <h2 className="text-xl font-semibold mb-2">Topic: {cornea}</h2>
      <p className="text-lg">
        This is the content for the <strong>{cornea}</strong> topic in the{" "}
        <strong className="uppercase">{md}</strong> module. You can add more
        details or fetch data dynamically here.
      </p>
      <iframe
        src="https://roadmap.sh/r/embed?id=67e2486183420316607f5177"
        width="100%"
        height="700px"
        className="rounded-lg border border-gray-300 shadow-md"
      ></iframe>
    </div>
  );
}
