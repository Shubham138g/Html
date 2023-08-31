import  express  from 'express';
import { adduser ,getUser,getUserr} from '../controller/user-controller.js';


const router=express.Router();

router.post('/adduser',adduser)
router.get('/alluser',getUser)
router.get('/:id',getUserr)

export default router;