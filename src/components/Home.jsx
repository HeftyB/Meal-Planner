import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getIngredients, getRecipes } from "../store/actions";
import { Route, Switch, Link } from "react-router-dom";
import { Button } from "reactstrap";
import Recipes from "./Recipes";

function Home({ingredients, recipes, getIngredients, getRecipes}) {

        useEffect(() => {
        getRecipes()
        getIngredients()
    }, [])

    return (
        <div>
            WELCOME!!!
            <hr/>
            <Recipes />
            <hr/>
            <Link to="/add"><Button>ADD RECIPE</Button></Link>
            {"    "}
            <Link to="/recipes"><Button>ALL RECIPES</Button></Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    ingredients: state.ingredients,
    recipes: state.recipes    
})

const mapDispatchToProps = {
    getIngredients,
    getRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
