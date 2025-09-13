export function ClientItem({id, completed, name, service, specialist, phone,
                            dateTime, toggleClientItem, deleteClientItem}){
  return (
    <li className="client-item">
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleClientItem(id, e.target.checked)}
        />

        <strong>{name}</strong> — {service} with {specialist}<br />
         {phone} | {new Date(dateTime).toLocaleString()}
      </label>

      <button onClick={() => deleteClientItem(id)} className="btn-danger">
        Delete
      </button>
    </li>
  )
    
    
  /*return <li>
          <label >
            <input type="checkbox" 
            checked={completed}
            onChange={e => toggleClientItem(id, e.target.checked)}
            />
            {title}
          </label>
          <button 
          onClick={() => deleteClientItem(id)}
          className="btn-danger"> Delete </button>
        </li>
        */
}