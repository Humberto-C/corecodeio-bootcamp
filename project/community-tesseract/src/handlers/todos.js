const { Router } = require("express")
const { getDBHandler } = require("../lib/db");

 const RequestHandler = Router();

 RequestHandler.post("/to-dos", async (request, response) => {
    try {
        const dbDBHandler = await getDBHandler();
        const { title, description, isDone: is_done } = request.body;

        const creationInfo = await dbDBHandler.run(`
        INSERT INTO todos (title, description, is_done)
        VALUES (
            ${title},
            ${description},
            ${is_done}
        )
        `);

        response.send({
            todoAdded: {
                title,
                description,
                is_done
            },
            creationInfo
        });

    } catch (error) {
        response.status(500).send({
            errorMessage: "There was an unexpected error trying to create a new to do",
            errorDetails: error,
        });
    }
 }); 
