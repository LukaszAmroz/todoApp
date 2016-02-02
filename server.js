var express = require("express"),
	app	= express(),
	mongojs = require("mongojs"),
	db = mongojs("todos", ["todos"]),
	bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.json());

var todosRouter = express.Router();

todosRouter.route("/todos")
	.get(function(req, res){
		console.log("GET Request");
		db.todos.find(function(err, docs){
			res.json(docs);
		});
	})
	.post(function(req, res){
		console.log("GET Request");
		db.todos.insert(req.body, function(err, doc){
			res.json(doc);
		});
	});

todosRouter.route("/todos/:id")
	.delete(function(req, res){
		var id = req.params.id;
		db.todos.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
			res.json(doc);
		});
	});

app.use("/", todosRouter);

app.listen(3000, function(){
	console.log("listening on port 3000");
});
