import Key from "../Key"

interface Props {
    name: string;
    address: string;
    phone: string;
    email: string;
}

const Person = (props: Props)=>{
    return(
    <div className="person">
        <Key field="Nome" value="Primeiro nome"/>
        <Key field="Endereço" value="Meu endereço"/>
        <Key field="Telefone" value="(11) 99999 9999"/>
        <Key field="Email" value="nome@gmail.com"/>
    </div>
    )
}

export default Person