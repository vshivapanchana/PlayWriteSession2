const {test}= require ('@playwright/test')
const data = require ('../../data/ui/test-data.json')

test('login',async() =>{
    console.log('hello world')  
})

test.describe('login into the web application',() =>{
    test.beforeEach(async({page})=>{
        await page.goto('/login')
        await page.fill('#email', data.username)
        await page.fill('#password',data.password)
    })
    
    test ('login @smoke',async({page}) => {
        
        await page.click('#loginButton')
    
    
    })
    
    test ('login @regression', async({page}) => {
        
        await page.click('#loginButton')
    })



})


