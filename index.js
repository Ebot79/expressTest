/**module dependenies**/
var		express	=	require('express')
		,mongodb = require("mongodb")
    ,mongoserver = new mongodb.Server('127.0.0.1', 27017)
    ,db_connector = new mongodb.Db('my-website',mongoserver);
		
//set up app

app = express();

//middleware
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: 'my secret'}));

//view options

app.set('view engine', 'jade');
app.use(app.router);
//app.set('views', __dirname + '/views');

//app.set('view options', {layout: false});

//routes

//default route
app.get('/', function (req, res, err){
	console.log('default');
	
	res.render('index', {authenticated: false});
	
});

//login route
app.get('/login', function (req, res){
	console.log('login');
	res.render('login');

});

//signup route
app.get('/signup', function(req, res){
	console.log('signup');
	res.render('signup');

});

//connect to the database

db_connector.open(function(err, client){
	if (err) throw err;
	console.log('\033[96m + \033[39m connected to mongodb');
	
	app.users = new mongodb.Collection(client,'users')
	


//listen

	app.listen(3000, function(){
		console.log('\033[96m + \033[39m app listening on 3000');


	});

});

