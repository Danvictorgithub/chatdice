import { A } from "@solidjs/router";
import Header from "~/components/Header";

export default function Home() {
  return (
    <main class="">
      <Header />
      <section
        class="bg-gradient-to-br from-zinc-900 to-zinc-800 
        min-h-[calc(100svh-64px)] flex items-center justify-center"
      >
        <div class="bg-white rounded-md p-4">
          <div class="flex item-center justify-center my-8">
            <div class="p-4 border-[4px] border-gray-800 rounded-md h-12 w-12 flex items-center justify-center">
              <div class="border-[4px] rounded-full border-red-500"></div>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-center my-3">
            Welcome to ChatDice
          </h2>
          <p class="text-sm text-gray-600 font-medium mb-4">
            Roll the dice to chat with random people around the world
          </p>
          <A href="/auth/signin">
            <button class="w-full bg-red-500 text-white p-2 rounded-md mt-4 font-medium hover:bg-red-600 border-2 border-transparent active:bg-white active:border-red-600 active:text-red-500 duration-100 mb-8">
              sign in to chat
            </button>
          </A>
        </div>
      </section>
    </main>
  );
}
