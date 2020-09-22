import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error }} = field;
        const className = `form-control ${ touched && error ? 'border border-danger' : "" }`;
       return(
            <div className='form-group'>
                <label htmlFor="">{field.label}</label>
                <input 
                    className={className}
                    type='text'
                    {...field.input}
                />
                <div className="text-danger">
                    {touched ? error : ""}
                </div>
            </div> 
       ); 
    }

   onSubmit(values) {
       this.props.createPost(values, () => {
           this.props.history.push('/');
       });
   }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label='Title for Post'
                    name='title'
                    component={this.renderField}
                />
                <Field 
                    label='Categories'
                    name='categories'
                    component={this.renderField}
                />
                <Field 
                    label='Post Content'
                    name='content'
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/' className="btn btn-danger ml-2">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    // Validate the inputs from 'values'
    if (!values.title) {
        errors.title = 'Enter a title';
    }
    if (!values.categories) {
        errors.categories = 'Enter some categories';
    }
    if (!values.content) {
        errors.content = 'Enter some content';
    }


    // if errors is empty, the form is fine to submit.
    // If errors has *any* propertiesm, redux form assumees form is invalid.
    return errors;
}


export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(
    connect(null, {createPost})(PostsNew)
);
