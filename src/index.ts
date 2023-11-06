import { exec } from "child_process";
import { createDeveloper, createDeveloperApp, createDeveloperAppKey, deleteDeveloper, deleteDeveloperApp, deleteDeveloperAppKey, getApiProduct, getApiProducts, getApp, getApps, getDeveloperApp, getDeveloperApps, updateDeveloperApp, updateDeveloperAppKey, updateDeveloperAppKeyToFreeTier, updateDeveloperAppKeyToPaidTier } from "./api";
import { dummyDeveloper, dummyDeveloperAppKey, dummyDeveveloperApp } from "./sample_data";

function getAccessToken(): Promise<string | undefined> {
    return new Promise((res, rej) => {
        exec('gcloud auth application-default print-access-token', (error, stdout, stderr) => {
            if (error) {
                console.error(`error: ${error.message}`);
                rej(error.message);
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                rej(stderr);
            }
            res(stdout)
        })
    })
}


const main = async () => {

    console.log("Script Started...")
    const token = await getAccessToken();

    if (!token) {
        throw Error("TOKEN NOT FOUND!!")
    }

    // const developers = await getDevelopers(token)
    // console.log(developers)

    // Create a Developer
    // const creationStatus = await createDeveloper(token, dummyDeveloper)
    // console.log(creationStatus)

    // Delete a Developer
    // const deletionState = await deleteDeveloper(token, dummyDeveloper.email)
    // console.log(deletionState)

    // Get All API Products 
    // const apiProducts = await getApiProducts(token);
    // console.log(apiProducts)
    // apiProducts.forEach((apiProduct) => {
    //     console.log(apiProduct?.name)
    // })

    // Get a API Product 
    // const apiProduct = await getApiProduct(token, "goerli-api-product")
    // console.log(apiProduct.name)

    // Get Org Apps
    // const apps = await getApps(token)
    // console.log(apps)

    // const app = await getApp(token, "d9176c80-9a6d-4110-8df1-00e56eb721cd")
    // console.log(app)

    // const developerApps = await getDeveloperApps(token, "dummy@email.com")
    // console.log(developerApps)

    // const developerApp = await getDeveloperApp(token, "dummy@email.com", "Test-App")
    // console.log(developerApp)

    // Create a Developer App
    // const createdDeveloperApp = await createDeveloperApp(token, "dummy@email.com", dummyDeveveloperApp);
    // console.log(createdDeveloperApp)

    // const updatedDeveloperApp = await updateDeveloperApp(
    //     token, 
    //     "dummy@email.com", 
    //     dummyDeveveloperApp.name,
    //     {
    //         ...dummyDeveveloperApp,
    //     }
    // );
    // console.log(updatedDeveloperApp)

    // Delete a Developer App
    // const deletedDeveloperApp = await deleteDeveloperApp(token, "dummy@email.com", dummyDeveveloperApp.name);
    // console.log(deletedDeveloperApp)

    // Create a Developer App Key
    // const createdNewKey = await createDeveloperAppKey(
    //     token,
    //     "dummy@email.com",
    //     dummyDeveveloperApp.name,
    //     dummyDeveloperAppKey
    // )
    // console.log(createdNewKey)


    // Update a Developer App Key
    // const updatedDeveloperAppKey = await updateDeveloperAppKey(
    //     token,
    //     "dummy@email.com",
    //     dummyDeveveloperApp.name,
    //     {
    //         ...dummyDeveloperAppKey, apiProducts: [
    //             "Staging Free Tier Product"
    //         ]
    //     }
    // )
    // console.log(updatedDeveloperAppKey)

    // Update developer app key to FREE Tier
    // const freeTieredKey = await updateDeveloperAppKeyToFreeTier(
    //     token,
    //     "dummy@email.com",
    //     dummyDeveveloperApp.name,
    //     dummyDeveloperAppKey.consumerKey
    // )
    // console.log(freeTieredKey)

    // Delete a Developer App Key
    // const deletedAppKey = await deleteDeveloperAppKey(
    //     token,
    //     "dummy@email.com",
    //     dummyDeveveloperApp.name,
    //     dummyDeveloperAppKey.consumerKey
    // )
    // console.log(deletedAppKey)

    // Update developer app key to PAID Tier
    // const paidTieredKey = await updateDeveloperAppKeyToPaidTier(
    //     token,
    //     "dummy@email.com",
    //     dummyDeveveloperApp.name,
    //     dummyDeveloperAppKey.consumerKey
    // )
    // console.log(paidTieredKey)



    console.log("Script Ended...")
}

main()