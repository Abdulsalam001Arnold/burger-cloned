import React from "react"
import Navbarr from "../Components/Navbarr"
import PicBoxes from "../Components/PicBoxes"
import Picboxchild from "../Components/Picboxchild"
import Footer from "../Components/Footer"


import Slide from "../Components/carousel"
import Card from "../Components/cards"


export default function Landing() {
    return (
        <main className="bg-[rgb(245,235,220)] relative">
              <Slide/>
              <Card/>
              <Picboxchild />
              <Footer />
        </main>
    )
}
