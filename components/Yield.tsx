import { scrapeMercadoPago } from "@/lib/scraper";
import { Separator } from "./ui/separator";
import TableYield from "./TableYield";
import FormYield from "./FormYield";

const Yield = async() => {
  const dataYield = await scrapeMercadoPago();

  return (
    <section className="flex flex-col h-screen items-center justify-center" id="yield">
        <div className="flex flex-col">
          <h2 className="text-2xl text-center">El rendimiento actual es de <span className="font-semibold decoration-solid underline underline-offset-4">{dataYield}%</span></h2>
          <div className="flex flex-col md:flex-row py-4">
            <FormYield dataYield={dataYield}/>
            <Separator className="mx-4 hidden md:block" orientation="vertical"/>
            <Separator className="my-4 block md:hidden" orientation="horizontal"/>
            <TableYield dataYield={dataYield}/>
          </div>
        </div>
    </section>
  );
}

export default Yield;