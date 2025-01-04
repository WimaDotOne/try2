const express = require("express")

const exp = express()



exp.get("/api", (req, res) => {
  res.json({message: "Hello from express"})
})

const PORT = 5000
exp.listen(PORT)