import { Router } from 'express'
import { createEmployee, deleteEmployee, getEmployeeById, getEmployees, patchEmployee, updateEmployee } from '../controllers/employees.controller.js'

const router = Router()

router.get('/', getEmployees)
router.get('/:id', getEmployeeById)
router.post('/', createEmployee)
router.put('/:id', updateEmployee)
router.patch('/:id', patchEmployee)
router.delete('/:id', deleteEmployee)

export default router;