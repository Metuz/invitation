export default function Footer() {
  return (
    <footer className="text-center py-12">
      <button className="bg-[#1e1e1e] text-white px-8 py-3 text-sm">CONTACTO</button>
      <div className="mt-6 text-xs text-[#666] flex flex-col md:flex-row justify-center gap-4">
        <a href="#">Contacto</a>
        <a href="#">Política</a>
        <a href="#">Disclaimer</a>
        <a href="#">Aviso de Privacidad</a>
      </div>
    </footer>
  )
}
