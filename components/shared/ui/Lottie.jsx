"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HeroAnimation() {
  return (
    <div className="w-full md:w-[600px] mx-auto ">
      <DotLottieReact
        src="https://lottie.host/5460a26a-9efd-4805-ae0e-f1bfec620422/1lAX4Myg3m.lottie"
        loop
        autoplay
        className="w-[600px] h-full border-none"
      />
    </div>
  );
}
