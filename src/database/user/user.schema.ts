import { Schema } from "mongoose";
import { findOneOrCreate, findByAge } from "./user.statics";
import { setLastUpdated, sameLastName } from "./user.methods";

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
});
UserSchema.statics.findOneOrCreate = findOneOrCreate;
UserSchema.statics.findByAge = findByAge;
UserSchema.methods.setLastUpdated = setLastUpdated;
UserSchema.methods.sameLastName = sameLastName;
export default UserSchema;