import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = ({}) => (<div>
    <TextField
        id='outlined-dense-multiline'
        label='New Todo'
        margin='dense'
        variant='outlined'
        multiline
        rowsMax='4'
    />
</div>);

export default InputItem;