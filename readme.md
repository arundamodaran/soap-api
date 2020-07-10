### SOAP API implementation

- npm install soap

1. We have to get the WSDL first and configure it in code.
- WSDL consist of all API documentation such as server base url, 
list of endpoints available in the server side with request arguments list,
response structure, etc.

2. We have to require soap and create a client using 
`await soap.createClientAsync('wsdls/sample.wsdl')`
by providing the WSDL. 

3. With that client we created, we can call the operations (APIs) listed in the WSDL
by passing the arguments and will get back the response.

4. We'll ge the JSON response, raw response.
