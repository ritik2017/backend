const express = require('express');

const app = express();

app.use(express.json()); // Data format is json
app.use(express.urlencoded({extended: true})); // Data format is json

app.get('/', (req, res) => {
    
    res.send(`
        <!DOCTYPE html>
            <html>
            <meta charset="UTF-8">
            <head> </head>
            <body> 
                <h1> Form </h1>

                <form action="/results" method="POST">
                    <label for="name" placeholder="Name" > </label>
                    <input type="text" placeholder="Enter Name" name="name">
                    <label for="email" placeholder="Email" > </label>
                    <input type="text" placeholder="Enter Email" name="email">
                    <label for="phone" placeholder="Phone" > </label>
                    <input type="text" placeholder="Enter Phone" name="phone">

                    <button type="submit"> Submit </button>
                </form>

                <script>
                    
                </script>
            </body>
        </html>
    `);
});



app.post('/results', (req, res) => {
    console.log(req.body);

    // Name Should be text
    // Email format should be correct ritik@gmail.com 
    // Phone format should be correct 10 digit 

    const fails = false;

    const response = {
        status: 200,
        message : {
            value: "Request Submitted"
        }
    }

    // if(fails) {
    //     response.status = 406;
    //     response.message.value = "failed";

    //     res.send(response);
    //     return;
    // }

    // Database

    if(fails) {
        response.status = 500;
        response.message.value = "failed";

        res.send(response);
        return;
    }

    res.send(response);
});

app.listen(3000, () => {
    console.log("Server is live on port 3000");
})


app.post("/add", async (req, res) => {
    try {
      console.log(req.body);
      const { num1, num2 } = req.body;
      numberValidator(num1, num2);
      const sum = parseFloat(num1) + parseFloat(num2);
      if (sum > 1e6) throw new Error("Overflow");
      else if (sum < -1e6) throw new Error("Underflow");
      res.status(200).send({
        status: "success",
        message: "The sum of the two numbers",
        sum,
      });
    } catch (error) {
      res.status(400).send({ status: "error", message: error.message });
    }
  });
  
  app.post("/sub", async (req, res) => {
    try {
      const { num1, num2 } = req.body;
      numberValidator(num1, num2);
      const difference = parseFloat(num1) - parseFloat(num2);
      if (difference > 1e6) throw new Error("Overflow");
      else if (difference < -1e6) throw new Error("Underflow");
      res.status(200).send({
        status: "success",
        message: "The difference of the two numbers",
        difference,
      });
    } catch (error) {
      res.status(400).send({ status: "error", message: error.message });
    }
  });
  
  app.post("/multiply", async (req, res) => {
    try {
      const { num1, num2 } = req.body;
      numberValidator(num1, num2);
      const result = parseFloat(num1) * parseFloat(num2);
      if (result > 1e6) throw new Error("Overflow");
      else if (result < -1e6) throw new Error("Underflow");
      res.status(200).send({
        status: "success",
        message: "The product of the two numbers",
        result,
      });
    } catch (error) {
      res.status(400).send({ status: "error", message: error.message });
    }
  });
  
  app.post("/divide", async (req, res) => {
    try {
      const { num1, num2 } = req.body;
      numberValidator(num1, num2);
      if (num2 == 0) throw new Error("Cannot divide by zero");
      const result = parseFloat(num1) / parseFloat(num2);
      if (result > 1e6) throw new Error("Overflow");
      else if (result < -1e6) throw new Error("Underflow");
      res.status(200).send({
        status: "success",
        message: "The product of the two numbers",
        result,
      });
    } catch (error) {
      res.status(400).send({ status: "error", message: error.message });
    }
  });

  function numberValidator(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Invalid data types");
    } else if (parseFloat(num1) > 1000000 || parseFloat(num2) > 1000000) {
      throw new Error("Overflow");
    } else if (parseFloat(num2) < -1000000 || parseFloat(num1) < -1000000) {
      {
        throw new Error("Underflow");
      }
    }
  }
  
  module.exports = numberValidator;


// https://youtube.com/results?search_query=songs