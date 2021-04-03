import React from 'react'
import PropTypes from 'prop-types'
// import FormInput from './FormInput.js'
import { FormInput } from './FormInput.fs.js'
// import FormTextarea from './FormTextarea.js'
import { FormTextarea } from './FormTextarea.fs.js'
// import FormSelect from './FormSelect.js'
import { FormSelect } from './FormSelect.fs.js'
import topics from '../constants/topics.js'
import budgets from '../constants/budgets.js'

class ProjectDetails extends React.Component {
  render() {
    return (
      <div>
        <h2 className="mt-5 mb-3">Project Details</h2>
        <div className="border-cont">
          <div className="row pt-2">
            <div className="col-md-12 mb-3">
              <p>
                Fields marked with <b>*</b> are required.
              </p>
            </div>

            <div className="col-md-6">
              <FormSelect
                name="topic"
                placeholder="Select a topic*"
                onChange={this.props.onInputChange}
                field={this.props.topic}
                options={topics}
              />
            </div>

            <div className="col-md-6">
              <FormSelect
                name="budget"
                placeholder="Select a budget*"
                onChange={this.props.onInputChange}
                field={this.props.budget}
                options={budgets}
              />
            </div>

            <div className="col-md-12">
              <FormInput
                type="text"
                name="subject"
                placeholder="Subject*"
                onChange={this.props.onInputChange}
                field={this.props.subject}
              />
            </div>

            <div className="col-md-12 mb-3 mt-5">
              <h3>Questions</h3>
              <p>
                All questions are optional, but I highly encourage you to answer
                them. They give me insights into your project so that I can
                provide you with the best solution.
              </p>
            </div>

            <div className="col-md-12">
              <FormTextarea
                height="200px"
                name="q1"
                placeholder="1. Describe your business in a few sentences"
                onChange={this.props.onInputChange}
                field={this.props.q1}
              />
            </div>

            <div className="col-md-12">
              <FormTextarea
                name="q2"
                placeholder="2. Do you currently have a website? If so, what is/isn’t working for you?"
                onChange={this.props.onInputChange}
                field={this.props.q2}
              />
            </div>

            <div className="col-md-12">
              <FormTextarea
                name="q3"
                placeholder="3. What are your goals for this project?"
                onChange={this.props.onInputChange}
                field={this.props.q3}
              />
            </div>

            <div className="col-md-12">
              <FormTextarea
                name="q4"
                placeholder="4. Who is your target audience?"
                onChange={this.props.onInputChange}
                field={this.props.q4}
              />
            </div>

            <div className="col-md-12">
              <FormTextarea
                height="200px"
                name="q5"
                placeholder="5. What specific features do you want on the site?"
                onChange={this.props.onInputChange}
                field={this.props.q5}
              />
            </div>

            <div className="col-md-12">
              <FormTextarea
                name="q6"
                placeholder="6. How can I avoid failure?"
                onChange={this.props.onInputChange}
                field={this.props.q6}
              />
            </div>

            <div className="col-md-12">
              <FormTextarea
                name="q7"
                placeholder="7. Who are your main competitors?"
                onChange={this.props.onInputChange}
                field={this.props.q7}
              />
            </div>

            <div className="col-md-12">
              <FormTextarea
                name="q8"
                placeholder="8. What makes you different from your competitors?"
                onChange={this.props.onInputChange}
                field={this.props.q8}
              />
            </div>

            <div className="col-md-12">
              <FormTextarea
                height="200px"
                name="q9"
                placeholder="9. What’s the scope of the project?"
                onChange={this.props.onInputChange}
                field={this.props.q9}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ProjectDetails.propTypes = {
  topic: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  budget: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  subject: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  q1: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  q2: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  q3: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  q4: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  q5: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  q6: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  q7: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  q8: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  q9: PropTypes.shape({
    value: PropTypes.string,
    error: PropTypes.string,
  }),
  onInputChange: PropTypes.func,
}

export default ProjectDetails
