import { scrapeMercadoPago } from "@/lib/scraper";
import { Separator } from "./ui/separator";
import TableYield from "./TableYield";
import FormYield from "./FormYield";

const Yield = async() => {
  const dataYield = await scrapeMercadoPago();

  return (
    <section className="flex flex-col h-screen items-center justify-center">
        <div className="flex flex-col">
          <h2 className="text-2xl text-center">El rendimiento actual es de <span className="font-semibold decoration-solid underline underline-offset-4">{dataYield}%</span></h2>
          <div className="flex py-4">
            <FormYield dataYield={dataYield}/>
            <Separator className="mx-4" orientation="vertical"/>
            <TableYield dataYield={dataYield}/>
          </div>
        </div>
    </section>
  );
}

export default Yield;