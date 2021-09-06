import { set } from "mongoose";

const baseUrl = "http://localhost:3001/api/persons";

export const getAll = async () => {
  const request = await fetch(baseUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await request.json();
};

export const create = async (personObject) => {
  const request = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personObject),
  });
  return await request.json();
};

export const deletePerson = async (id) => {
  const url = `${baseUrl}/${id}`;
  const request = await fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return await request;
};

export const updatePerson = async (personObject) => {
  const url = `${baseUrl}/${personObject.id}`;
  const request = await fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personObject),
  });
  return await request.json();
};
