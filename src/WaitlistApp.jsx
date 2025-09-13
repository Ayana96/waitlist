import { AddWaitlistForm } from "./AddWaitlistForm"
import "./styles.css"
import { useEffect, useState } from "react"
import { ListOfClients } from "./ListOfClients"

export default function WaitlistApp(){
  const [clients, setClient] = useState(() => {
    //local storage
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  const [currentPage, setCurrentPage] = useState("form")

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(clients))
  }, [clients])

  function addToWaitlist(client){
    setClient((currentClients) => {
      return [
        ...currentClients, {id: crypto.randomUUID(), 
                        ...client, 
                        completed: false},
      ]
    })
    setCurrentPage("list")
  }


  function toggleClientItem(id, completed){
    setClient(currentClients => {
      return currentClients.map(client => {
        if(client.id == id) {
          return {...client, completed}
        }
        return client
      })
    })
  }

  function deleteClientItem(id){
    setClient(currentClients => {
      return currentClients.filter(client => client.id !== id)
    })
  }

  //jsx
  return (
    <>
    <h1 className="header">Waitlist App</h1>

      {/* Nav buttons to switch between pages */}
      <div className="nav-buttons">
        <button onClick={() => setCurrentPage("form")}>Add Client</button>
        <button onClick={() => setCurrentPage("list")}>View Waitlist</button>
      </div>

      {currentPage === "form" && <AddWaitlistForm onSubmit={addToWaitlist} />}
      {currentPage === "list" && (
        <ListOfClients
          clients={clients}
          toggleClientItem={toggleClientItem}
          deleteClientItem={deleteClientItem}
        />
      )}
    {/*<AddWaitlistForm onSubmit={addToWaitlist}/>
    <h1 className="header">Waitlist</h1>
    <ListOfClients clients={clients} toggleClientItem={toggleClientItem} deleteClientItem={deleteClientItem}/>*/}
  </>
  )
}