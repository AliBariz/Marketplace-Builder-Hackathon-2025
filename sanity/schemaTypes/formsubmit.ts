// schemas/formData.js (or whatever your schema is)
export default {
    name: 'formData',
    type: 'document',
    title: 'Form Data',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
      {
        name: 'subject',
        type: 'string',
        title: 'Subject',
      },
      {
        name: 'message',
        type: 'text',
        title: 'Message',
      },
    ],
  };
  