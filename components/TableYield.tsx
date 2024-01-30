import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "./ui/table";
import { exampleYields, calculateYield } from "@/utils/utils";

interface Props {
  dataYield: number
}

const TableYield = ({ dataYield }: Props) => {
  return (
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
              <TableCell>{calculateYield(investment, dataYield)}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
}

export default TableYield;