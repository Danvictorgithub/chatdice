import { A } from "@solidjs/router";

export default function () {
  return (
    <main>
      <section class="bg-white  ">
        <div class="container flex flex-col items-center justify-center min-h-screen px-6 mx-auto">
          <A href="/" class="flex justify-center mx-auto">
            <img class="w-auto h-7 sm:h-16" src="/chatdice.jpg" alt="" />
          </A>

          <h1 class="mt-4 text-2xl font-semibold tracking-wide text-center text-gray-800 capitalize md:text-3xl  ">
            Forgot Password
          </h1>

          <div class="w-full max-w-md mx-auto mt-6">
            <form>
              <div>
                <label class="block mb-2 text-sm text-gray-600  ">Email</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600       focus:border-gray-400   focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Submit
              </button>

              <p class="mt-6 text-gray-500  ">
                We will send you a link to reset your password.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
