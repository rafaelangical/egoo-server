import mongoose from "mongoose";

const dbAddress = {
  production: "",
  development: "mongodb://localhost:27017/server-egoo-app1"
};

mongoose.connect(
  dbAddress.development,
  { useNewUrlParser: true }
);
mongoose.connection.on("error", () => {
  console.log("error db connection");
});
