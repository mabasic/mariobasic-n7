import React from 'react'
import PropTypes from 'prop-types'

class FormTextarea extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <label htmlFor={this.props.name}>{this.props.placeholder}</label>
        <textarea
          style={{ height: this.props.height ?? '100px' }}
          className={
            this.props.field.error ? 'form-control is-invalid' : 'form-control'
          }
          name={this.props.name}
          value={this.props.field.value}
          onChange={this.props.onChange}
          // placeholder={this.props.placeholder}
        ></textarea>
        {this.props.field.error && (
          <label className="invalid-feedback" htmlFor={this.props.name}>
            {this.props.field.error}
          </label>
        )}
      </div>
    )
  }
}

FormTextarea.propTypes = {
  field: PropTypes.shape({
    error: PropTypes.string,
    value: PropTypes.string,
  }),
  name: PropTypes.string,
  height: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default FormTextarea
