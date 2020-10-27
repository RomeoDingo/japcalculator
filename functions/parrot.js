exports.handler = async function (event, context) {
    let body = JSON.parse(event.body);
    if ("message" in body){
        return {
            statusCode: 200,
            body: JSON.stringify({ message: body.message }),
          };
    }
    return {
        statusCode: 400,
        body: JSON.stringify({message: "No field message in request body"})
    };
}