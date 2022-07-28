import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getClient, Client } from 'services'

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
    <div>
      <h1>Detalles del cliente</h1>
      <div>Name: {}</div>
    </div>
  )
}

export { ClientDetails }
