import { prop, getModelForClass, pre, DocumentType, modelOptions } from '@typegoose/typegoose';
import { compare, genSalt, hash } from 'bcrypt';

enum UserTypes{
    PG, // 1
    Graduate, //2 
    Recruiter, //3
    Staff, //4
    Business //5
}

@pre<User>("save", async function(next) {
    const user = this
    if (!user.isModified("password")) return next()

  const salt = await genSalt(10);
  const hashed = await hash(user.password, salt);

  user.password = hashed;
  next();
})

@modelOptions({ options: { allowMixed: 0 } })

export class User {
  @prop({ required: true })
  firstName: string;

  @prop({ required: true })
  lastName: string;

  @prop({ })
  userName: string;

  @prop({ required: true, trim: true, unique: true })
  email!: string;

  @prop({ required: true })
  password!: string;

  @prop()
  profileImage: { public_id: string, secure_url: string };

  @prop({ enum: UserTypes, addNullToEnum: false, default: 1 })
  userTypes: UserTypes;

  @prop({})
  technologies: string[]

  @prop({})
  country: string

  @prop({})
  backFront: string

  @prop({})
  languages: string

  @prop({})
  otherstudies: string[]
  
  @prop({})
  CurriculumCounter: number

  @prop({})
  counterIngreso: number

  @prop()
  banner: object;

  @prop()
  followers: string[]

  @prop()
  follows: string[]

  // @prop()
  // follow: string[]
  //business
  // @prop({})
  // name: string;
  // @prop({})
  // jobSummary: string
  // @prop({})
  // description: string;
  
  public async validatePassword(this: DocumentType<User>, candidatePassword: string) {

    try {
      const user = await compare(this.password, candidatePassword)
      console.log("esto es user --> ", user)
      return user;

    } catch (error) {
        console.error(error, "Could not validate password");
        return false;
    };
  };
};

export const userModel = getModelForClass(User);