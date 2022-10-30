import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { clients as apiClients, Client } from 'services'
import { ClientEdition } from './ClientEdition'

function ClientDetails() {
  const [client, setClient] = useState<Client | null>(null)

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

  return <ClientEdition client={client} />
}

export { ClientDetails }
