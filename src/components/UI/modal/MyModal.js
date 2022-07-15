import React from 'react'
import Classes from './MyModal.module.css'

const MyModal = ({children, modal, setModal}) => { 

    const modalClasses = [Classes.myModal ]

    if(modal){
        modalClasses.push(Classes.active)
    }
    return (
        <div className={modalClasses.join(' ')} onClick={ () => setModal(false)}> 
        <div className={Classes.myModalContent} 
        onClick={ (e) => e.stopPropagation() } 
        >
            {children}
        </div>
    </div>
  )
}



export default MyModal