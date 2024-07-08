import { motion } from "framer-motion";

export default function TestimonialCard({
  testimonial,
  index,
  cardRef,
  cardHeight,
}) {
  const exitHeight = cardHeight + 16;
  return (
    <motion.article
      className={`p-8 rounded-lg mb-4 bg-custom-dark/50 z-20 backdrop-blur-lg self-start transition-all duration-200 xl:transition-none xl:duration-none mx-auto max-w-[700px] w-[100%] min-w-[100%] xl:min-w-0`}
      key={testimonial.name + index}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      exit={{ y: -exitHeight }}
      ref={cardRef}
    >
      <div className="py-4 border-b-[1px] border-white/50">
        <p className="text-custom-primary font-semibold">
          {testimonial.organisation}
        </p>
        <p className="text-xl font-bold">{testimonial.name}</p>
        <p className="text-custom-light/70">{testimonial.jobTitle}</p>
      </div>
      <p className="py-4 text-custom-light/80">{testimonial.review}</p>
    </motion.article>
  );
}
