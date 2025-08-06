function AboutSection() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6 text-center flex flex-col items-center gap-8 p-10">
        <h2 className="text-5xl font-extrabold text-white mb-6">Who We Are</h2>
        <p className="text-[20px] text-gray-300 max-w-3xl leading-relaxed">
          CipherPixel specializes in image steganography — the technique of concealing confidential data within images. Our aim is to simplify secure communication by making hidden data embedding both reliable and user-friendly.
        </p>
        <img
          src="/Image 39.jpg"
          alt="Illustration representing steganography"
          className="rounded-2xl w-[800px] h-auto object-cover"
        />
      </div>
    </section>
  );
}

export default AboutSection;
