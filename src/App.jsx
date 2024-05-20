import React from 'react'
import Livre from './Livres'
import './App.css'
import { TableCell, TableRow } from './components/ui/table';
import { Button } from './components/ui/button';

function App() {
  const livres = [
    { id: 1, titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry" },
    { id: 2, titre: "Les Misérables", auteur: "Victor Hugo" },
    { id: 3, titre: "coup de pillon", auteur: "George Orwell" }
  ];


  return (
    <>
    <div>
      <Livre>
    {livres.map((livre) => (
       <TableRow key={livre.id}>
       <TableCell className="font-medium"> {livre.id}</TableCell>
       <TableCell>{livre.titre}</TableCell>
       <TableCell> {livre.auteur}</TableCell>
       <TableCell className="text-right">
       <Button variant="outline">supprimer</Button>

       </TableCell>
     </TableRow>
     
     
       
          

      ))}
      </Livre>
    
    </div>
     
    </>
  )
}

export default App
