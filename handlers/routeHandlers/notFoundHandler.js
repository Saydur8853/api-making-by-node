//module scaffolding

const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URl was not found!',
    });
}

module.exports = handler;