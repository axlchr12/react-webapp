import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Billing = React.lazy(() => import('./views/billing/Billing'))
const AddTask = React.lazy(() => import('./views/task/add-task/AddTask'))
const TaskList = React.lazy(() => import('./views/task/TaskList'))
const TaskDetail = React.lazy(() => import('./views/task/detail-task/TaskDetail'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/billing', name: 'Billing', element: Billing },
  { path: '/add-new-task', name: 'Add New Task', element: AddTask },
  { path: '/task-list', name: 'Task List', element: TaskList, exact: true },
  { path: '/task-list/detail', name: 'Task Detail', element: TaskDetail },
]

export default routes
