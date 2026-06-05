import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hcsw7wx5',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET   || 'production',
  apiVersion: '2024-01-01',
  useCdn:     false,
  token:      process.env.SANITY_API_TOKEN,
})

// Query helpers
export async function getFAQ() {
  return sanityClient.fetch(
    `*[_type == "faq"] | order(ordine asc) { domanda, risposta }`
  )
}

export async function getHomepage() {
  return sanityClient.fetch(
    `*[_type == "homepage"][0]`
  )
}

export async function getServizi() {
  return sanityClient.fetch(
    `*[_type == "servizio"] | order(ordine asc)`
  )
}
