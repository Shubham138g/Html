import  express  from 'express';
import { adduser ,getUser,getUserr,editUser,deleteUser} from '../controller/user-controller.js';


const router=express.Router();

router.post('/adduser',adduser)
router.get('/alluser',getUser)
router.get('/:id',getUserr)
router.put('/:id',editUser)
router.delete('/:id',deleteUser)

export default router;