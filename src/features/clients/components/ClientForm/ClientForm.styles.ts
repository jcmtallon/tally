import { FormSectionTitle, FormTextField, FormSelectField, FormTextAreaField } from 'features/form'
import styled from 'styled-components'
import { Field as BaseField, Input as BaseInput } from 'components'

const FormContainer = styled.form`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-areas:
    'type name name'
    'taxId . .'
    'contactTitle . .'
    'mail mail phone'
    'addressTitle . .'
    'street street street'
    'houseNumber postalCode city'
    'otherTitle . .'
    'notes notes notes';

  #type {
    grid-area: type;
  }

  #name {
    grid-area: name;
  }

  #taxId {
    grid-area: taxId;
  }

  #contactTitle {
    grid-area: contactTitle;
  }

  #mail {
    grid-area: mail;
  }

  #phone {
    grid-area: phone;
  }

  #addressTitle {
    grid-area: addressTitle;
  }

  #street {
    grid-area: street;
  }

  #houseNumber {
    grid-area: houseNumber;
  }

  #postalCode {
    grid-area: postalCode;
  }

  #city {
    grid-area: city;
  }

  #otherTitle {
    grid-area: otherTitle;
  }

  #notes {
    grid-area: notes;
  }
`

const Field = styled(BaseField)``

const SelectField = styled(FormSelectField)``

const TextField = styled(FormTextField)``

const TextAreaField = styled(FormTextAreaField)``

const Input = styled(BaseInput)``

const SectionTitle = styled(FormSectionTitle)`
  padding-top: 16px;
`

export { FormContainer, TextField, Field, Input, SectionTitle, SelectField, TextAreaField }
