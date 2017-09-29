
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
    *   OK 4. State ( stateless and statefull components )
    *
    *   TODO 5. data flow
    *
    *               Data flows down. Neither parent nor child components can know if a certain component is stateful
    *               or stateless, and they shouldn't care whether it is defined as a function or a class.
    *               This is why state is often called local or encapsulated. It is not accessible to any component
    *               other than the one that owns and sets it. A component may choose to pass its state down as props to its child components:
    *               This is commonly called a "top-down" or "unidirectional" data flow. Any state is always owned by
    *               some specific component, and any data or UI derived from that state can only affect components
    *               "below" them in the tree.
    *
    *   OK 6. Lifecycle callbacks
    *
    *   TODO Create component for input form.
    *
    *   TODO INIT   Rendercycle
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
