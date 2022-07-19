const { chromium } = require("@playwright/test")

const config ={
timeout : 30000,
projects    :[
    {
        name : 'dev',
        use : {

            baseURL : 'https://app.testrigor.com',
            browserName : 'firefox',
            screenshot  : 'on',
            video       :'on',
            headless    : false
        },
    },
    {
        name : 'qa',
        use:  {
            baseURL : 'https://app.testrigor.com',
            browserName : 'chromium',
            screenshot  : 'on',
            video       : 'on',
            headless    : false
        }
    }
]
}
module.exports = config