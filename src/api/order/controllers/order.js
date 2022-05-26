'use strict';

/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async confirmOrder(ctx, next) {
        ctx.body = "ok";
        const { id } = ctx.request.params

        const order = await strapi.entityService.findOne("api::order.order", id)
        await strapi.entityService.update("api::order.order", {
            id,
            data: {
                confirmed: true,
                confirmation_date: new Date(),
            }
        });

        console.log("Product user: ID", ctx.state.user, order);
        return { message: "Confirmed!" }
    },
}));