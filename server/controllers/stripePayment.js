const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const uuid = require("uuid/v4");


exports.makePayment = (req, res) => {
    const {products, token} = req.body;
    console.log("PRODUCTS ", products);

    let amount = 0;
    products.map(product => {
        amount = amount + product.price;
    });

    const idempotenceyKey = uuid()
    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: amount * 100,
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            shipping: {
                name: token.card.name
            }
        }, {idempotenceyKey})
        .then(result => res.status(200).json(result))
        .catch(error => console.log(error));
    })
}