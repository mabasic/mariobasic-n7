import React from 'react'
import PropTypes from 'prop-types'
// import FormInput from './FormInput.js'
import { FormInput } from './FormInput.fs.js'
// import FormSelect from './FormSelect.js'
import { FormSelect } from './FormSelect.fs.js'
import countries from '../constants/countries.js'

class ClientDetails extends React.Component {
  render() {
    return (
      <div>
        <h2 className="mt-0 mb-3">
          {/* Client Details */}Tell Me About Yourself
        </h2>
        <div className="border-cont">
          <div className="row pt-2">
            <div className="col-md-12 mb-3">
              <p>
                Fields marked with <b>*</b> are required.
              </p>
            </div>

            <div className="col-md-6">
              <FormInput
                type="text"
                name="first_name"
                placeholder="First Name*"
                onChange={this.props.onInputChange}
                field={this.props.firstName}
              />
            </div>

            <div className="col-md-6">
              <FormInput
                type="text"
                name="last_name"
                placeholder="Last Name*"
                onChange={this.props.onInputChange}
                field={this.props.lastName}
              />
            </div>

            <div className="col-md-12">
              <FormInput
                type="text"
                name="company_name"
                placeholder="Company Name"
                onChange={this.props.onInputChange}
                field={this.props.companyName}
              />
            </div>

            <div className="col-md-12">
              <FormInput
                type="text"
                name="vat_number"
                placeholder="VAT Number"
                onChange={this.props.onInputChange}
                field={this.props.vatNumber}
              />
            </div>

            <div className="col-md-12">
              <FormInput
                type="text"
                name="address"
                placeholder="Address*"
                onChange={this.props.onInputChange}
                field={this.props.address}
              />
            </div>

            <div className="col-md-6">
              <FormInput
                type="text"
                name="city"
                placeholder="City / Town*"
                onChange={this.props.onInputChange}
                field={this.props.city}
              />
            </div>

            <div className="col-md-6">
              <FormInput
                type="text"
                name="zip_code"
                placeholder="Zip Code*"
                onChange={this.props.onInputChange}
                field={this.props.zipCode}
              />
            </div>

            <div className="col-md-12">
              <FormSelect
                name="country"
                placeholder="Select a country*"
                onChange={this.props.onInputChange}
                field={this.props.country}
                options={countries}
              />
            </div>

            <div className="col-md-6">
              <FormInput
                type="email"
                name="email_address"
                placeholder="Email Address*"
                onChange={this.props.onInputChange}
                field={this.props.emailAddress}
              />
            </div>

            <div className="col-md-6">
              <FormInput
                type="tel"
                name="phone"
                placeholder="Phone*"
                onChange={this.props.onInputChange}
                field={this.props.phone}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ClientDetails.propTypes = {
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
  onInputChange: PropTypes.func,
}

export default ClientDetails
