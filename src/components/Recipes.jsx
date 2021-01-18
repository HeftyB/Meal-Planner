import React from 'react'
import { connect } from 'react-redux'

export const Recipes = ({recipes}) => {
  return (
    <div>
      {recipes ? recipes.map(recipe => {
        return (
          <div>
            {recipe.recipename}
            <hr/>
            {recipe.description}
          </div>
        )
      }) : ".....LOADING......."}
    </div>
  )
}

const mapStateToProps = (state) => ({
  recipes: state.recipes
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes)
