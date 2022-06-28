import { Request, Response, NextFunction } from "express";
import { userModel, User } from "../models/User";
import { userId, userInterface } from "./interfaces/userInterface.controller";

export const getUserByName = async (req: Request, res: Response, next: NextFunction) => {
    const { userName } = req.query

    if (userName) {

        const user: userId | null = await userModel.findOne({ userName: userName })

        if (user) {
            const allNames: userInterface = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                userName: user.userName,
                email: user.email,
                password: user.password,
                profileImage: user.profileImage,
                userTypes: user.userTypes,
                technologies: user.technologies,
                country: user.country,
                backFront: user.backFront,
                languages: user.languages,
                otherStudies: user.otherStudies,
                curriculumCounter: user.curriculumCounter,
                counterIngreso: user.counterIngreso,
                banner: user.banner,
                premium: user.premium

            }
            res.status(200).json(allNames)
        };
    };
};