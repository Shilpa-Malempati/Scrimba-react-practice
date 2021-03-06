import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"

function MappingComponents() {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    
    return (
        <div>
            {jokeComponents}            
        </div>
    )
}

export default MappingComponents