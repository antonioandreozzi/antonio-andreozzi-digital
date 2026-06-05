import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'servizio',
  title: 'Servizi',
  type: 'document',
  fields: [
    defineField({
      name: 'codice',
      title: 'Codice (es. DIAGNOSI)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'prezzo',
      title: 'Prezzo (es. €497)',
      type: 'string',
    }),
    defineField({
      name: 'formato',
      title: 'Formato (es. Sessione unica 1:1 · 3 ore)',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline breve',
      type: 'string',
    }),
    defineField({
      name: 'descrizione',
      title: 'Descrizione',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'postiDisponibili',
      title: 'Posti disponibili (es. 2 posti disponibili questo mese)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'URL pagina (es. /diagnosi)',
      type: 'slug',
      options: { source: 'codice' },
    }),
    defineField({
      name: 'ordine',
      title: 'Ordine visualizzazione',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'codice', subtitle: 'prezzo' },
  },
})
