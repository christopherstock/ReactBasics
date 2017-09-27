
    console.log( window );

    Main.main();

    /*******************************************************************************************************************
    *   Being invoked when all components of the HTML page are fully loaded.
    *******************************************************************************************************************/
    window.onload = function()
    {
        // TODO check why not working !

        alert( "window onload being invoked!" );

        console.log( "window.onload being invoked" );

//        Main.main();
    };

    /*******************************************************************************************************************
    *   Being invoked when all components of the HTML page are fully unloaded.
    *******************************************************************************************************************/
    window.onunload = function()
    {
    };
