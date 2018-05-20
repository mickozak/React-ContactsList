import React from 'react'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'

const style = {
    display: 'inline-block',
    marginBottom: '20px',
    width: '100%'
};

const Controls = (props) => (
    <Paper style={style} zDepth={1}>
        <TextField
            onChange={props.onChangeHandlerName}
            value={props.newNameValue}
            name={'new-name'}
            placeholder={'Name/Surname...'}
            fullWidth={true}
        />
        <Divider/>
        <TextField
            onChange={props.onChangeHandlerEmail}
            value={props.newEmailVale}
            name={'new-email'}
            placeholder={'Email...'}
            fullWidth={true}
        />
        <Divider/>
        <TextField
            onChange={props.onChangeHandlerPhone}
            value={props.newPhoneValue}
            name={'new-phone'}
            placeholder={'Phone...'}
            fullWidth={true}
        />
        <RaisedButton
            onClick={props.onClickHandler}
            primary={true}
            fullWidth={true}
            label={'ADD'}
        />
    </Paper>
)

export default Controls