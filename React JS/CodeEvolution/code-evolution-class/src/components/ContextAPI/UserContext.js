import React, { createContext } from "react";

const UserContext = React.createContext("Alex Mercer");
// Here Alex Mercer is a default value for the provider.

// or we can directly import the createContext() method from "react"
// const UserContext = createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
