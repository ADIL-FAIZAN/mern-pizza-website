const {z}=require("zod")


const registeruserSchema=z.object({

username:z
.string({message:"UserName must be a String "})
.trim()
.min(6,{message:"Username min 6 character long "})
.max(255,{message:"Name maximum 255 character long"}),



email: z
.string()
.email({ message: 'Must be a valid Email Address' }),
password:z
.string({message:"Password is required"})
.trim()
.min(6,{message:"Password min 6 character long"})
.max(30,{message:"Password max 30 character long"})

})

module.exports=registeruserSchema