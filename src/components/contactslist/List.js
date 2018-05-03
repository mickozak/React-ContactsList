import React from 'react'

import Contact from './Contact'
import Paper from 'material-ui/Paper'

const List = ({contactsList, deleteContactFunction}) => (

    <Paper>
        {
            contactsList
                .map(contact => (
                    <Contact
                        name={contact.name}
                        surname={contact.surname}
                        email={contact.email}
                        phone={contact.phone}
                        deleteContact={() => deleteContactFunction(contact.uid)}
                    />
                ))
        }
    </Paper>
)

export default List