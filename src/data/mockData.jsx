export const mockClients = [
  {
    id: 20,
    clientName: 'John Doe',
    clientType: 'Individual',
    email: 'johndoe@email.com',
    status: 'active',
    updatedBy: 'hello world',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  },
  {
    id: 21,
    clientName: 'Test Test',
    clientType: 'Individual',
    email: 'test@test.com',
    status: 'active',
    updatedBy: 'hello world',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-18'
  },
  {
    id: 22,
    clientName: 'Jane Smith',
    clientType: 'Company',
    email: 'jane.smith@company.com',
    status: 'active',
    updatedBy: 'admin',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-15'
  },
  {
    id: 23,
    clientName: 'Acme Corporation',
    clientType: 'Company',
    email: 'contact@acme.com',
    status: 'inactive',
    updatedBy: 'system',
    createdAt: '2023-12-20',
    updatedAt: '2024-01-10'
  },
  {
    id: 24,
    clientName: 'Bob Johnson',
    clientType: 'Individual',
    email: 'bob.johnson@email.com',
    status: 'active',
    updatedBy: 'user123',
    createdAt: '2024-01-12',
    updatedAt: '2024-01-19'
  }
];

export const availableSortFields = [
  {
    id: 'clientName',
    field: 'clientName',
    label: 'Client Name',
    icon: '👤',
    type: 'text'
  },
  {
    id: 'createdAt',
    field: 'createdAt',
    label: 'Created At',
    icon: '📅',
    type: 'date'
  },
  {
    id: 'updatedAt',
    field: 'updatedAt',
    label: 'Updated At',
    icon: '📅',
    type: 'date'
  },
  {
    id: 'id',
    field: 'id',
    label: 'Client ID',
    icon: '🆔',
    type: 'number'
  },
  
]; 
