import { Developer, DeveloperApp, DeveloperAppKey } from "./schemas";


const dummyDeveloper: Developer = {
    email: "dummy@email.com",
    firstName: "Dummy",
    lastName: "Developer",
    userName: "dummy_developer",
    attributes: [],
    status: "active",
    apps: [],
    companies: [],
    developerId: "",
    organizationName: "",
    createdAt: Date.now(),
    lastModifiedAt: Date.now(),
    accessType: "",
    appFamily: ""
}

const dummyDeveveloperApp: DeveloperApp = {
    attributes: [],
    status: "approved",
    name: "Dummy-Developer-App",
    developerId: "",
    createdAt: Date.now(),
    lastModifiedAt: Date.now(),
    appFamily: "",
    appId: "",
    callbackUrl: "",
    credentials: [],
    apiProducts: ["Dev Free Tier Product", "goerli-api-product"],
    scopes: [],
    keyExpiresIn: Date.now() + 86200000
}

const dummyDeveloperAppKey: DeveloperAppKey = {
    attributes: [],
    status: "approved",
    apiProducts: [],
    consumerKey: "abc",
    consumerSecret: "def",
    expiresAt: Date.now() + 86200000,
    issuedAt: Date.now(),
    scopes: [],
    expiresInSeconds: 86200
}

export {
    dummyDeveloper,
    dummyDeveveloperApp,
    dummyDeveloperAppKey
};