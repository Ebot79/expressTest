/**module dependenies**/
var		express	=	require('express')
		,	mongodb	=	require('mongodb');
		
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

//listen

app.listen(3000);



