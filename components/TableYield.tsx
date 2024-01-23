import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "./ui/table";
import { exampleYields } from "@/utils/utils";

const TableYield = () => {
  return (
    <Table>
      <TableCaption>Rendimientos calculados a 30 días</TableCaption>
      <TableHeader>
        <TableRow className="">
          <TableHead>#</TableHead>
          <TableHead>Inversión</TableHead>
          <TableHead>Rendimiento</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          exampleYields.map(({ id, investment, result }) => (
            <TableRow key={id}>
              <TableCell>#</TableCell>
              <TableCell>{investment.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}</TableCell>
              <TableCell>{result}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
}

export default TableYield;