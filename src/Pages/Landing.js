import React from "react"
import Navbarr from "../Components/Navbarr"
import PicBoxes from "../Components/PicBoxes"
import Picboxchild from "../Components/Picboxchild"
import Footer from "../Components/Footer"
import OurMenu from "../Components/OurMenu"


export default function Landing() {
    return (
        <main className="mt-[80px]">
              <Navbarr />
              {/* <OurMenu /> */}
              <PicBoxes />
              <Picboxchild />
              <Footer />
        </main>
    )
}
