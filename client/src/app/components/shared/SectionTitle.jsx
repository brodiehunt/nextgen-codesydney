export default function SectionTitle({ psuedoTitle, children }) {
  return (
    <div className="relative">
      <span className="block opacity-0 md:opacity-100 md:block text-4xl text-center text-outline text-transparent  font-extrabold tracking-wider md:text-6xl lg:text-8xl w-full">
        {psuedoTitle}
      </span>
      <h2 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold w-fit-content text-3xl lg:text-5xl mt-1 w-full text-center">
        {children}
      </h2>
    </div>
  );
}
