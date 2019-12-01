const http = require("http");
const url = require("url");

let cards = 10;

const invites = {};

// req - incoming http reqeust
// res - returned http response
const server = http.createServer((req, res) => {
    const { method, query } = req;

    console.log("url.parse(req.url)", url.parse(req.url, true));
    //   const {query} =  url.parse(req.url)
    //   console.log("method", method);
    if (method === "POST") {
        let body = "";
        req.on("data", data => {
            body += data;
        });
        req.on("end", () => {
            body = JSON.parse(body);
            const newInvite = {
                moment: new Date(),
                id: "id-" + Date.now(),
                user: body.user,
                cards: body.cards
            };
            invites[newInvite.id] = newInvite;
            cards += newInvite.cards;
            console.log("invites", invites);
            res.end(JSON.stringify(newInvite));
        });
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log("server run");
});