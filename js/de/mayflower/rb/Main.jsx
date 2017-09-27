
    /*******************************************************************************************************************
    *   The main class represents the application's entry point.
    *
    *   TODO INIT   Components
    *   TODO INIT   State
    *   TODO INIT   Properties
    *
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
            let tdl = ReactDOM.render(
                <ToDoList
                    name={ "Christopher" }
                >
                </ToDoList>,
                document.getElementById('mainContainer')
            );
/*
            ReactDOM.render(
                <clicker.ClickerApp
                    boardSizeX={     boardSizeX     }
                    boardSizeY={     boardSizeY     }
                    numberOfColors={ numberOfColors }
                />,
                document.getElementById('mainContainer')
            );
*/
            tdl.test();


        }

        /***************************************************************************************************************
        *   Returns the application title.
        ***************************************************************************************************************/
        static APPLICATION_TITLE()
        {
            return "ReactBasics, (c) 2017 Mayflower GmbH";
        }
    }
