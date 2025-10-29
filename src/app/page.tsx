import Image from "next/image";
import { House, Folder, Info } from "@deemlol/next-icons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans dark:bg-black">
      <header className="sm:flex flex-col sm:flex-row bg-white/45 backdrop-blur-md alingn-center items-center justify-between w-9/10 py-2 px-15 rounded-full shadow-lg mt-5 mb-1 lg:mb-10 sticky top-2 transition-all duration-250">
        <h1 className="text-xl lg:text-2xl tracking-widest shadow-2xl mb-2 text-center">Angel T. Ramirez</h1>
        <div className="flex flex-row justify-center gap-2 text-lg bg-linear-to-r from-slate-900 to-slate-700 text-gray-300 rounded-full px-5 py-4 backdrop-blur-md sm:gap-8">
          <a className="bg-white/45 rounded-full py-1 px-4 lg:px-2 text-black flex items-center gap-1" href="">
            <p className="hidden lg:block">Home</p>
            <House size={24} color="#2e2e2e" />
          </a>
          <a className="bg-white/45 rounded-full py-1 px-4 lg:px-2 text-black flex items-center gap-1" href="">
            <p className="hidden lg:block">About</p>
            <Info size={24} color="#2e2e2e" />
          </a>
          <a className="bg-white/45 rounded-full py-1 px-4 lg:px-2 text-black flex items-center gap-1" href="">
            <p className="hidden lg:block">Projects</p>
            <Folder size={24} color="#2e2e2e" />
          </a>
          <button className="hidden lg:block items-center border rounded-2xl px-4 hover:bg-white hover:text-black transition-all duration-250">Get in touch</button>
        </div>
      </header>
      <div className="h-3/4 w-9/10 mb-auto">
        <div className="flex flex-col lg:flex-row mt-15">
          <Image
            src="/user.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full mx-auto shadow-lg size-xl "
          />
          <div className="lg:ml-10 mt-6 lg:mt-0 flex flex-col justify-center">
            <h2 className="text-4xl mt-6 mb-2 font-semibold text-center lg:text-left">Angel Tapia Ramirez</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-center lg:text-left">
              Welcome to my personal portfolio. I am a developer passionate about creating innovative and efficient solutions. Explore my projects and feel free to contact me to collaborate.
            </p>
            <button className="block lg:hidden items-center border rounded-2xl px-4 hover:bg-white hover:text-black transition-all duration-250 mt-5 m-25">Get in touch</button>
          </div>

        </div>
      </div>
      <div className="flex gap-4 mb-auto">
        <div className="max-w-100 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sunt autem aliquam labore, impedit aspernatur atque dolores vitae minus repudiandae tempore voluptas hic. Fugit, voluptatibus magnam illo excepturi vero sit!
        </div>
        <div className="max-w-100 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod ea voluptatibus, aliquid laudantium voluptates, totam nobis illum harum ex tenetur reprehenderit aspernatur mollitia culpa necessitatibus beatae. Odio, repellendus voluptatum!
        </div>
      </div>
      <div className="flex gap-4 mb-auto">
        <div className="max-w-100 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sunt autem aliquam labore, impedit aspernatur atque dolores vitae minus repudiandae tempore voluptas hic. Fugit, voluptatibus magnam illo excepturi vero sit!
        </div>
        <div className="max-w-100 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod ea voluptatibus, aliquid laudantium voluptates, totam nobis illum harum ex tenetur reprehenderit aspernatur mollitia culpa necessitatibus beatae. Odio, repellendus voluptatum!
        </div>
      </div>
    </div>
  );
}
