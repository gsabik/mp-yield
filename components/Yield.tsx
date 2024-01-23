import { scrapeMercadoPago } from "@/lib/scraper";
import TableYield from "./TableYield";

const Yield = async() => {
  const dataYield = await scrapeMercadoPago();

  return (
    <section className="flex flex-col h-screen items-center justify-center">
        <div className="flex flex-col">
          <h2 className="text-2xl">El rendimiento actual es de <span className="font-semibold">{dataYield}%</span></h2>
          <div className="flex flex-row">
            <TableYield/>
          </div>
        </div>
    </section>
  );
}

export default Yield;