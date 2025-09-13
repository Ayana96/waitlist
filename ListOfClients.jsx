import { ClientItem } from "./ClientItem"

export function ListOfClients({clients, toggleClientItem, deleteClientItem}){
    return (
        <ul className="list">
    {clients.length == 0 && "No clients on the waitlist"}
    {clients.map(client => {
      return(
        <ClientItem
        key={client.id}
        {...client} 
        toggleClientItem={toggleClientItem} 
        deleteClientItem={deleteClientItem}
        />
      )
    })}
  </ul>
    )
}