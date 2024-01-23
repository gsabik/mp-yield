import Link from "next/link";

const Hero = async () => {
  return (
    <section className="flex flex-col h-screen items-center justify-center">
        <div className="flex flex-col justify-center  items-center space-y-2">
            <h1 className="border-b pb-1 text-4xl font-semibold tracking-tight first:mt-0">MP Yield</h1>
            <p>Seguí y calculá el rendimiento que genera <span className="font-semibold">Mercado Pago</span> día a día</p>
            <Link className="text-gray-400 underline underline-offset-2" href="">Ver y calcular</Link>
        </div>
    </section>
  );
}

export default Hero