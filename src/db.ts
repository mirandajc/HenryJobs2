import mongoose from 'mongoose';

const { CLUSTER_NAME, PASSWORD, USER } = process.env;

const ATLAS = `mongodb+srv://doadmin:V27xO964i31Be5jU@db-mongodb-henryjobs-232c53bd.mongo.ondigitalocean.com/admin?tls=true&authSource=admin`;

async function dbConnect () {
    try {
        const db = await mongoose.connect(ATLAS)
        console.log("connected to", db.connection.host)
        
    } catch (error) {
        process.exit(1)
    }
};
dbConnect();

export default dbConnect