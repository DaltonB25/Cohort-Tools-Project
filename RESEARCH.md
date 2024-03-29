Ironhack Cohort Tools Mini Project 

Research day 1:
CORS - Cross-Origin Resource Sharing
*  If you try to make an HTTP request (using fetch, axios, or XMLHttpRequest) from an app/script running in the browser, the browser will block it by default.
* In order for the browser to permit an HTTP request, the origin of the client-side app must be whitelisted on the server and permitted by the server.
* CORS works like a firewall that only allows authorized connections from the browser to the server.






General Knowledge:

Middleware:
 
 Think of middleware as a series of steps or checkpoints that the request goes through before reaching its final destination. Each middleware function has access to the request object, the response object, and the next middleware function in the application's request-response cycle.

Use Mongoose to connect your Express app to the MongoDB database:

Lesson - Express | Error Handling

In this lesson, we've focused on the crucial aspect of error handling within ExpressJS applications, emphasizing its importance in ensuring server stability and preventing potential disruptions. Here are the key takeaways:

1. **The Importance** of Error Handling: Proper error handling in server-side applications is vital to prevent service disruptions and maintain a seamless user experience. Unhandled errors can lead to server crashes, affecting both service availability and user satisfaction.

2. **Understanding Default Error Handling in ExpressJS**:
   - ExpressJS comes equipped with a basic error handling mechanism for both synchronous and asynchronous code. 
   - For **synchronous errors**, Express automatically catches errors and sends a 500 (Internal Server Error) response.
   - With **asynchronous code**, it's crucial to catch and handle errors and rejected promises using `.catch()` blocks to prevent server crashes.

3. **Leveraging the `next()` Function**: 
   - Passing errors to the `next()` function forwards them to Express's built-in error-handling middleware, providing a systematic approach to manage errors.

4. **Implementing Custom Error-Handling Middleware**: 
   - Express allows the creation of custom error-handling middleware that takes four arguments `(err, req, res, next)`, offering flexibility to tailor error responses based on specific needs.

To practice these concepts, we explored setting up both built-in and custom error-handing mechanisms within an Express application, learning to manage errors gracefully and maintain server reliability.

**Practice**: Utilize the provided examples to experiment with handling different types of errors and setting up custom error-response mechanisms. Pay attention to handling rejected promises and forwarding errors appropriately using the `next()` function. 

**Conclusion**: Mastery of error handling in ExpressJS is essential for building robust server-side applications capable of dealing with unexpected issues without compromising user experience or service availability. By utilizing Express's error handling features and creating custom middleware when necessary, you can ensure your application remains stable and responsive under various conditions.

Should you have any questions or need further clarification on any of the discussed concepts, please don't hesitate to reach out for assistance. I'm here to help you through your learning journey!



Finish with Day 5

Completed Mini Project 