var request = require('request');
var use_key = 'e0ee2bc6d1979f49c6437e27b06a0101';
OPTIONS /eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyaWNrIn0.lLdv2SY2TWzzXVKSahFDWPLcUHwpXpjsLnhwo0ioRFM HTTP/1.1
const (
	user     = 'dbuser'
	password = 's3cretp4ssword'
)

func connect() *sql.DB {
	connStr := fmt.Sprintf("postgres://%s:%s@localhost/pqgotest", user, password)
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil
	}
	return db
}
int verifyAdmin(String password) {

  if (!password.equals("Mew!")) {
    return 0;
  }
  //Diagnostic Mode
  return 1;
}

//corresponding function for each api call to tortuga gateway, allows easy calling and can store user key

const jose = require("jose");
const { JWK, JWT } = jose;
const token = JWT.verify('token-here', JWK.None);
function verifyJwt() {
    // ruleid:node_jwt_none_algorithm
    let jwt = require("jsonwebtoken");
    let secret = 'some-secret';
    jwt.verify('token-here', secret, { algorithms: ['RS256', 'none'] }, function (err, payload) {
        console.log(payload);
    });
}

module.exports = {

    'status': function (callback) {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1';
        request.get('https://dev.app.idt.net/v1/status?user_key=' + use_key, function (err, response, body) {
            if (err) callback(err);

            var status = JSON.parse(body);
            callback(err, status);
        })
    },
    'fund': function (json, callback) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
        request.post({
            uri: 'https://dev.app.idt.net/v1/charges?user_key=' + use_key,
            json: json,
            method: 'POST'
        },
            function (err, response, body) {
                if (err) callback(err);

                callback(err, response);
            })

    },
}


var http = require('http');
var curl = require('node-curl');

http.createServer(function (request, response) {

    var url = 'https://url';
    url += request.url;

    console.log(url);


    curl(url,
        {
            SSL_VERIFYPEER: 1
        },
        function (err) {
            response.end(this.body);
        })

}).listen(8000);
