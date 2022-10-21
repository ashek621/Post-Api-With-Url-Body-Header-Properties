const mongoose=require('mongoose');
const validator=require('validator');
const crypto=require('crypto');
const bcrypt=require('bcryptjs')

const userSchema=mongoose.Schema({

email:{
  type:string,
  validate:[validator.isEmail,"Provide a Valid Email"],
  trim:true,
  unique:true,
  lowercase:true,
  required:[true,"Email Address is Required."],
},


password:{
   type:string,
   required:[true,"Password is Required"],
   validate:{
        validator:(value)=>
        validator.isStrongPassword(value,{
          minLength:6,
          minLowercase:3,
          minNumbers:1,
          minUppercase:1,
          minSymbols:1,
        }),
   message:"Password {VALUE} is not strong Enough",
   }
},


confirmPassword:{
    type:string,
    required:[true,"Please Confirm your Password."],
    validate:{
      validator:function(value){
        return value === this.password;
      },
    message:"Passwords Don't match !"
    }
},



role:{
  type:string,
  enum:["buyer","store-manager","admin"],
  default:"buyer",
},


firstName:{
      type:string,
      required:[true,"Please provide your First Name"],
      trim:true,
      minLength:[3,"Name must be at-least 3 characters!"],
      maxLength:[100,"Name is too large"],
},


lastName:{
  type:string,
  required:[true,"Please provide your Last Name"],
  trim:true,
  minLength:[3,"Name must be at-least 3 characters!"],
  maxLength:[100,"Name is too large"],
},


contactNumber:{
       type:string,
      validate:[validator.isMobilePhone,"Please provide a valid contact number!"]
},


shippingAddress:string,


imageURL:{
  type:string,
  validate:[validator.isURL,"Please provide a valid URL"]
},


status:{
  type:string,
  default:"inactive",
  enum:["active","inactive","blocked"],
},


confirmationToken:string,
confirmationTokenExpires:Date,


passwordChangedAt:Date,
passwordResetToken:string,
passwordResetExpires:Date,

},
{timestamps:true,versionKey:false}
);



module.exports=mongoose.model("user",userSchema);