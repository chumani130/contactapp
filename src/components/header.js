import React from 'react'

const header = ({ toogleModal, nbOfContacts }) => {
  return (
    <header className='header'>
        <div className='container'>
            <h3>Contact List({nbOfContacts})</h3>
            <button onClick={() => toogleModal(true)} className='btn'>
                <i className='bi bi-plus-quare'></i>Add New Contact
                </button>
        </div>

    </header>
  )
}

export default header