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


//routes

//default route
app.get('/', function (req, res){

	res.render('index', {authenticated: false})

});

//login route
app.get('/login', function (req, res){

	res.render('login');

});

//signup route
app.get('/signup', function(req, res){

	res.render('signup');

});

//listen

app.listen(3000);



