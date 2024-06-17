import Apple from '../static/Apple.png'
import Corn from '../static/Corn.png'
import Cabbage from '../static/Cabbage.png'
import Capsicum from '../static/Capsicum.png'
import Cauliflower from '../static/Cauliflower.png'
import Chili from '../static/Chili.png'
import Eggplant from '../static/Eggplant.png'
import Lattuce from '../static/Lattuce.png'
import Orange from '../static/Orange.png'
import Potato from '../static/Potato.png'
import Rating from '../static/Rating.png'
import { Product } from '../shared/interfaces'



export const products: Product[] = [
    {
        id: 1,
        name: "Green Apple",
        originalCost: "$20.99",
        cost: 14.00,
        discount: "50%",
        image: Apple,
        rating: Rating
    },
    {
        id: 2,
        name: "Fresh Indian Malta",
        cost: 20.00,
        image: Orange,
        rating: Rating
    },
    {
        id: 3,
        name: "Chinese Cabbage",
        cost: 12.00,
        image: Cabbage,
        rating: Rating
    },
    {
        id: 4,
        name: "Green Lattuce",
        cost: 9.00,
        image: Lattuce,
        rating: Rating
    },
    {
        id: 5,
        name: "Eggplant",
        cost: 34.00,
        image: Eggplant,
        rating: Rating
    },
    {
        id: 6,
        name: "Big Potatoes",
        cost: 20.00,
        image: Potato,
        rating: Rating
    },
    {
        id: 7,
        name: "Corn",
        cost: 20.00,
        image: Corn,
        rating: Rating
    },
    {
        id: 8,
        name: "Fresh Cauliflower",
        cost: 12.00,
        image: Cauliflower,
        rating: Rating
    },
    {
        id: 9,
        name: "Green Capsicum",
        originalCost: "$20.99",
        cost: 9.00,
        discount: "50%",
        image: Capsicum,
        rating: Rating
    },
    {
        id: 10,
        name: "Green Chili",
        cost: 34.00,
        image: Chili,
        rating: Rating
    }
]
