import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  // Documento singolo — una sola homepage
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'heroTitolo',
      title: 'Hero — Titolo principale',
      type: 'string',
      description: 'Es: Il Tuo Brand Vale Quanto Riesci a Farlo Capire.',
    }),
    defineField({
      name: 'heroSottotitolo',
      title: 'Hero — Sottotitolo',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'problemaTitolo1',
      title: 'Sezione Problema — Prima frase',
      type: 'string',
      description: 'Es: Le imprese italiane non hanno un problema di visibilità.',
    }),
    defineField({
      name: 'problemaTitolo2',
      title: 'Sezione Problema — Seconda frase (in oro)',
      type: 'string',
      description: 'Es: Hanno un problema di forma.',
    }),
    defineField({
      name: 'ctaTitolo',
      title: 'CTA finale — Titolo',
      type: 'string',
    }),
    defineField({
      name: 'ctaSottotitolo',
      title: 'CTA finale — Sottotitolo',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: { title: 'heroTitolo' },
    prepare: () => ({ title: 'Homepage' }),
  },
})
