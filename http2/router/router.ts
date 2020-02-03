import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router
.get('/',ctx=>{
    ctx.response.body ="hello world"
})
.get('/book',ctx=>{
    ctx.response.body =[{
        title:"Sherlock Holmes",
        author:"Artur Connan Doyle"
    }]
})
.post('/book',async ctx=>{
    const body = await ctx.request.body();
    console.log(body);    
    ctx.response.body="received"
})
.get('/post',async ctx=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);    
    ctx.response.body="data"    
    })


export default router;

