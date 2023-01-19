const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://bysmartos:Happy2486@cluster0.k0qot.mongodb.net/mean-example?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then((db) => console.log("Db is connected"))
  .catch((err) => console.log(err));


//   mongodb://root:example@mongo:27017/
//   mongodb+srv://bysmartos:Happy2486@cluster0.k0qot.mongodb.net/mean-example?retryWrites=true&w=majority