import { connect, disconnect } from 'mongoose';
async function connectToDatabase(){
    try{
        await connect(process.env.MONGODB_URL)
    } catch (error){
        console.log(error);
        throw new Error("cannot connect to MONGODB")
    }
    
}

//function to disconnect

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("could not disconnect from MONGODB");
        
    }
}

export { connectToDatabase, disconnectFromDatabase };