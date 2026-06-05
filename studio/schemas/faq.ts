import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'domanda',
      title: 'Domanda',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'risposta',
      title: 'Risposta',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'ordine',
      title: 'Ordine (numero)',
      type: 'number',
      description: 'Numero per ordinare le FAQ (1 = prima)',
    }),
  ],
  orderings: [
    { title: 'Ordine', name: 'ordineAsc', by: [{ field: 'ordine', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'domanda' },
  },
})
