// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'
import { Item} from 'react-semantify'


var heroes = {
    "superman": {
      services: ["cleaning-home", "cleaning-commercial", "moving"],
      name:"Superman Cleaning Services",
      address: "41, Jalan Flyaway, Taman FlyTogether, 46100, Petaling Jaya, Selangor",
      email: "superman@gmail.com",
      phone: "+6012344444",
      averageRating: 6,
    },
    "batman": {
      services: ["karate", "personal-training", "swimming", "yoga"],
      name: "Batman Fitness",
      address: "Batcave",
      email: "brucewayne999@hotmail.com",
      phone: "+6012222222",
      averageRating: 9
    },
    "flash": {
      services: ["moving"],
      name: "Flash Movers",
      address: "41, Jalan Cepat, Taman Cepat",
      email: "flash@yahoo.com",
      phone: "+60172999292",
      averageRating: 8
    },
    "ahchong": {
      services: ["personal-training"],
      name: "Ah Chong Personal Training",
      address: "41, Jalan Tiga, Bukit Kayu Putih",
      email: "ahchong@strong.com",
      phone: "+691233212",
      averageRating: 10
    },
    "lim": {
      services: ["cleaning-home"],
      name: "Lims Home Cleaning",
      address: "41, Jalan Tiga, Bukit Kayu Putih",
      email: "lim@clean.com",
      phone: "+691233212",
      averageRating: 10
    },
    "karatekidz": {
      services: ["karate", "yoga"],
      name: "Karate Kidz",
      address: "41, Jalan Tiga, Bukit Kayu Putih",
      email: "karate@kidz.com",
      phone: "+691233212",
      averageRating: 10
    },
    "aquaman": {
      services: ["swimming"],
      name: "Aquaman Swimmers",
      address: "41, Jalan Tiga, Bukit Kayu Putih",
      email: "aquaman@live.com",
      phone: "+691233212",
      averageRating: 2
    },

}
export default heroes
