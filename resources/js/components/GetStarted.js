import React from 'react'
// import ClientDetails from './ClientDetails.js'
import { ClientDetails } from './ClientDetails.fs.js'
import ProjectDetails from './ProjectDetails.js'
// import Summary from './Summary.js'
import { Summary } from './Summary.fs.js'

export default class GetStarted extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sent: false,
      form_fields: {
        first_name: {
          value: '',
          error: '',
        },
        last_name: {
          value: '',
          error: '',
        },
        company_name: {
          value: '',
          error: '',
        },
        vat_number: {
          value: '',
          error: '',
        },
        address: {
          value: '',
          error: '',
        },
        city: {
          value: '',
          error: '',
        },
        zip_code: {
          value: '',
          error: '',
        },
        country: {
          value: '',
          error: '',
        },
        email_address: {
          value: '',
          error: '',
        },
        phone: {
          value: '',
          error: '',
        },
        topic: {
          value: '',
          error: '',
        },
        budget: {
          value: '',
          error: '',
        },
        subject: {
          value: '',
          error: '',
        },
        q1: {
          value: '',
          error: '',
        },
        q2: {
          value: '',
          error: '',
        },
        q3: {
          value: '',
          error: '',
        },
        q4: {
          value: '',
          error: '',
        },
        q5: {
          value: '',
          error: '',
        },
        q6: {
          value: '',
          error: '',
        },
        q7: {
          value: '',
          error: '',
        },
        q8: {
          value: '',
          error: '',
        },
        q9: {
          value: '',
          error: '',
        },
        gdpr_consent: {
          value: false,
          error: '',
        },
      },
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    let form_fields = this.state.form_fields
    form_fields[name].error = ''
    form_fields[name].value = value

    this.setState(form_fields)
  }

  clearErrors() {
    let form_fields = this.state.form_fields

    for (let field in form_fields) {
      form_fields[field].error = ''
    }

    this.setState(form_fields)
  }

  async handleSubmit(event) {
    event.preventDefault()

    if (this.state.form_fields.gdpr_consent.value == false) {
      return
    }

    this.clearErrors()

    const response = await fetch('/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // // 'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRF-TOKEN': document.getElementsByName('csrf-token')[0].content,
        // 'X-Requested-With': 'XMLHttpRequest', // Maybe I don't need this now?
      },
      body: JSON.stringify({
        first_name: this.state.form_fields.first_name.value,
        last_name: this.state.form_fields.last_name.value,
        company_name: this.state.form_fields.company_name.value,
        vat_number: this.state.form_fields.vat_number.value,
        address: this.state.form_fields.address.value,
        city: this.state.form_fields.city.value,
        zip_code: this.state.form_fields.zip_code.value,
        country: this.state.form_fields.country.value,
        email_address: this.state.form_fields.email_address.value,
        phone: this.state.form_fields.phone.value,
        topic: this.state.form_fields.topic.value,
        budget: this.state.form_fields.budget.value,
        subject: this.state.form_fields.subject.value,
        q1: this.state.form_fields.q1.value,
        q2: this.state.form_fields.q2.value,
        q3: this.state.form_fields.q3.value,
        q4: this.state.form_fields.q4.value,
        q5: this.state.form_fields.q5.value,
        q6: this.state.form_fields.q6.value,
        q7: this.state.form_fields.q7.value,
        q8: this.state.form_fields.q8.value,
        q9: this.state.form_fields.q9.value,
        gdpr_consent: this.state.form_fields.gdpr_consent.value,
      }),
    })

    if (response.ok) {
      this.setState({
        sent: true,
      })
    }
    // Handle validation. Expects data.errors to exist.
    else if (response.status === 422) {
      const data = await response.json() // This can blow up if the response is not valid json.

      let form_fields = this.state.form_fields

      for (const [key, value] of Object.entries(data.errors)) {
        // set the first error for the field as the error message.
        form_fields[key].error = value[0]
      }

      this.setState(form_fields)
    }
    // Handle CSRF token mismatch.
    else if (response.status === 419) {
      alert('Session expired. The page is going to refresh. Try again.')
      window.location.reload()
    } else {
      alert(
        'An unexpected error has occured! Send me an email to report this. Thank you.'
      )
      window.location.reload()
    }
  }

  render() {
    return (
      <div>
        {this.state.sent && (
          <div className="row mb-4">
            <div className="col-lg-4 text-center mb-5">
              <i
                aria-hidden="true"
                className="fas fa-globe-europe start-success-icon"
              ></i>
            </div>
            <div className="col-lg-8">
              <h2 className="display-2">Success</h2>
              <p className="lead">Thank you for trusting me.</p>
              <p>
                I have received your project details and I will contact you as
                soon as possible.
              </p>
            </div>
          </div>
        )}
        {!this.state.sent && (
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-lg-7">
                <ClientDetails
                  onInputChange={this.handleInputChange}
                  firstName={this.state.form_fields.first_name}
                  lastName={this.state.form_fields.last_name}
                  companyName={this.state.form_fields.company_name}
                  vatNumber={this.state.form_fields.vat_number}
                  address={this.state.form_fields.address}
                  city={this.state.form_fields.city}
                  zipCode={this.state.form_fields.zip_code}
                  country={this.state.form_fields.country}
                  emailAddress={this.state.form_fields.email_address}
                  phone={this.state.form_fields.phone}
                />
                <ProjectDetails
                  onInputChange={this.handleInputChange}
                  topic={this.state.form_fields.topic}
                  budget={this.state.form_fields.budget}
                  subject={this.state.form_fields.subject}
                  q1={this.state.form_fields.q1}
                  q2={this.state.form_fields.q2}
                  q3={this.state.form_fields.q3}
                  q4={this.state.form_fields.q4}
                  q5={this.state.form_fields.q5}
                  q6={this.state.form_fields.q6}
                  q7={this.state.form_fields.q7}
                  q8={this.state.form_fields.q8}
                  q9={this.state.form_fields.q9}
                />
              </div>
              <div className="col-lg-5 mt-5 mt-sm-0">
                <Summary
                  onInputChange={this.handleInputChange}
                  firstName={this.state.form_fields.first_name}
                  lastName={this.state.form_fields.last_name}
                  companyName={this.state.form_fields.company_name}
                  vatNumber={this.state.form_fields.vat_number}
                  address={this.state.form_fields.address}
                  city={this.state.form_fields.city}
                  zipCode={this.state.form_fields.zip_code}
                  country={this.state.form_fields.country}
                  emailAddress={this.state.form_fields.email_address}
                  phone={this.state.form_fields.phone}
                  topic={this.state.form_fields.topic}
                  budget={this.state.form_fields.budget}
                  subject={this.state.form_fields.subject}
                  gdprConsent={this.state.form_fields.gdpr_consent}
                />
              </div>
            </div>
          </form>
        )}
      </div>
    )
  }
}
