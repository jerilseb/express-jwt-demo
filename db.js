var mongoose = require("mongoose");
mongoose.connect("mongodb://<user>:<pass>f@ds259855.mlab.com:59855/chessdb", {
  useMongoClient: true
});
