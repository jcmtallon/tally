import styled from 'styled-components'

const Header = styled.h1`
  padding-top: 64px;
  padding-bottom: 8px;
`

const H1 = styled.div`
  ${props => props.theme.typography.header.h1}
`
const H2 = styled.div`
  ${props => props.theme.typography.header.h2}
`
const H3 = styled.div`
  ${props => props.theme.typography.header.h3}
`
const H4 = styled.div`
  ${props => props.theme.typography.header.h4}
`
const H5 = styled.div`
  ${props => props.theme.typography.header.h5}
`
const H6 = styled.div`
  ${props => props.theme.typography.header.h6}
`
const H7 = styled.div`
  ${props => props.theme.typography.header.h7}
`

const Lg = styled.div`
  ${props => props.theme.typography.body.lg}
`

const Base = styled.div`
  ${props => props.theme.typography.body.base}
`

const BaseStrong = styled.div`
  ${props => props.theme.typography.body.base.strong}
`

const Md = styled.div`
  ${props => props.theme.typography.body.md}
`

const Sm = styled.div`
  ${props => props.theme.typography.body.sm}
`

const Xs = styled.div`
  ${props => props.theme.typography.body.xs}
`

const Xxs = styled.div`
  ${props => props.theme.typography.body.xxs}
`

const IconsWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  font-size: 2rem;
`

export { H1, H2, H3, H4, H5, H6, H7, Lg, Base, BaseStrong, Md, Sm, Xs, Xxs, IconsWrapper, Header }
