import { FREE_TIER_PRODUCTS, PAID_TIER_PRODUCTS } from "./constants"
import { dummyDeveloperAppKey } from "./sample_data"
import { ApiProduct, App, Developer, DeveloperApp, DeveloperAppKey } from "./schemas"


const BASE = "https://apigee.googleapis.com"
const VERSION = "/v1"
const API_URL = BASE + VERSION

const ORG = "juno-stg-nth"

// API Products Related API Functions
const getApiProducts = async (token: string) => {
    const response = await fetch(`${API_URL}/organizations/${ORG}/apiproducts?expand=true&count=1000`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const responseValue = JSON.parse(await response.text())
    const apiProducts: ApiProduct[] = responseValue?.apiProduct;
    return apiProducts;
}

const getApiProduct = async (token: string, api_product_name: string) => {
    const response = await fetch(`${API_URL}/organizations/${ORG}/apiproducts/${api_product_name}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const responseValue: ApiProduct = JSON.parse(await response.text())
    const apiProduct = responseValue;
    return apiProduct;
}

// App Related API Functions
const getApps = async (token: string) => {
    const response = await fetch(`${API_URL}/organizations/${ORG}/apps?expand=true`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const responseValue = JSON.parse(await response.text())
    const apps: App[] = responseValue;
    return apps;
}

const getApp = async (token: string, app_uuid: string) => {
    const response = await fetch(`${API_URL}/organizations/${ORG}/apps/${app_uuid}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const responseValue = JSON.parse(await response.text())
    const app: App = responseValue;
    return app;
}

// Developer Related API Functions
async function getDevelopers(token: string) {
    const response = await fetch(`${API_URL}/organizations/${ORG}/developers`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const responseValue = JSON.parse(await response.text())
    const developers = responseValue?.developer;
    return developers;
}


const createDeveloper = async (token: string, developer: Developer) => {
    const response = await fetch(`${API_URL}/organizations/${ORG}/developers`, {
        method: "POST",
        body: JSON.stringify(developer),
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = await response.json();
    return data;
}

const deleteDeveloper = async (token: string, email: Developer["email"]) => {
    const response = await fetch(`${API_URL}/organizations/${ORG}/developers/${email}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = await response.json();
    return data;
}

// Developer Apps 
const getDeveloperApps = async (token: string, email: Developer["email"]) => {
    const response = await fetch(`${API_URL}/organizations/${ORG}/developers/${email}/apps?expand=true`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = (await response.json()) as DeveloperApp[];
    return data;
}

const getDeveloperApp = async (token: string, email: Developer["email"], developer_app_name: string) => {
    const response = await fetch(`${API_URL}/organizations/${ORG}/developers/${email}/apps/${developer_app_name}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = (await response.json()) as DeveloperApp;
    return data;
}

const createDeveloperApp = async (token: string, email: Developer["email"], developer_app: DeveloperApp) => {
    const response = await fetch(`${API_URL}/organizations/${ORG}/developers/${email}/apps`, {
        method: "POST",
        body: JSON.stringify(developer_app),
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = (await response.json()) as DeveloperApp;
    return data;
}

const updateDeveloperApp = async (
    token: string,
    email: Developer["email"],
    developer_app_name: string,
    developer_app: DeveloperApp
) => {
    const response = await fetch(`${API_URL}/organizations/${ORG}/developers/${email}/apps/${developer_app_name}`, {
        method: "PUT",
        body: JSON.stringify(developer_app),
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = (await response.json()) as DeveloperApp;
    return data;
}

const deleteDeveloperApp = async (token: string, email: Developer["email"], developer_app_name: string) => {
    const response = await fetch(`${API_URL}/organizations/${ORG}/developers/${email}/apps/${developer_app_name}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = (await response.json()) as DeveloperApp;
    return data;
}

const createDeveloperAppKey = async (
    token: string,
    email: Developer["email"],
    developer_app_name: string,
    developer_app_key: DeveloperAppKey
) => {
    const response = await fetch(`${API_URL}/organizations/${ORG}/developers/${email}/apps/${developer_app_name}/keys/create`, {
        method: "POST",
        body: JSON.stringify(developer_app_key),
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = (await response.json()) as DeveloperAppKey;
    return data;
}

const updateDeveloperAppKey = async (
    token: string,
    email: Developer["email"],
    developer_app_name: string,
    developer_app_key: DeveloperAppKey
) => {
    const response = await fetch(`${API_URL}/organizations/${ORG}/developers/${email}/apps/${developer_app_name}/keys/${developer_app_key.consumerKey}`, {
        method: "PUT",
        body: JSON.stringify(developer_app_key),
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = (await response.json()) as DeveloperAppKey;
    return data;
}

const updateDeveloperAppKeyToFreeTier = async (
    token: string,
    email: Developer["email"],
    developer_app_name: string,
    developer_app_consumer_key: string
) => {
    const requestBody = JSON.stringify({ "apiProducts": FREE_TIER_PRODUCTS })
    const response = await fetch(`${API_URL}/organizations/${ORG}/developers/${email}/apps/${developer_app_name}/keys/${developer_app_consumer_key}`, {
        method: "PUT",
        body: requestBody,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = (await response.json()) as DeveloperAppKey;
    return data;
}

const updateDeveloperAppKeyToPaidTier = async (
    token: string,
    email: Developer["email"],
    developer_app_name: string,
    developer_app_consumer_key: string
) => {
    const requestBody = JSON.stringify({ "apiProducts": PAID_TIER_PRODUCTS })
    const response = await fetch(`${API_URL}/organizations/${ORG}/developers/${email}/apps/${developer_app_name}/keys/${developer_app_consumer_key}`, {
        method: "PUT",
        body: requestBody,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = (await response.json()) as DeveloperAppKey;
    return data;
}

const deleteDeveloperAppKey = async (
    token: string,
    email: Developer["email"],
    developer_app_name: string,
    developer_app_consumer_key: string
) => {
    const response = await fetch(`${API_URL}/organizations/${ORG}/developers/${email}/apps/${developer_app_name}/keys/${developer_app_consumer_key}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = (await response.json()) as DeveloperAppKey;
    return data;
}

export {
    getDevelopers,
    createDeveloper,
    deleteDeveloper,
    getApiProducts,
    getApiProduct,
    getApps,
    getApp,
    getDeveloperApps,
    getDeveloperApp,
    createDeveloperApp,
    deleteDeveloperApp,
    updateDeveloperApp,
    createDeveloperAppKey,
    deleteDeveloperAppKey,
    updateDeveloperAppKeyToFreeTier,
    updateDeveloperAppKeyToPaidTier,
    updateDeveloperAppKey
}