import { Icon } from "@iconify-icon/solid";
import { A } from "@solidjs/router";
export default function Header2() {
  return (
    <header class="border">
      <nav class="flex h-16 justify-between items-center px-4">
        <div class="flex basis-0 grow h-full">
          <A href="/" class="h-full flex items-center">
            <div class="flex justify-center items-center h-full shrink-0">
              <img src="/chatdice.jpg" class="object-cover h-full" alt="" />
            </div>
            <p class="text-xl font-bold tracking-wider text-gray-800">
              ChatDice
            </p>
          </A>
        </div>
        <div class="hidden sm:flex">
          <p class="text-gray-500 font-medium">Chat people near you</p>
        </div>
      </nav>
    </header>
  );
}
