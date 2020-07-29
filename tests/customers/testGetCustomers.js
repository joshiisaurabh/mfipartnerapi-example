let STAGE = process.env.mygold_stage ? process.env.mygold_stage : 'dev';
const config = require('../../config/credentials.json')[STAGE];
const DvaraGold = require('../../cliient/dvaragold');
const queryStringParameters = {
    agentId: "DV12AG123"
}

async function test() {
    let client = await DvaraGold.Client(config)
    let customers = await client.getCustomers(queryStringParameters)
    return customers;
}

test()
    .then(result => {
        console.dir(result)
    })
    .catch(err => {
        console.error(err)
    })
    .finally(() => {
        process.exit(0);
    })
