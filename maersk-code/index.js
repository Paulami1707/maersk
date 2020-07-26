
'use strict'

/**
 * @description function to render inital UI
 */
function renderData ()
{
    let btnContainer = document.getElementById( 'main-container');
    const titleHolder = document.createElement('div');
    titleHolder.setAttribute('class', 'title-data');
    let title = document.createElement( 'div' );
    title.innerHTML = 'Shuffle and Sort';
    titleHolder.append(title);
    btnContainer.before( titleHolder );
    
    let gridContainer = document.getElementById( 'grid-container' );
    for ( let i = 0; i < 9; i++ ) {
        let sqaure = document.createElement( 'div' );
        sqaure.setAttribute( 'id', 'box-' + (i+1) );
        let text = document.createElement( 'div' );
        text.setAttribute('class', 'box-text');
        text.innerHTML = i+1;
        sqaure.append(text);
        gridContainer.append( sqaure )
    }

    document.getElementById( 'name' ).innerHTML = 'Poulami Roy';
}

/**
 * @description function to shuffle the boxes
 * @description for every random number generated the node is appended to the parent
 * @description DOM is reconstructed as one node cannot occupy 2 positions in the DOM
 */
function shuffle ()
{
    let gridContainer = document.getElementById( 'grid-container' );
    [ ...gridContainer.children ].forEach( () =>
    {
        gridContainer.append( gridContainer.children[ Math.floor( Math.random() * gridContainer.children.length ) ] );
    } );
}

/**
 * @description function to shuffle the boxes
 * @description sort function decides order based on the text of the boxes
 * @description DOM is reconstructed as one node cannot occupy 2 positions in the DOM
 */
function sort ()
{
    let gridContainer = document.getElementById( 'grid-container' );
    [ ...gridContainer.children ]
        .sort( ( a, b ) => a.innerText > b.innerText ? 1 : -1 )
        .forEach( node => gridContainer.appendChild( node ) );

}

