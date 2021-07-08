app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
            <b>{{review.name}} ({{review.email}})</b> gave this <b>{{review.rating}}</b> stars
            <br/>
            <b>{{review.isRecommend}}</b>
            <br/>
            "{{review.review}}"
            </li>
        </ul>
    </div>
    `
})