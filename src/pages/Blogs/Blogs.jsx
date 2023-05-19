import React from 'react';

const Blogs = () => {
    return (
        <div className='my-10 grid grid-cols-1 md:grid-cols-2 gap-3 p-4 md:p-0'>

            <div>
                <img className="w-full rounded-md" src="https://i.ibb.co/MVqQrpV/question.jpg" alt="image" />
            </div>

            <div>
                <div tabIndex={0} className="collapse collapse-plus border mb-2 border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title bg-slate-300 text-xl font-medium">
                        <h1><b>Question 1:</b> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    </div>
                    <div className="collapse-content bg-slate-200">
                        <p><b>Answer:</b> Access Token: An access token is a credential that represents the authorization granted to a client application to access specific resources on behalf of a user. It is usually issued by an authentication server (such as OAuth or JWT) after the user successfully authenticates and authorizes the client application.
                            Refresh Token: A refresh token is a long-lived credential that is used to obtain a new access token without requiring the user to re-authenticate. It is typically issued alongside the access token and is used when the access token expires or becomes invalid. The client application can send the refresh token to the authentication server to request a new access token.</p>
                        <p>To store access tokens and refresh tokens on the client-side, you have a few options:

                            Memory: You can store tokens in memory variables within your client application. However, this approach is not recommended for long-lived tokens as they will be lost when the application is closed or refreshed.

                            Browser Storage: You can store tokens in the browsers storage mechanisms such as local storage or session storage. Local storage provides persistent storage across browser sessions, while session storage is cleared when the browser session ends.
                            Cookies:
                            Tokens can be stored as cookies in the clients browser. Cookies offer the advantage of being automatically sent with every request to the server, but they also have security considerations and may be susceptible to cross-site scripting (XSS) attacks.
                        </p>
                    </div>
                </div>

                <div tabIndex={1} className="collapse collapse-plus border my-2 border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title bg-slate-300 text-xl font-medium">
                        <h1><b>Question 2:</b> Compare SQL and NoSQL databases?</h1>
                    </div>
                    <div className="collapse-content bg-slate-200">
                        <p><b>Answer:</b>
                            Data Model:<br />
                            SQL: SQL databases, also known as relational databases, use a structured data model based on tables, rows, and columns. The relationships between tables are defined through primary and foreign keys.<br />
                            NoSQL: NoSQL databases use various data models such as key-value pairs, documents, wide-column stores, or graphs.<br />
                            Scalability:<br />
                            SQL: SQL databases typically scale vertically by adding more resources to a single server. Scaling horizontally across multiple servers can be complex and may require partitioning or sharding techniques.<br />
                            NoSQL: NoSQL databases are designed for horizontal scalability and can distribute data across multiple servers with ease. They can handle large amounts of data and high traffic loads efficiently.<br />
                            Use Cases:<br />
                            SQL: SQL databases are commonly used in applications that require complex queries, structured data, and strong data consistency. They are well-suited for applications like transactional systems, financial applications, or traditional relational data scenarios.<br />
                            NoSQL: NoSQL databases excel in handling large volumes of unstructured or semi-structured data, distributed systems, and real-time applications. They are commonly used in scenarios such as content management systems, social networks, IoT data management, or log analysis.
                        </p>
                    </div>
                </div>

                <div tabIndex={2} className="collapse collapse-plus border my-2 border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title bg-slate-300 text-xl font-medium">
                        <h1><b>Question 3:</b> What is express js? What is Nest JS?</h1>
                    </div>
                    <div className="collapse-content bg-slate-200">
                        <p><b>Answer:</b> Express.js is a minimalistic, fast, and flexible web application framework for Node.js. It provides a straightforward and unopinionated approach to building web applications and APIs. Express.js focuses on simplicity, allowing developers to have more control over the applications structure and customization.<br />
                            Nest.js is a TypeScript-based progressive web application framework built on top of Express.js. It provides a complete and opinionated development architecture inspired by Angular, bringing concepts such as dependency injection, decorators, modules, and controllers to server-side development.
                        </p>
                    </div>
                </div>

                <div tabIndex={3} className="collapse collapse-plus border my-2 border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title bg-slate-300 text-xl font-medium">
                        <h1><b>Question 4:</b> What is MongoDB aggregate and how does it work?</h1>
                    </div>
                    <div className="collapse-content bg-slate-200">
                        <p><b>Answer:</b> In MongoDB, the aggregate method is used to perform advanced data 
                        aggregation operations on collections. It allows you to process and transform data, perform
                         calculations, and retrieve aggregated results based on the specified criteria. 
                         The aggregate method takes an array of stages as its argument. Each stage represents 
                         a specific operation that is applied to the data. The stages are executed in the order 
                         they are specified, creating a pipeline for data processing.
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Blogs;