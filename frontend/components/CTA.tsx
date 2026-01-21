interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTA({
  title,
  description,
  buttonText,
  buttonLink,
}: CTAProps) {
  return (
    <section className="bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{title}</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-95 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={buttonLink}
              className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-md hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {buttonText}
            </a>
            <a
              href="#"
              className="inline-block border-2 border-white text-white font-semibold px-10 py-4 rounded-md hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
          <p className="text-sm mt-8 opacity-80">
            🔒 Secure platform • 24/7 Support • No hidden fees
          </p>
        </div>
      </div>
    </section>
  );
}
