import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Billing = React.lazy(() => import('./views/billing/Billing'))
const AddCard = React.lazy(() => import('./views/billing/add-card/AddCard'))
const EditCard = React.lazy(() => import('./views/billing/edit-card/EditCard'))
const AddTask = React.lazy(() => import('./views/task/add-task/AddTask'))
const TaskList = React.lazy(() => import('./views/task/TaskList'))
const TaskDetail = React.lazy(() => import('./views/task/detail-task/TaskDetail'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/billing', name: 'Billing', element: Billing, exact: true },
  { path: '/billing/add-payment', name: 'Add Card', element: AddCard },
  { path: '/billing/edit-payment', name: 'Edit Card', element: EditCard },
  { path: '/add-new-task', name: 'Add New Task', element: AddTask },
  { path: '/task-list', name: 'Task List', element: TaskList, exact: true },
  { path: '/task-list/detail', name: 'Task Detail', element: TaskDetail },
]

export default routes
