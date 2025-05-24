export default function Plans() {
  return (
    <section className="bg-[#315c5b] text-white px-6 lg:px-12 py-16">
      <h2 className="text-2xl font-bold border-l-4 border-white pl-4 mb-8">PLANES</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-base">
        <div>
          <span className="font-bold">01</span> Estándar
          <ul className="list-disc list-inside mt-2">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <span>
            <span className="font-bold">02</span> Premium
          </span>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="flex justify-between items-center">
          <span>
            <span className="font-bold">03</span> Platino
          </span>
          <i className="fas fa-plus"></i>
        </div>
      </div>
    </section>
  )
}
