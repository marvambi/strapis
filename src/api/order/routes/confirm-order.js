module.exports = {
    routes: [{
        method: "POST",
        path: "/orders/confirm/:id",
        handler: "order.confirmOrder",
        config: {
            policies: ["api::order.is-owner"],
            // attach the middleware
            middlewares: ["api::order.ratelimit"]
        }
    }, ]
}