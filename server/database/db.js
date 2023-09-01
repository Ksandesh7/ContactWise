import mongoose from "mongoose"

const Connection = async(username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ln4n3tm-shard-00-00.kjwrdmk.mongodb.net:27017,ac-ln4n3tm-shard-00-01.kjwrdmk.mongodb.net:27017,ac-ln4n3tm-shard-00-02.kjwrdmk.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-10d1ay-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Error while connecting with the database", error)        
    }
}

export default Connection;