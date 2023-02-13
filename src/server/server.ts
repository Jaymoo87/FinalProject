import * as express from "express";
import routes from "./routes";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

//Testing

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://admin:Rowan2014@jaymoomongo.rs7nh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect(async (err: Error) => {
  const collection = client.db("RecipeGenerator").collection("users");
  // perform actions on the collection object
  const pipeline = [
    {
      $addFields: {
        rating: 4,
      },
    },
  ];

  const agg = await collection.aggregate(pipeline).toArray();

  console.log(agg);
  client.close();
});
