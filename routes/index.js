var express = require('express');
const soap = require('soap');

var router = express.Router();

router.get('/', async(req, res, next) => {
  res.send({title: 'SOAP API demo'});
});

router.get('/soap', async(req, res, next) => {
  const number = 100;
  let args = {ubiNum: Number(number)};
    return soap.createClientAsync('wsdls/sample.wsdl').then((client) => {
      return client.NumberToWords(args, (err, result, rawResponse, soapHeader, rawRequest) => {
        if (err)
          console.log(err);
        res.json(result); // json response
      });
    }).catch((error) => {
      console.log(error);
    });
});

router.get('/soap-async', async(req, res) => {
  const number = 100;
  let args = {ubiNum: Number(number)};
  try {
    const client = await soap.createClientAsync('wsdls/sample.wsdl');
    const response = await client.NumberToWords(args, (err, result, rawResponse, soapHeader, rawRequest) => {
      return result; // json response
    });
    res.json(response);
  } catch (error) {
    throw error;
  }
});


module.exports = router;
