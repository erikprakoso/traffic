// import express
import express from "express";
// import controllers
import { getTraffics,
    createTraffic,
    getTrafficByName } from "../controllers/trafficController.js";
 
    // express router
const router = express.Router();
 
// Route get All Traffic
router.get('/getTraffics', getTraffics);
// Route get single Traffic
router.get('/getTrafficByName', getTrafficByName);
// Route create Traffic
router.post('/createTraffic', createTraffic);
 
// export router
export default router;