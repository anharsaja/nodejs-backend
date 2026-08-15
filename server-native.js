import http from "node:http";

const server = http.createServer((request, response) => {
	if (request.method === "GET" && request.url === "/api") {
		response.statusCode = 200;
		response.setHeader("Content-Type", "application/json");
		const data = {
			message: "Welcome to my API",
			version: "1.0.0",
		};
		response.end(JSON.stringify(data));
		return;
	}
	if (request.method === "GET" && request.url === "/api/users") {
		response.statusCode = 200;
		response.setHeader("Content-Type", "application/json");
		const users = {
			data: [
				{
					id: 1,
					name: "Budi",
				},
				{
					id: 2,
					name: "Siti",
				},
			],
		};
		response.end(JSON.stringify(users));
		return;
	}
	if (request.method === "GET" && request.url === "/api/products") {
		response.statusCode = 200;
		response.setHeader("Content-Type", "application/json");
		const products = {
			data: [
				{
					id: 1,
					name: "Laptop",
					price: 1000,
				},
				{
					id: 2,
					name: "Smartphone",
					price: 500,
				},
				{
					id: 3,
					name: "Tablet",
					price: 300,
				}
			],
		};
		response.end(JSON.stringify(products));
		return;
	}
	if (request.method === "POST" && request.url === "/api/users") {
		let body = "";
		request.on("data", (chunk) => {
			body += chunk.toString();
		});
		request.on("end", () => {
			const user = JSON.parse(body);
			response.statusCode = 201;
			response.setHeader("Content-Type", "application/json");
			response.end(JSON.stringify({ message: "User created", user }));
		});
		return;
	}
	if (request.method === "POST" && request.url === "/api/products") {
		let body = "";
		request.on("data", (chunk) => {
			body += chunk.toString();
		});
		request.on("end", () => {
			const product = JSON.parse(body);
			if (!product.name || !product.price) {
				response.statusCode = 400;
				response.setHeader("Content-Type", "application/json");
				response.end(JSON.stringify({ message: "Name and price are required" }));
				return;
			}
			response.statusCode = 201;
			response.setHeader("Content-Type", "application/json");
			response.end(JSON.stringify({ message: "Product created", product }));
		});
		return;
	}



	response.statusCode = 404;
	response.end("Endpoint not found");
});

server.listen(3000, () => {
	console.log("Server berjalan di http://localhost:3000");
});
