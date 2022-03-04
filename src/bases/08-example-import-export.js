import { owners, heroes } from './../data/heroes'


//getHeroById( id ) with find
export const getHeroById = (id) => heroes.find(heroe => heroe.id == id)
//getHeroByOwner( "DC" ) with filter
export const getHeroByOwner = (owner) => heroes.filter( heroe => heroe.owner == owner)

/**
 * How to test
 * Copy this in index.js
    import { getHeroById, getHeroByOwner } from './bases/08-example-import-export'
        console.log(getHeroById(3))
        console.log(getHeroByOwner('Marvel  '))
 */
