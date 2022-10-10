import { connect } from "mongoose";

export const connectDatabase = async () => {
    await connect(process.env.MONGO_URI);
    console.log(client.user?.username, "is connected to the DB!");
}