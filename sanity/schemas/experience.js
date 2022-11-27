export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'companyName',
        title: 'Company Name',
        type: 'string',
      },
      {
        name: 'jobTitle',
        title: 'JobTitle',
        type: 'string',
      },
      {
        name: 'companyImage',
        title: 'Company Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'company',
        title: 'Company',
        type: 'text',
      },
      {
        name: 'dateStarted',
        title: 'DateStarted',
        type: 'date',
      },
      {
        name: 'dateEnded',
        title: 'DateEnded',
        type: 'date',
      },
      {
        name: 'iscurrentWorkingHere',
        title: 'IscurrentWorkingHere',
        type: 'boolean',
      },
      {
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [
            {
              type: "reference",
              to: { type: "skill" }
            }
          ]
      },
      {
        name: 'points',
        title: 'Points',
        type: 'array',
        of: [
          {
            type: "string",
          }
        ]
      },
  
    ],
  
  }
  