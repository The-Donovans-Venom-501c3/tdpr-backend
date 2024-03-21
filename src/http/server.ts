import { Elysia } from 'elysia'
import { db } from '../db/connection';
import { users } from '../db/schema';
import { eq, not, sql } from 'drizzle-orm';


const app = new Elysia()
  .get('/', () => {
    return 'Hello world'
  })
  

  .post('/signup', async(req)=>{
    const { fullName, email, password } = req.body;
    const existinguser = await db.select().from(users).where(eq(email, users.email))
    console.log(fullName)
    console.log(email)
    console.log(password)
    // check whether email exist
    console.log(existinguser)
    
    if (existinguser.length!=0){
      console.log("have this person")
      return 'You already have an account, please log in directly'
      
    }else
    {try{
      console.log('please sign up')
      await db.insert(users).values(
        {
          id:fullName, email:email, password:password
        }).execute();
      
        console.log('sign up successfully')
        return 'signup successfully'
    }catch(error){
      console.log('sign up', error)
      return 'sign up'+ error
    }
}
  })

app.listen(3333, () => {
  console.log('🔥 HTTP server running!')
})