var http = require("http");
http
	.createServer(function (req, res) {
		var q_string = req.url;
		switch (q_string) {
			case "/":
				res.writeHead(res.statusCode.toString(), {
					"Content-type": "text/html",
				});
				res.write("Welcome to TecMint");
				res.end();
				break;
			case "/about":
				res.write(res.statusCode.toString(), { "Content-type": "text/html" });
				res.write("About Us");
				res.write("\n \n");
				res.write("TecMint: Best Linux How-Tos on the Web");
				res.end();
				break;
			case "/tecmint/authors":
				res.write(res.statusCode.toString(), { "Content-type": "text/html" });
				res.write("TecMint Authors");
				res.write("\n");
				res.write(
					"Find all about our Authors: https://www.techmint.com/who-we-are/",
				);
				res.end();
				break;
			default:
				res.write(res.statusCode.toString(), { "Content-type": "text/html" });
				res.write("The page you are trying to load is incorrect");
				res.end();
		}
	})
	.listen(2001);
console.log("Server started at localhost:8080; Press Ctrl+C to terminate...");
