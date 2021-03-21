import React from 'react'
import PropTypes from 'prop-types'

class Summary extends React.Component {
  getFullName() {
    if (this.props.firstName.value || this.props.lastName.value) {
      return (
        <p className="d-flex justify-content-between summary-item">
          <span>Full name</span>
          <span className="summary-item-value">
            {this.props.firstName.value} {this.props.lastName.value}
          </span>
        </p>
      )
    }
  }

  getField(field, text) {
    if (this.props[field].value) {
      return (
        <p className="d-flex justify-content-between summary-item">
          <span>{text}</span>
          <span className="summary-item-value">{this.props[field].value}</span>
        </p>
      )
    }
  }

  getFullAddress() {
    let output = ''

    if (
      this.props.address.value &&
      (this.props.city.value ||
        this.props.zipCode.value ||
        this.props.country.value)
    ) {
      output += `${this.props.address.value}, `
    } else if (this.props.address.value) {
      output += this.props.address.value
    }

    if (
      this.props.city.value &&
      (this.props.zipCode.value || this.props.country.value)
    ) {
      output += `${this.props.city.value} `
    } else if (this.props.city.value) {
      output += this.props.city.value
    }

    if (this.props.zipCode.value && this.props.country.value) {
      output += `${this.props.zipCode.value}, `
    } else if (this.props.zipCode.value) {
      output += this.props.zipCode.value
    }

    if (this.props.country.value) {
      output += this.props.country.value
    }

    if (
      this.props.address.value ||
      this.props.city.value ||
      this.props.zipCode.value ||
      this.props.country.value
    ) {
      return (
        <p className="d-flex justify-content-between summary-item">
          <span>Address</span>
          <span className="summary-item-value">{output}</span>
        </p>
      )
    }
  }

  render() {
    return (
      <div className="pb-2">
        <h2 className="mt-0 mb-2">Summary</h2>

        <div className="">
          {this.getFullName()}
          {this.getField('companyName', 'Company')}
          {this.getField('vatNumber', 'VAT number')}
          {this.getFullAddress()}
          {this.getField('emailAddress', 'Email address')}
          {this.getField('phone', 'Phone')}
          {this.getField('topic', 'Topic')}
          {this.getField('budget', 'Budget')}
          {this.getField('subject', 'Subject')}
        </div>

        <div className="">
          <div className="mb-3 mt-5">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                name="gdpr_consent"
                type="checkbox"
                value={this.props.gdprConsent.value}
                id="gdpr_consent"
                onChange={this.props.onInputChange}
              />
              <label className="form-check-label" htmlFor="gdpr_consent">
                I have read the{' '}
                <a className="link-light" href="/privacy">
                  Privacy Notice
                </a>{' '}
                and I give my permission to be contacted with regard to this
                form.
              </label>
            </div>
          </div>

          <div className="text-end text-lg-center mb-2">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!this.props.gdprConsent.value}
            >
              Launch <i className="fa fa-fw fa-rocket"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

Summary.propTypes = {
  firstName: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  lastName: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  companyName: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  vatNumber: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  address: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  city: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  zipCode: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  country: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  emailAddress: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  phone: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  gdprConsent: PropTypes.shape({
    value: PropTypes.boolean,
    error: PropTypes.string,
  }),
  onInputChange: PropTypes.func,
}

export default Summary
