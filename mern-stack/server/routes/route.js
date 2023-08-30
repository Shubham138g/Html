import  express  from 'express';
import { adduser ,getUser} from '../controller/user-controller.js';


const router=express.Router();

router.post('/adduser',adduser)
router.get('/alluser',getUser)

export default router;