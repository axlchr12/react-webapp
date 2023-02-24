import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AddTask = React.lazy(() => import('./views/task/add-task/AddTask'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/task-list', name: 'Task List', element: Dashboard },
  { path: '/add-new-task', name: 'Add New Task', element: AddTask },
]

export default routes
