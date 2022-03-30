const Express = require("express")
const { initializeDB } = require("./lib/db")

const App = Express();

App.listen(3000, () => {
    console.log("I'M READY :)");
    initializeDB().then(() => console.log("DB ready :)"));
})