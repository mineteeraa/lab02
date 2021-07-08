app.component('review-form', {
    template:
        /*html*/
        `<form class="review-form" @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <label for="name">Name:</label>
            <input id="name" v-model="name">
            
            <label for="email">Email:</label>
            <input id="email" v-model="email">

            <label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea>

            <label for="isRecommend">Would you recommend this product?</label>
            <select id="isRecommend" v-model="isRecommend">
                <option>Recommend</option>
                <option>Not recommend</option>
            </select>

            <label for="rating">Rating:</label>
            <select id="rating" v-model="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>

            <input class="button" type="submit" value="Submit">
        </form>`,
    data() {
        return {
            name: '',
            email: '',
            review: '',
            isRecommend: null,
            rating: null
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.email === '' || this.review === '' || this.isRecommend === null || this.rating === null) {
                alert('Review is incomplete. Please fill out every field.')
                return
            }
            let productReview = {
                name: this.name,
                email: this.email,
                review: this.review,
                isRecommend :this.isRecommend,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.email = ''
            this.review = ''
            this.isRecommend = null
            this.rating = null
        }
    }
})