import Image from 'next/image'

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 lg:px-12 py-16">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest leading-tight">
          INVITACIONES <br />DIGITALES
        </h1>
        <p className="mt-6 text-base md:max-w-md">
          Haz que tu evento sea inolvidable. Invitaciones únicas diseñadas a tu estilo y personalidad.
        </p>
        <button className="mt-6 md:mt-8 bg-[#315c5b] text-white px-6 py-3 text-sm font-semibold">
          QUIERO QUE ME CONTACTEN
        </button>
      </div>
      <div className="relative">
        <Image
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
          alt="Hero"
          width={800}
          height={600}
          className="w-full h-auto rounded"
          unoptimized
        />
        <div className="hidden md:flex absolute bottom-6 right-6 bg-[#315c5b] text-white w-14 h-14 items-center justify-center rounded-full shadow">
          <i className="fas fa-check text-xl"></i>
        </div>
      </div>
    </section>
  )
}
