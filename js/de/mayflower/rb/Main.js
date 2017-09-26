
    /*******************************************************************************************************************
    *   The main class represents the application's entry point.
    *
    *   TODO INIT   State
    *   TODO INIT   Properties
    *   TODO INIT   Components
    *   TODO INIT   Data flow
    *   TODO INIT   Rendercycle
    *   TODO INIT   Lifecycle callbacks
    *   TODO INIT   Controlled & uncontrolled inputs
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class Main
    {
        /***************************************************************************************************************
        *   The main method being invoked on startup.
        ***************************************************************************************************************/
        static main()
        {
            Main.acclaimAndSetTitle();
/*
            Main.deploy();
*/
        }

        /***************************************************************************************************************
        *   Acclaims the debug console and sets the document title.
        ***************************************************************************************************************/
        static acclaimAndSetTitle()
        {
            const APP_TITLE = "ReactBasics, (c) 2017 Mayflower GmbH";

            document.title = APP_TITLE;
            console.log(     APP_TITLE );
        }
    }
