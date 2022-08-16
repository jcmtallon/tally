import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getClient, Client } from 'services'
import * as S from './ClientDetails.styles'

function ClientDetails() {
  const [clientDetails, setClientDetails] = useState<Client | null>(null)

  const { clientId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      if (!clientId) return
      const data = await getClient(clientId)
      setClientDetails(data)
    }

    fetchData()
  }, [clientId])

  if (!clientDetails) return <>Loading!</>

  return (
    <S.PanelLayout title="Detalles de Cliente" footer="Editar">
      Info
    </S.PanelLayout>
  )
}

export { ClientDetails }
