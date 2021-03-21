import React from 'react'
import PropTypes from 'prop-types'

class FormSelect extends React.Component {
  render() {
    let options = this.props.options.map(option => {
      return (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      )
    })
    options.unshift(
      <option key="" value="">
        {/* {this.props.placeholder} */}
        Open this select menu
      </option>
    )
    return (
      <div className="mb-3">
        <label htmlFor={this.props.name}>{this.props.placeholder}</label>
        <select
          className={
            this.props.field.error ? 'form-select is-invalid' : 'form-select'
          }
          name={this.props.name}
          id={this.props.name}
          value={this.props.field.value}
          onChange={this.props.onChange}
          aria-label={this.props.placeholder}
        >
          {options}
        </select>
        {this.props.field.error && (
          <label className="invalid-feedback" htmlFor={this.props.name}>
            {this.props.field.error}
          </label>
        )}
      </div>
    )
  }
}

FormSelect.propTypes = {
  field: PropTypes.shape({
    error: PropTypes.string,
    value: PropTypes.string,
  }),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FormSelect
