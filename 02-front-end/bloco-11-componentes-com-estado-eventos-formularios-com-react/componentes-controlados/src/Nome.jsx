import React from 'react';

class Nome extends React.Component {
    render(){
        console.log(this.props.onChange)
        const {value, onChange} = this.props

        return(
            <label>
                Seu Nome:
                <input
                    type="text"
                    name="name"
                    value={value}
                    onChange={ onChange }
                />
            </label>
        )
    }
}

export default Nome;