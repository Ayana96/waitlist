import { useState } from "react"

export function AddWaitlistForm({onSubmit}) {
  const [formData, setFormData] = useState({
    name: "",
    service: "Manicure",
    specialist: "Iryna",
    phone: "",
    dateTime: ""
  })

  //handles changes in inputs
  function handleChange(e) {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }

  //const [newItem, setNewItem] = useState("") 

  function handleSubmit(e) {
    //prevent from refreshing
    e.preventDefault()
    //if(newItem == "") return
    if(formData.new === "" || formData.phone === "" || formData.dateTime === "")
      return 

    onSubmit(formData)

    //reset form fields
    setFormData({
      name: "",
      service: "Manicure",
      specialist: "Iryna",
      phone: "",
      dateTime: ""
    })
    //onSubmit(newItem)
    //setNewItem("")
  }
  
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} required />

        <label>Service</label>
        <select name="service" value={formData.service} onChange={handleChange}>
          <option value="Manicure">Manicure</option>
          <option value="Pedicure">Pedicure</option>
        </select>

        <label>Specialist</label>
        <select name="specialist" value={formData.specialist} onChange={handleChange}>
          <option value="Alice">Alice</option>
          <option value="Bella">Bella</option>
          <option value="Cindy">Cindy</option>
        </select>

        <label>Phone</label>
        <input name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Date & Time</label>
        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          required
        />

        <button className="btn">Add to Waitlist</button>
      </div>
    </form>
  )
  
    /*return (
        <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">Add Yourself</label>
      <input 
        value={newItem} 
        //whatever you change, it saves and returns the exact
        //value you inputted
        onChange={e => setNewItem(e.target.value)} 
        type="text" 
        id="item"></input>
    <button className="btn">Add</button>
    </div>
  </form>
    )
  */
}