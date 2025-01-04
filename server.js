const express = require("express")

const exp = express()



exp.get("/api", (req, res) => {
  res.json({message: "Hello from express"})
})

const PORT = 3001
exp.listen(PORT)