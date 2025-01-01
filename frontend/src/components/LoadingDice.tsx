import "./LoadingDice.css";
export default function LoadingDice() {
  return (
    <main class="container mx-auto h-svh flex items-center justify-center">
      <div class="scene">
        <div class="dice">
          {/* Side 1 */}
          <div class="side one">
            <span class="dot red"></span>
          </div>

          {/* Side 2 */}
          <div class="side two">
            <span class="dot"></span>
            <span class="dot"></span>
          </div>

          {/* Side 3 */}
          <div class="side three">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>

          {/* Side 4 */}
          <div class="side four">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>

          {/* Side 5 */}
          <div class="side five">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>

          {/* Side 6 */}
          <div class="side six">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      </div>
    </main>
  );
}
