
    /*******************************************************************************************************************
    *   The main class represents the application's entry point.
    *
    *   TODO ASAP Unify height of all elements.
    *   TODO ASAP Buttons for rearranging or deleting a task?
    *   TODO ASAP Simplify/merge/unify css attributes!
    *   TODO ASAP move to lower div! ( make two separate divs with rounded rects etc. )
    *   TODO ASAP userInput class to property!
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class Main
    {
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
