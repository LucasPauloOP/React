import React, { Component } from 'react';

import TextInput from '../../../../components/TextInput';
import DoneButton from './taskSchema/DoneButton';
import EditButton from './taskSchema/EditButton';

class TaskSchema extends Component {
    render() {
        return (
            // <div className="box">
                <div className="columns is-mobile is-vcentered">

                    <div className="column is-1">
                        <DoneButton /> 
                    </div>
            
                    <div className="column is-8">
                        <TextInput name={'title'}  className="is-shadowless"  value="Primeira Task de Teste" />
                    </div>

                   <div className="column is-2 ">
                        <EditButton _id='1' />
                    </div>

                </div>
            // </div>    
        )
    }
}

export default TaskSchema;