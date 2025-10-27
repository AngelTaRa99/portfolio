import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans dark:bg-black">
      <header className="flex bg-white/45 backdrop-blur-md alingn-center items-center justify-between w-4/5 p-4 px-25 rounded-full shadow-lg mt-5 mb-20 ">
        <h1 className="text-2xl tracking-widest shadow-2xl">Angel T. Ramirez</h1>
        <div className="flex flex-row gap-4 text-lg bg-white/45 text-black rounded-full px-4 py-4 backdrop-blur-md">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Projects</a>
          <button className="border rounded-2xl px-8 hover:bg-white hover:text-black transition-all duration-250">Get in touch</button>
        </div>
      </header>
      <body>
        <main className="flex flex-col alingn-center justify-center text-center mt-20">
          <Image
            src="/user.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full mx-auto shadow-lg"
          />
          <h2 className="text-4xl mt-6 mb-2 font-semibold">Angel Tapia Ramirez</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Welcome to my personal portfolio. I am a developer passionate about creating innovative and efficient solutions. Explore my projects and feel free to contact me to collaborate.
          </p>
        </main>
      </body>
    </div>
  );
}
