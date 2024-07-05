import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'nextgen-Code.sydney',

  projectId: '8zqunlka',
  dataset: 'codesydneywebsite',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
