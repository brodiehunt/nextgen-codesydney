import Link from "next/link";
import Image from "next/image";

export default function Hero({ hero }) {
  const { aboveTitle, title, moto, intro, image, internalLink } = hero;

  return (
    <section className="relative z-20 w-full max-w-[1920px] mx-auto px-4 py-12 md:px-6 md:py-10 lg:px-10 lg:py-16 grid gap-16 lg:grid-cols-2 ">
      <div className="lg:flex lg:flex-col lg:justify-center">
        {aboveTitle && <span className="lg:text-xl font-semibold">We are</span>}

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 lg:text-6xl flex gap-2 items-center">
          <Image
            className="w-10"
            src="/images/logo-codesyd.png"
            alt="Code.sydney Logo"
            width={50}
            height={50}
          />
          {title ? title : "Code.Sydney"}
        </h1>
        {moto && <p className="">{moto}</p>}

        <p className="mb-6">{intro ? intro : ""}</p>
        {internalLink && (
          <Link
            href={internalLink.href ? internalLink.href : "/"}
            className="px-4 py-2 bg-gradient-to-b from-[#2892F9] to-[#1D73C6] hover:from-[#4DAEF9] hover:to-[#3C89C9] rounded shadow-md hover:shadow-inset transition-all duration-300 text-white self-start"
          >
            {internalLink.label ? internalLink.label : "Learn more"}
          </Link>
        )}
      </div>
      <div className="">
        {image && (
          <Image
            // className="w-10"
            src={image.asset.url}
            alt={image?.alt ? image.alt : ""}
            width={900}
            height={200}
          />
        )}

        {/* <img
          className=""
          alt="Illustration of a programmer working."
          src={heroIllustration}
        /> */}
      </div>
    </section>
  );
}
