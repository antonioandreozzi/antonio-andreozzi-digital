import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name:    'we-move-markets',
  title:   'We Move Markets',
  projectId: 'hcsw7wx5',
  dataset:   'production',
  plugins: [structureTool(), visionTool()],
  schema:  { types: schemaTypes },
})
