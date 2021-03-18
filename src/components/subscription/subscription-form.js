import React, {useState, useRef} from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { setErrors } from "@graphql-tools/utils";
import axios from 'axios'
const SubscriptionFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding-top: 3rem;
`

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`

const SubscribeButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  /* justify-content: center; */
`

const InputWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
    background: inherit;
    border:0;
    border-bottom: 1px solid white;
    height: 2rem;
    color: white;
`

const SubscribeButton = styled.button`
  padding: 1rem;
  border-radius: 0;
  border: 0;
  background: inherit;
  text-decoration: underline;
  color: white;
`
const ErrorLabel = styled.p`
  font-size: 1.1rem;
  visibility: ${props => props.hide ? 'visibility' : 'hidden'};
`
const Label = styled.p`
  color: white;
`
const SubscriptionForm = (props) => {
  const emptyErrorSchema = {
    firstName: '',
    lastName: '',
    email: ''
  }
  const formDataRef = useRef(null)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setError] = useState(emptyErrorSchema);
  const [hasTouched, setHasTouched] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  
  const handleSubmit = async event => {
    event.preventDefault();
    sendPostRequest().then(() => {
      setHasSubmitted(true);
    })
  }
  function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

  const handleInputChange = event => {
    if (!hasTouched) {
      setHasTouched(true);
    }
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name;
    let tempError = errors;
    let tempHasError = false;
    switch (name) {
      case "first_name": {
        tempError.firstName = value.length < 3 ? 'This field requires at least 3 characters' : ''
        setFirstName(value)
        break;
      }
      case "last_name": {
        tempError.lastName = value.length < 3 ? 'This field requires at least 3 characters' : ''
        setLastName(value)
        break
      }
      case "email": {
        tempError.email = value.length < 3 ? 'This field requires at least 3 characters' : ''
        setEmail(value)        
        break
      }
      default:
        break
    }
    let errorList = Object.values(tempError);

    errorList = errorList.filter((item) => {
        return item.length !== 0;
    });

    setHasErrors(errorList.length > 0);
    setError(tempError);

  }

  const sendPostRequest = async () => {
    let formData = new FormData()
    formData.append('first_name', firstName)
    formData.set('last_name', lastName);
    formData.set('email', email);

    axios({
      method: 'post',
      url: '/',
      body: encode({
        "form-name": "subscription_test",
        ...formData
      }),
      data: new URLSearchParams(formData).toString(),
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    }).then((response) => {
      console.log('Response', response)
    }).catch((e) => {
      console.log('Error', e)
    })
  }
  return (
        <SubscriptionFormWrapper ref={formDataRef}>
          <form name="subscription_test" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="subscription_test" />
            <InputsWrapper>
              <InputWrapper>
                <Label>First Name</Label>
                <StyledInput type="text" name="first_name" onChange={handleInputChange} />
                <ErrorLabel hide={errors.firstName}> {errors.firstName ? errors.firstName : '.'}</ErrorLabel>
              </InputWrapper>
              <InputWrapper>
                <Label>Last Name</Label>
                <StyledInput type="text" name="last_name" onChange={handleInputChange} />
                <ErrorLabel hide={errors.lastName}> {errors.lastName ? errors.lastName : '.'}</ErrorLabel>
              </InputWrapper>
              <InputWrapper>
                <Label>Email</Label>
                <StyledInput type="text" name="email" onChange={handleInputChange} />
                <ErrorLabel hide={errors.email}> {errors.email ? errors.email : '.'}</ErrorLabel>
              </InputWrapper>
            </InputsWrapper>
            <SubscribeButtonWrapper>
              <SubscribeButton type="submit" disabled={hasErrors || !hasTouched}> Subscribe </SubscribeButton>
            </SubscribeButtonWrapper>
          </form>
        </SubscriptionFormWrapper>
  )
}

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
    pages: state.pages
  }
}

export default connect(
  mapStateToProps,
  null
)(SubscriptionForm)
