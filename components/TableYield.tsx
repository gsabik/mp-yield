import { exampleYields, calculateYield } from "@/utils/utils";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "./ui/table";

interface Props {
  dataYield: number
}

const TableYield = ({ dataYield }: Props) => {
  return (
    <div className="space-y-4">
      <h3>Rendimientos de referencia</h3>
      <Table>
        <TableCaption>Rendimientos calculados a 30 días</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Inversión</TableHead>
            <TableHead>Rendimiento</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            exampleYields.map(({ id, investment }) => (
              <TableRow key={id}>
                <TableCell>#</TableCell>
                <TableCell>{investment.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</TableCell>
                <TableCell>{calculateYield(investment, dataYield).toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
}

export default TableYield;