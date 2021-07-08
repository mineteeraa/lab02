app.component('product-details', {
    props: {
        productDetails: {
            type: String
        }
    },
    template:
        /*html*/
        `<h2>Details: {{ detail }}</h2>`,
    computed: {
        detail() {
            return 'This is mystery shoes, everyone should have one'
        }
    }
})