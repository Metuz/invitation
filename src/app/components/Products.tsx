export default function Products() {
  return(
    <section className="bg-[#315c5b] text-white px-6 lg:px-12 py-16">
      <h2 className="text-2xl font-bold border-l-4 border-white pl-4 mb-6">PRODUCTOS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-base leading-relaxed">
            Cada evento es único y merece una invitación especial. Ofrecemos servicios personalizados para
            diferentes ocasiones. Elige el diseño ideal para bodas, quince años y más.
          </p>
        </div>
        <div className="space-y-6 text-base">
          <div className="flex justify-between items-center">
            <span>
              <span className="font-bold">01</span> Invitaciones para Bodas
            </span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="flex justify-between items-center">
            <span>
              <span className="font-bold">02</span> XV Años
            </span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="flex justify-between items-center">
            <span>
              <span className="font-bold">03</span> Carrito de regalos
            </span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </section>
  )
}
