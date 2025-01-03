import { A } from "@solidjs/router";

export default function () {
  return (
    <main>
      <section class="min-h-[calc(100svh-64px)] flex items-center justify-center">
        <div class="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md  ">
          <div class="flex items-center gap-2">
            <A href="/" class="flex justify-start">
              <img class="w-auto h-7 sm:h-12" src="/chatdice.jpg" alt="" />
            </A>
            <p class="font-bold text-lg tracking-wide">Sign up in ChatDice!</p>
          </div>
          <form class="mt-6">
            <div>
              <label for="email" class="block text-sm text-gray-800  ">
                Email
              </label>
              <input
                type="email"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg       focus:border-blue-400   focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div class="mt-4">
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm text-gray-800  ">
                  Password
                </label>
              </div>

              <input
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg       focus:border-blue-400   focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div class="mt-4">
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm text-gray-800  ">
                  Confirm Password
                </label>
              </div>

              <input
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg       focus:border-blue-400   focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div class="mt-6">
              <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign Up
              </button>
            </div>
          </form>

          <p class="mt-8 text-xs font-light text-center text-gray-400">
            {" "}
            Already have an account?{" "}
            <A
              href="/auth/signin"
              class="font-medium text-gray-700   hover:underline"
            >
              Create One
            </A>
          </p>
        </div>
      </section>
    </main>
  );
}
