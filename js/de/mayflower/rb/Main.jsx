
    /*******************************************************************************************************************
    *   The main class represents the application's entry point.
    *
    *   TODO ASAP   Simplify/merge/unify css attributes!
    *   TODO ASAP   Group to form and enable onSubmit
    *   TODO ASAP   Own component for task-item.
    *   TODO ASAP   Rename "ToDo" to "Task".
    *
    *   OK 1. JSX
    *   OK 2. Components
    *   OK 3. Properties
    *   OK 4. State
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
            ReactDOM.render(
                <ToDoList
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
            return "React ToDo List";
        }
    }
