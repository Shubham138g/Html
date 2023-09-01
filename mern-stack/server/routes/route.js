import  express  from 'express';
import { adduser ,getUser,getUserr,editUser} from '../controller/user-controller.js';


const router=express.Router();

router.post('/adduser',adduser)
router.get('/alluser',getUser)
router.get('/:id',getUserr)
router.post('/:id',editUser)

export default router;