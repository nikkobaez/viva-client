import { NewsKitchen1, NewsKitchen2, NewsKitchen3, TestimonialProfile1, TestimonialProfile2, TestimonialProfile3, TestimonialProfile4, TestimonialProfile5 } from "../assets";

const chairColors = [
    {
        color: "#A46A44",
        name: "brown",
    },
    {
        color: "#1a5e1a",
        name: "green",
    },
    {
        color: "#659994",
        name: "blue",
    },
    {
        color: "#896599",
        name: "mauve",
    },
    {
        color: "#ffa500",
        name: "orange",
    },
    {
        color: "#59555b",
        name: "grey",
    },
    {
        color: "#222222",
        name: "black",
    },
    {
        color: "#ececec",
        name: "white",
    },
];

const cushionColors = [
    {
        color: "#A46A44",
        name: "brown",
    },
    {
        color: "#1a5e1a",
        name: "green",
    },
    {
        color: "#659994",
        name: "blue",
    },
    {
        color: "#896599",
        name: "mauve",
    },
    {
        color: "#ffa500",
        name: "orange",
    },
    {
        color: "#59555b",
        name: "grey",
    },
    {
        color: "#222222",
        name: "black",
    },
    {
        color: "#ececec",
        name: "white",
    },
];

const tableLegsColors = [
    {
        color: "#444444",
        name: "Black"
    }, 
    {
        color: "#ECECEC",
        name: "Chrome",
    },
    {
        color: "#C9BD71",
        name: "Gold",
    },
    {
        color: "#C9A3B9",
        name: "Pink Gold"
    }
]

const breakpoints = {
    320: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    960: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    1280: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
}

const testimonials = [
    {
        id: 1,
        profile: TestimonialProfile1,
        author: "Natasha Mith",
        location: "Greenville, SC",
        review: "I recently have had the pleasure of working with this company, and I’m honestly really genuinely impressed, especially with their 3D design tool."
    },
    {
        id: 2,
        profile: TestimonialProfile2,
        author: "Lila Thompson",
        location: "Austin, TX ",
        review: "After ordering a set of chairs from this website, and I’m truly satisfied, with the prompt delivery and excellent service that I recieved from everyone I met."
    },
    {
        id: 3,
        profile: TestimonialProfile3,
        author: "Ethan Brooks",
        location: "Chicago, IL ",
        review: "I’m truly amazed by their selection and the wide variety they have, even all the comfortable and stylish couch chairs that they have to offer are super neat."
    },
    {
        id: 4,
        profile: TestimonialProfile4,
        author: " Sophie Carter",
        location: " Boston, MA",
        review: "I’m genuinely amazed by their range of couches and the exceptional customer service; their team went above and beyond to assist with my order."
    },
    {
        id: 5,
        profile: TestimonialProfile5,
        author: "Liam Hayes",
        location: "Houston, TX ",
        review: "I’m truly impressed by their selection and the variety of tables they offer; even their service was pretty outstanding, ensuring a smooth purchase."
    }
]

const articles = [
    {
        id: 1,
        image: NewsKitchen1,
        title: "Learn About Our High-Quality and Design Your Space",
        date: "June 22, 2024"
    },
    {
        id: 2,
        image: NewsKitchen2,
        title: "Discover All of the Best Pieces To Put In Your Kitchen",
        date: "July 07, 2022"
    },
    {
        id: 3,
        image: NewsKitchen3,
        title: "Explore Some of Our Stunning Collections for Your Home",
        date: "July 29, 2023"
    },

]

export {
    chairColors,
    cushionColors,
    tableLegsColors,
    breakpoints,
    testimonials,
    articles
}