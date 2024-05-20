import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "./components/ui/table";

  

const Livre = ({children }) => {
    return ( 
        <>
        <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">id</TableHead>
            <TableHead>titre</TableHead>
            <TableHead>auteur</TableHead>
            <TableHead className="text-right">action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
         {children}
       </TableBody>
            </Table>
        </>
     );
}
 
export default Livre;