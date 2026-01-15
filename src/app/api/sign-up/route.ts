import dbConnect from "@/src/lib/dbConnect";
import UserModel from "@/src/models/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/src/helpers/sendVerificationEmail";
import { success } from "zod";


export async function POST(request : Request){
    await dbConnect();

    try {
        const {username,email,password} = await request.json();

        const existingUser = await UserModel.findOne({username,isVerified : true});

        if(existingUser){
            return Response.json({
                success: false,
                message: "Username already taken"
            } , {status: 400});
        }
    } catch (error) {
        console.log("error in registering user",error);
        return Response.json({
            success: false,
            message: "Error in registering user"
        } , {status: 500});
    }
}