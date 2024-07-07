export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'homeHero',
    },
    {
      name: 'statisticsSection',
      title: 'Statistics Section',
      type: 'statistics',
    },
  ],
}
