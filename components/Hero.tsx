import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col h-screen items-center justify-center">
      <div className="flex flex-col justify-center  items-center space-y-2">
        <h1 className="border-b pb-1 text-4xl font-semibold tracking-tight first:mt-0">MP Yield</h1>
        <p className="text-center">Seguí y calculá el rendimiento que genera <a className="font-semibold text-gray-400 hover:text-gray-300 transition-all" href="https://www.mercadopago.com.ar/cuenta" target="_blank">Mercado Pago</a> día a día</p>
        <Link className="text-gray-400 underline underline-offset-2 hover:text-gray-300 transition-all" href="/#yield">Ver y calcular</Link>
      </div>
    </section>
  );
}

export default Hero