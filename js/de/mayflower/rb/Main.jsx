
    /*******************************************************************************************************************
    *   The main class that contains the application's entry point.
    *
    *   TODO ASAP Remove Main.jsx and move its content to index.jsx ( or turn Main.jsx non-static ).
    *   TODO ASAP Complete workshop app.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class Main
    {
        /***************************************************************************************************************
        *   Creates a new main class.
        ***************************************************************************************************************/
        constructor()
        {
            // TODO to index.jsx ?

            this.APPLICATION_TITLE = "React Task List";
        }

        /***************************************************************************************************************
        *   This is the application's entry point.
        ***************************************************************************************************************/
        static main()
        {
            Main.acclaimAndSetTitle();
            Main.deployReactComponent();
        }

        /***************************************************************************************************************
        *   Acclaims the debug console and sets the document title.
        ***************************************************************************************************************/
        static acclaimAndSetTitle()
        {
            document.title = Main.APPLICATION_TITLE();
            console.log(     Main.APPLICATION_TITLE() );
        }

        /***************************************************************************************************************
        *   Deploys our application's main react component.
        ***************************************************************************************************************/
        static deployReactComponent()
        {
            ReactDOM.render(
                <App
                    title={ Main.APPLICATION_TITLE() }
                />,
                document.getElementById( "mainContainer" )
            );
        }

        /***************************************************************************************************************
        *   Returns the application title.
        *
        *   @return string The application title
        ***************************************************************************************************************/
        static APPLICATION_TITLE()
        {
            return "React Task List";
        }
    }
