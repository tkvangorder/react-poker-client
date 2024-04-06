import titleImage from "../assets/title.png";

function TitlePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4 bg-gray-950">
      <h1 className="text-4xl font-bold tracking-tight text-orange-500 sm:text-6xl">
        Chico Degens Poker Club
      </h1>
      <div className="relative flex h-auto">
        <img
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={titleImage}
          alt="Chico Degens Poker Club"
          width={800}
          height={800}
        />
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6"></div>
    </main>
  );
}

export default TitlePage;
