const uuid = require("uuid/v4");

exports.handler = async (event) => {
  let quantity =1;
  if(!(event.quantity*1).isNaN){
    quantity = event.quantity;  
  }
  quantity =Math.min(quantity,20);
  let uuidsGenerated= [];
  for (var i = 0; i < quantity; i++) {
    uuidsGenerated.push(uuid());
  }
  
  let response = {
      statusCode: 200,
      headers: {
            "Content-Type": "application/json"
        },
      body: {
          uuids: uuidsGenerated
        }
  };

  return response;
};
