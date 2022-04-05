import React from "react";
import data from "./data"
import Pokemon from "./pokemon"

class Pokedex extends React.Component {
    render(){

        return(
            <section className="pokedex">
                {data.map((poke)=> {
                   return <Pokemon key={poke.id} pokemon={poke} />
                })}
            </section>
        )
    }
}

export default Pokedex;