import { poppins, geist } from "@/lib/fonts";

export default function Home() {
  return (
    <>
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/private-images/hero-bg.jpg')] bg-cover bg-center"
        aria-hidden
      />


      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-6">
          <h1
            className={`
              ${poppins.className}
              text-[96px]
              font-bold
              leading-[1.03]
              tracking-[-0.024em]
              text-[#FAFAFA]
            `}
          >
            Lukaspop<span className="text-[#FF2455]">+</span>
          </h1>

          <p
            className={`
              ${geist.className}
              mt-[16px]
              text-[30px]
              font-semibold
              leading-[45px]
              tracking-[-0.024em]
              text-[#A3A3A3]
              max-w-none
            `}
          >
            I build websites with an artistic mindset and a focus on meaningful detail.
            My work evolves with every project as I refine my craft and develop my own style.
            The "<span className="text-[#FF2455] font-semibold">+</span>" isn’t just branding
            — it’s a promise of honesty, transparency, and reliable work.
          </p>
        </div>
      </div>
    </section>
    <section>
      {Array.from({ length: 25 }).map((_, index) => (
        <p key={index} className="text-text-secondary">
          {index === 0 ? 'Secondary' : `${index + 1}${getSuffix(index + 1)} text`}
        </p>
      ))}
    </section>
    </>
  );
  function getSuffix(n: number): string {
  const suffixes = ['st', 'nd', 'rd'];
  return suffixes[n % 10 - 1] || 'th';
}
}
