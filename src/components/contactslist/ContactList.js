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
            {name: 'Michał Kozak', email: 'kozak_m@outlook.com', phone: '+48 739-066-120', uid: 1524820880578},
            {name: 'Agnieszka Nowak', email: 'agnieszkanowak@gmail.com', phone: '+48 555-555-555', uid: 1524820880579}
        ],
        nameAdd: '',
        surnameAdd: '',
        emailAdd: '',
        phoneAdd: '',
    }
    this.newContactChangeHandlerName = this.newContactChangeHandlerName.bind(this)
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

    newContactChangeHandlerName = (event,newValue) => this.setState({
        nameAdd: newValue
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

            email: this.state.emailAdd,
            phone: this.state.phoneAdd,
            uid: Date.now()
        }
        const newContacts = this.state.contacts.concat(newContact)

        this.setState({
            contacts: newContacts
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