import { z } from "zod"

export const attribute = z.object({
    "name": z.coerce.string(),
    "value": z.coerce.string()
})

export type Attribute = z.infer<typeof attribute>;

const operation = z.object({
    "resource": z.coerce.string(),
    "methods": z.array(z.coerce.string())
})

const quota = z.object({
    "limit": z.coerce.string(),
    "interval": z.coerce.string(),
    "timeUnit": z.coerce.string()
})

const operationConfig = z.object({
    "apiSource": z.coerce.string(),
    "operations": z.array(operation),
    "quota": quota,
    "attributes": z.array(attribute)
})

const operationGroup = z.object({
    "operationConfigs": z.array(operationConfig),
    "operationConfigType": z.coerce.string()
})

const graphQLOperation = z.object({
    "operationTypes": z.array(z.coerce.string()),
    "operation": z.coerce.string()
})

const graphQLOperationConfig = z.object({
    "apiSource": z.coerce.string(),
    "operations": z.array(graphQLOperation),
    "quota": quota,
    "attributes": z.array(quota)
})

const graphqlOperationGroup = z.object({
    "operationConfigs": z.array(graphQLOperationConfig),
    "operationConfigType": z.coerce.string()
})

const grpcOperationConfig = z.object({
    "apiSource": z.coerce.string(),
    "methods": z.array(z.coerce.string()),
    "quota": quota,
    "attributes": z.array(attribute),
    "service": z.coerce.string()
})

const grpcOperationGroup = z.object({
    "operationConfigs": z.array(grpcOperationConfig)
})

const quotaCounterScope = z.enum(["QUOTA_COUNTER_SCOPE_UNSPECIFIED", "PROXY", "OPERATION"])

export const apiProduct = z.object({
    "name": z.coerce.string(),
    "displayName": z.coerce.string(),
    "approvalType": z.coerce.string(),
    "attributes": z.array(attribute),
    "description": z.coerce.string(),
    "apiResources": z.array(z.coerce.string()),
    "environments": z.array(z.coerce.string()),
    "proxies": z.array(z.coerce.string()),
    "quota": z.coerce.string(),
    "quotaInterval": z.coerce.string(),
    "quotaTimeUnit": z.coerce.string(),
    "scopes": z.array(z.coerce.string()),
    "createdAt": z.coerce.number(),
    "lastModifiedAt": z.coerce.number(),
    "operationGroup": operationGroup,
    "graphqlOperationGroup": graphqlOperationGroup,
    "grpcOperationGroup": grpcOperationGroup,
    "quotaCounterScope": quotaCounterScope
})

export type ApiProduct = z.infer<typeof apiProduct>

const apiProductRef = z.object({
    "apiproduct": z.coerce.string(),
    "status": z.coerce.string()
})

const credential = z.object({
    "apiProducts": z.array(apiProductRef),
    "attributes": z.array(attribute),
    "consumerKey": z.coerce.string(),
    "consumerSecret": z.coerce.string(),
    "expiresAt": z.coerce.string(),
    "issuedAt": z.coerce.string(),
    "scopes": z.array(z.coerce.string()),
    "status": z.coerce.string()
})

export const app = z.object({
    "appId": z.coerce.string(),
    "attributes": z.array(attribute),
    "callbackUrl": z.coerce.string(),
    "createdAt": z.coerce.string(),
    "credentials": z.array(credential),
    "companyName": z.coerce.string(),
    "developerId": z.coerce.string(),
    "lastModifiedAt": z.coerce.string(),
    "name": z.coerce.string(),
    "scopes": z.array(z.coerce.string()),
    "status": z.coerce.string(),
    "apiProducts": z.array(apiProductRef),
    "keyExpiresIn": z.coerce.string(),
    "developerEmail": z.coerce.string(),
    "appGroup": z.coerce.string()
})

export type App = z.infer<typeof app>

export const developerApp = z.object({
    "appId": z.coerce.string(),
    "attributes": z.array(attribute),
    "callbackUrl": z.coerce.string(),
    "createdAt": z.coerce.number(),
    "credentials": z.array(credential),
    "developerId": z.coerce.string(),
    "lastModifiedAt": z.coerce.number(),
    "name": z.coerce.string(),
    "scopes": z.array(z.coerce.string()),
    "status": z.enum(["approved", "revoked"]),
    "keyExpiresIn": z.coerce.number(),
    "appFamily": z.coerce.string(),
    "apiProducts": z.array(z.coerce.string())
})

export type DeveloperApp = z.infer<typeof developerApp>;

const developerAppKey = z.object({
    "apiProducts": z.array(z.coerce.string()),
    "attributes": z.array(attribute),
    "consumerKey": z.coerce.string(),
    "consumerSecret": z.coerce.string(),
    "expiresAt": z.coerce.number(),
    "issuedAt": z.coerce.number(),
    "scopes": z.array(z.coerce.string()),
    "status": z.enum(["revoked", "approved"]),
    "expiresInSeconds": z.coerce.number()
})

export type DeveloperAppKey = z.infer<typeof developerAppKey>

export const developer = z.object({
    "email": z.coerce.string().email(),
    "firstName": z.coerce.string(),
    "lastName": z.coerce.string(),
    "userName": z.coerce.string(),
    "attributes": z.array(attribute),
    "apps": z.array(z.coerce.string()),
    "companies": z.array(z.coerce.string()),
    "developerId": z.coerce.string(),
    "organizationName": z.coerce.string(),
    "status": z.coerce.string(),
    "createdAt": z.coerce.number(),
    "lastModifiedAt": z.coerce.number(),
    "accessType": z.coerce.string(),
    "appFamily": z.coerce.string()
})

export type Developer = z.infer<typeof developer>