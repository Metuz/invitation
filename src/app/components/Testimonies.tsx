const testtimonies = [
  'Tuvieron la invitación a tiempo. Todo perfecto.',
  'Todo excelente. Muy recomendable.',
  'Diseño muy bonito. Nos encantó.',
]

export default function Testimonies() {
  return (
    <section className="px-6 lg:px-12 py-16">
      <h2 className="text-2xl font-bold mb-10">Nos recomiendan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
        {testtimonies.map((text, i) => (
          <div key={i} className="border p-4 rounded shadow">
            <div className="flex items-center gap-2 mb-2">
              <img src="https://placehold.co/40x40" className="rounded-full" alt="Avatar" />
              <span>★★★★★</span>
            </div>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
