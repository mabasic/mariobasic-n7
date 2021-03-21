import React from 'react'
import PropTypes from 'prop-types'

class FormInput extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <label htmlFor={this.props.name}>{this.props.placeholder}</label>
        <input
          className={
            this.props.field.error ? 'form-control is-invalid' : 'form-control'
          }
          type={this.props.type}
          name={this.props.name}
          id={this.props.name}
          value={this.props.field.value}
          onChange={this.props.onChange}
          // placeholder={this.props.placeholder}
        />
        {this.props.field.error && (
          <label className="invalid-feedback" htmlFor={this.props.name}>
            {this.props.field.error}
          </label>
        )}
      </div>
    )
  }
}

FormInput.propTypes = {
  field: PropTypes.shape({
    error: PropTypes.string,
    value: PropTypes.string,
  }),
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default FormInput
