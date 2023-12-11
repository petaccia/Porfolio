require("dotenv").config();
const app = require("./src/app");

const port = parseInt(process.env.PORT || 5000)

app.listen(port, (err) => {
    if (err) {
        console.error(err)
    }
    console.log(`Server started on port ${port}`)
    
});