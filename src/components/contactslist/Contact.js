import React from 'react'

import MenuItem from 'material-ui/MenuItem';
import Delete from 'material-ui/svg-icons/action/delete';
import Divider from 'material-ui/Divider'

import AvatarExampleSimple from './AvatarExampleSimple'

const Contact = ({name, surname, email, phone, deleteContact}) => (

    <div>
        <AvatarExampleSimple name={name}/>
        <MenuItem
            primaryText={<div>Email:<br/> {email} <br/> Phone:<br/> {phone}</div>}
            rightIcon={<Delete
                onClick={deleteContact}
            />}
        />

        <Divider/>

    </div>

)

export default Contact