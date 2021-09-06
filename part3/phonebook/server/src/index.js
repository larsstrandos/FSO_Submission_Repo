require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const Contact = require("./models/contact");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.json({
    message: "Eton Sucks!",
  });
});

app.get("/info", (req, res) => {
  const date = new Date().toString();
  res.send(`
        <div>
            <p>Phonebook has info for ${persons.length} people</p>
            <p>${date}</p>
        </div>
    `);
});

console.log(process.env.MONGODB_URI);

app.get("/api/persons", (req, response, next) => {
  Contact.find({})
    .then((contacts) => {
      response.json(contacts);
    })
    .catch((error) => next(error));
});

app.get("/api/persons/:id", (req, response, next) => {
  Contact.findById(req.params.id)
    .then((person) => {
      if (person) {
        response.json(person);
      } else {
        response.status(404).end;
      }
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (req, response, next) => {
  Contact.findByIdAndDelete(req.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.put("/api/persons/:id", (req, response, next) => {
  const body = req.body;

  const person = {
    name: body.name,
    number: body.number,
  };

  Contact.findByIdAndUpdate(req.params.id, person, { new: true })
    .then((updatedPerson) => {
      response.json(updatedPerson);
    })
    .catch((error) => next(error));
});

app.post("/api/persons", (req, response, next) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const person = new Contact({
    name: body.name,
    number: body.number,
  });

  person
    .save()
    .then((savedPerson) => {
      response.json(savedPerson);
    })
    .catch((error) => next(error));
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

// handler of requests with unknown endpoint
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

// handler of requests with result to errors
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
