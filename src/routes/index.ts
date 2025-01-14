import { Router } from "express";

const router = Router();

//user
import userRoute from "./user/getAllUser.routes";
import nameRoute from "./user/getUserByName.routes";
import createRoute from "./user/postUser.routes";
import deleteRoute from "./user/delete.routes";
import putRoute from "./user/putUser.routes";
import getUserById from "./user/getUserById.routes";

import getUserByMail from './user/getEmailUser.routes'
// import signinUser from "./user/signinUser.routes";

// import { tokenValidation } from "../libs/validateToken";

router.use("/user", userRoute);
router.use('/name', nameRoute);
router.use('/mail', getUserByMail)
router.use('/user', createRoute);
router.use('/user', deleteRoute);
router.use('/user', putRoute);
router.use('/user', getUserById);
// router.use("/signin", signinUser);

//post

import createPostRoute from './post/createPost.routes'
import getAllPostRoute from './post/getAllPost.routes'

router.use('/post', getAllPostRoute)
router.use('/post', createPostRoute)

//business

import createBusinessRoute from './business/createBusiness.routes'
import getAllBusinessRoute from './business/getAllBusiness.routes'
import updateBusinessRoute from './business/putBusiness.routes'
import deleteBusinessRoute from './business/deleteBusiness.routes'
import getBusinessByIdRoute from './business/getBusinessById.routes'
import getBusinessByEmailRoute from './business/getBusinessEmail.routes'
import getBusinessByNameRoute from './business/getBusinessByName.routes'

router.use('/business', getAllBusinessRoute)
router.use('/business', createBusinessRoute)
router.use('/business', updateBusinessRoute)
router.use('/business', deleteBusinessRoute)
router.use('/business', getBusinessByIdRoute)
router.use('/business', getBusinessByEmailRoute)
router.use('/business', getBusinessByNameRoute)

//follow
import getAllFollowRoute from './follow/getAllFollow.routes'
import createFollowRoute from './follow/createFollow.routes'

router.use('/follow', getAllFollowRoute)
router.use('/follow', createFollowRoute)


export default router;
