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
        if (url.parse(req.url, true).pathname === "/addInvite") {
            req.on("end", () => {
                body = JSON.parse(body);
                const newInvite = {
                    moment: new Date(),
                    id: Date.now(),
                    user: body.user,
                    cards: body.cards
                };
                cards -= newInvite.cards;
                if (cards < c)
                    invites[newInvite.id] = newInvite;


                console.log("invites", invites);
                res.end(JSON.stringify(newInvite));
            });
        }
        // change methot to delete
        if (url.parse(req.url, true).pathname === "/deleteInvite") {
            req.on("end", () => {
                body = JSON.parse(body);
                console.log("id:", body.id);
                console.log("this cards", invites[body.id].cards);
                cards += invites[body.id].cards;
                delete invites[body.id];
                res.end("Invitation deleted");
                console.log("invites", invites);
                console.log("cards", cards);
            });
        }
        // change methot to put
        if (url.parse(req.url, true).pathname === "/updateInvite") {
            req.on("end", () => {
                body = JSON.parse(body);
                console.log("id:", url.parse(req.url, true).query.id);
                let idToUpdate = url.parse(req.url, true).query.id;
                cards += invites[idToUpdate].cards;
                invites[idToUpdate].cards = body.cards;
                invites[idToUpdate].user = body.user;
                invites[idToUpdate].moment = new Date();
                cards -= invites[idToUpdate].cards;
                res.end("Invitation updated");
                console.log("invites", invites);
                console.log("cards", cards);
            });
        }
        if (url.parse(req.url, true).pathname === "/showAll") {
            req.on("end", () => {
                //body = JSON.parse(body);
                res.end(JSON.stringify(invites));
            });
        }
        if (url.parse(req.url, true).pathname === "/deleteAll") {
            req.on("end", () => {
                //body = JSON.parse(body);
                for (let invite in invites) {
                    delete invite;
                }
                cards = 10;
                res.end(JSON.stringify(invites));
            });
        }



    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log("server run");
});