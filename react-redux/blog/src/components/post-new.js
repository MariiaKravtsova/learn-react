import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

class PostNew extends Component {
  renderField = (field) => {
    const { touched, error } = field.meta
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className='form-control' {...field.input} />
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit = (values) => {
    console.log(values)
  } 

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          label='Title'
          name='title'
          component={this.renderField}
        />
        <Field
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field
          label='Contents'
          name='contents'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link className='btn btn-danger' to='/' style={{margin: '10px'}}>Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}

  if (!values.title) {
    errors.title = 'Enter a title!'
  }

  if (!values.categories) {
    errors.categories = 'Enter a category.'
  }

  if (!values.contents) {
    errors.contents = 'Some content required.'
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostNew)