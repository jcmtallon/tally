import { DashboardLayout } from 'features/dashboard'
import React from 'react'
import * as S from './InvoiceList.styles'

interface InvoiceListProps {
  className?: string
}

function InvoiceList(props: InvoiceListProps) {
  return (
    <>
      <DashboardLayout>
        <S.Wrapper className={props.className}>
          <S.TopRow>
            <S.Header>Search Invoice</S.Header>
          </S.TopRow>
          Some form Some Table
        </S.Wrapper>
      </DashboardLayout>
    </>
  )
}

export { InvoiceList }
