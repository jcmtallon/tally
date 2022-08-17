import { FormSectionTitle } from 'features/form'
import styled from 'styled-components'
import {
  Field as BaseField,
  Input as BaseInput,
  Select as BaseSelect,
  TextArea as BaseTextArea,
} from 'components'

const Container = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-areas:
    'type name name'
    'identification . .'
    'contact_title . .'
    'email email phone'
    'address_title . .'
    'street street street'
    'house_number postal_code city'
    'other_title . .'
    'notes notes notes';

  #type {
    grid-area: type;
  }

  #name {
    grid-area: name;
  }

  #identification {
    grid-area: identification;
  }

  #contact_title {
    grid-area: contact_title;
  }

  #email {
    grid-area: email;
  }

  #phone {
    grid-area: phone;
  }

  #address_title {
    grid-area: address_title;
  }

  #street {
    grid-area: street;
  }

  #house_number {
    grid-area: house_number;
  }

  #postal_code {
    grid-area: postal_code;
  }

  #city {
    grid-area: city;
  }

  #other_title {
    grid-area: other_title;
  }

  #notes {
    grid-area: notes;
  }
`

const Field = styled(BaseField)``

const Select = styled(BaseSelect)``

const Input = styled(BaseInput)``

const SectionTitle = styled(FormSectionTitle)`
  padding-top: 16px;
`

const TextArea = styled(BaseTextArea)``

export { Container, Field, Input, SectionTitle, Select, TextArea }
