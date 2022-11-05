import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { clients as apiClients, Client } from 'services'
import { ClientEdition } from './ClientEdition'
import { ClientDetailsDisplay } from './ClientDetailsDisplay'

interface ClientDetailsProps {
  onClientUpdated?: () => void
}

function ClientDetails(props: ClientDetailsProps) {
  const { onClientUpdated } = props
  const [client, setClient] = useState<Client | null>(null)
  const [isEditMode, setIsEditMode] = useState<boolean>(false)

  const { clientId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      if (!clientId) return
      const data = await apiClients.get(clientId)
      setClient(data)
    }

    fetchData()
  }, [clientId])

  if (!client) return <>Loading!</>
  if (!isEditMode) return <ClientDetailsDisplay client={client} onEditModeClick={() => setIsEditMode(true)} />

  return <ClientEdition client={client} onClientUpdated={onClientUpdated} />
}

export { ClientDetails }
export type { ClientDetailsProps }
