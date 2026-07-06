## a-basic-server-that-handles-requests
Node.js Virtual Pet Server 🦖

A fun, interactive backend project built using pure Node.js .

Instead of building a standard "Hello World" or static text server, I built a server that hosts a digital pet in its RAM. As long as the server is running, the pet stays alive. You can interact with the pet and change its mood by visiting different URL routes in your browser.

# How to Run It Locally

* Make sure you have Node.js installed on your computer.

* Download or clone this repository to your machine.

* Open your terminal or command prompt and navigate to the project folder.

* Start the server by running the following command: node monster.js


(Note: If you named your file server.js, run node server.js instead).

# Open your web browser and go to: http://localhost:9680

## How to Play

Once the server is running, you interact with the pet purely through URL routing. Try visiting these different addresses in your browser:

* / (Home): Check the pet's current mood, hunger, and boredom stats.

* /feed: Feeds the pet and lowers its hunger level.

* /play: Plays with the pet and lowers its boredom level.

* /poke: A secret hidden route to see what happens!

Note: Every time you make a request, the pet's hunger and boredom slowly increase in the background!

#  What I Learned

* Building this project helped me understand the core fundamentals of how the web works under the hood:

* The HTTP Module: Setting up a raw web server using Node's built-in http.createServer().

* Routing: Using req.url and if/else logic to make the server respond differently based on the specific path the client visits.

* Server State (Memory): Learning how a backend server can hold global variables (the pet's stats) in its RAM across multiple different client requests.

* HTTP Responses: Using res.writeHead and res.end to send formatted text and status codes back to the browser.
