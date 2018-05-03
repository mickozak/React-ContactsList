import React from 'react'

import List from './List'
import Controls from './Controls'

const styles = {
    margin: '20px'
}

class ContactList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        contacts: [
            {name: 'Michał', surname: 'Kozak', email: 'michalkozak.aiesec@gmail.com', phone: '444-444-444', uid: 1524820880578},
            {name: 'Agnieszka', surname: 'Kozak', email: 'agnieszkakozak@gmail.com', phone: '555-555-555', uid: 1524820880579}
        ],
        nameAdd: '',
        surnameAdd: '',
        emailAdd: '',
        phoneAdd: '',
    }
    this.newContactChangeHandlerName = this.newContactChangeHandlerName.bind(this)
    this.newContactChangeHandlerSurname=this.newContactChangeHandlerSurname.bind(this)
    this.newContactChangeHandlerEmail=this.newContactChangeHandlerEmail.bind(this)
    this.newContactChangeHandlerPhone=this.newContactChangeHandlerPhone.bind(this)
    this.addContact=this.addContact.bind(this)
    this.deleteContact=this.deleteContact.bind(this)
    }

    deleteContact = (contactUid) => {
        const newContacts = this.state.contacts.filter(contact => contactUid !== contact.uid)
        this.setState({
            contacts: newContacts
        })
    }

    newContactChangeHandlerName = (event, newValue) => this.setState({
        nameAdd: newValue
    })
    newContactChangeHandlerSurname = (event, newValue) => this.setState({
        surnameAdd: newValue
    })
    newContactChangeHandlerEmail = (event, newValue) => this.setState({
        emailAdd: newValue
    })
    newContactChangeHandlerPhone = (event, newValue) => this.setState({
        phoneAdd: newValue
    })

    addContact = () => {
        const newContact = {
            name: this.state.nameAdd,
            surname: this.state.surnameAdd,
            email: this.state.emailAdd,
            phone: this.state.phoneAdd,
            uid: Date.now()
        }
        const newContacts = this.state.contacts.concat(newContact)

        this.setState({
            contacts: newContacts,
            newContact: ''
        })
    }

    render(){
        return (
            <div style={styles}>
                <Controls
                    newTaskValue={this.state.newContact}
                    onClickHandler={this.addContact}
                    newNameValue={this.state.nameAdd}
                    onChangeHandlerName={this.newContactChangeHandlerName}
                    newSurnameValue={this.state.surnameAdd}
                    onChangeHandlerSurname={this.newContactChangeHandlerSurname}
                    newEmailValue={this.state.emailAdd}
                    onChangeHandlerEmail={this.newContactChangeHandlerEmail}
                    newPhoneValue = {this.state.phoneAdd}
                    onChangeHandlerPhone={this.newContactChangeHandlerPhone}
                />
                <List
                    deleteContactFunction={this.deleteContact}
                    contactsList={this.state.contacts}
                />
            </div>
        )
    }
}

export default ContactList