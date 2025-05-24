import Image from 'next/image'

const galeria = [
  {
    title: 'David + Mary',
    subtitle: 'Boda en Hacienda',
    desc: 'Una experiencia inolvidable llena de detalles mágicos para recordar por siempre.',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  },
  {
    title: 'David + Mary',
    subtitle: 'Boda en Hacienda',
    desc: 'Una experiencia inolvidable llena de detalles mágicos para recordar por siempre.',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  },
  {
    title: 'David + Mary',
    subtitle: 'Boda en Hacienda',
    desc: 'Una experiencia inolvidable llena de detalles mágicos para recordar por siempre.',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  },
]

export default function Gallery() {
  return (
    <section className="px-6 lg:px-12 py-16">
      <h2 className="text-2xl font-bold border-l-4 border-[#1e1e1e] pl-4 mb-4">GALERÍA</h2>
      <p className="mb-10 text-base">Take a look at our lovely projects! New Ideas.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galeria.map((item, i) => (
          <div key={i} className="border bg-white rounded overflow-hidden shadow-sm">
            <Image
              src={item.img}
              alt={item.title}
              width={600}
              height={400}
              className="w-full h-[250px] object-cover"
              unoptimized
            />
            <div className="p-6 text-sm">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-xs text-[#555]">{item.subtitle}</p>
              <p className="mt-2">{item.desc}</p>
              <div className="flex items-center gap-1 mt-4 text-[#1e1e1e]">
                <span className="underline">VER</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-[#1e1e1e] text-white px-6 py-3 text-sm">VER MÁS</button>
      </div>
    </section>
  )
}
