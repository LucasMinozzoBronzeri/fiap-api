import Image from "next/image";
import Person from "./componentes/Person"

const dataPerson = [
  {
    name: "Lucas",
    address: "Rua da rua da rua",
    phone: "(11) 99999 9999",
    email: "lucas@gmail.com"
  },
  {
    name: "Marcelo",
    address: "Rua da rua",
    phone: "(11) 99999 9998",
    email: "marcelo@gmail.com"
  },
  {
    name: "Diego",
    address: "Rua da rua da rua do lado da rua",
    phone: "(11) 99999 9988",
    email: "diego@gmail.com"
  },
  {
    name: "",
    address: "",
    phone: "",
    email: ""
  },
];

export default function Home() {
  return (
    <main>
      <Person/>
    </main>
  );
}
