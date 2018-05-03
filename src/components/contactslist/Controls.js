import React from 'react'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'

const style = {
    textAlign: 'center',
    display: 'inline-block',
};

const Controls = ({newNameValue, onChangeHandlerName, newSurnameValue, onChangeHandlerSurname, onClickHandler,
                  newEmailVale, onChangeHandlerEmail, newPhoneValue, onChangeHandlerPhone}) => (
    <Paper style={style} zDepth={1}>
        <TextField
            onChange={onChangeHandlerName}
            value={newNameValue}
            name={'new-name'}
            placeholder={'Name...'}
            fullWidth={true}
        />
        <Divider/>
        <TextField
            onChange={onChangeHandlerSurname}
            value={newSurnameValue}
            name={'new-surname'}
            placeholder={'Surname...'}
            fullWidth={true}
        />
        <Divider/>
        <TextField
            onChange={onChangeHandlerEmail}
            value={newEmailVale}
            name={'new-email'}
            placeholder={'Email...'}
            fullWidth={true}
        />
        <Divider/>
        <TextField
            onChange={onChangeHandlerPhone}
            value={newPhoneValue}
            name={'new-phone'}
            placeholder={'Phone...'}
            fullWidth={true}
        />
        <RaisedButton
            onClick={onClickHandler}
            primary={true}
            fullWidth={true}
            label={'ADD'}
        />
    </Paper>
)

export default Controls