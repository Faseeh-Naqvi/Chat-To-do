import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
const PORT = process.env.PORT || 5000;
//connections and listeners
//will only open server when connected to database.
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("server open and connected to database"));
}).catch(err => console.log(err));
/*
4 types of requests used in backend development.
1. GET - we want to get some data from the backend or database
2. Put -  if you want to update of modify or update some data
3. POST -  if you want to send some data (think blogpost)
4. DELETE -  if we want to send some data to delete something
*/
// //generate endpoiints for reuqsts
// //this is a middleware - functions which handle requests ("/hello" is a request)
// app.get("/hello!", (reqest,response,next)=> {//if the frontend requested something, the response to the request, move onto the next availible middlewere
//   return response.send("This is the response. HIIII!")
// });
// //To read data need another middleware. 
//app.use(express.json());//tells the app that we will be using JSON for the input and output reqrests
// app.post("/hello!", (req,response,next)=> {//used to send some data with the request. we can read it (we will use JSON here)
//   console.log("is this your name??? ", req.body.name)
//   return response.send("This is the response. HIIII!")
// });
// app.put("/hello!", (req,response,next)=> {//used to send some data with the request. we can read it (we will use JSON here)
//   console.log("PUT :is this your name??? ", req.body.name)
//   return response.send("This is the response. HIIII!")
// });
// app.delete("/user/:id", (req,response,next)=> {//if there is annything ater the user in the url then it will connect.
//   console.log("DEL :is this your use ID in the link??? ", req.params.id)//whatever is up there after the : must be in t
//   return response.send("This is the response. HIIII!")
// });
//# sourceMappingURL=index.js.map