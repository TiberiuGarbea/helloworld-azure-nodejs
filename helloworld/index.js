module.exports = async function (context, req) {

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};