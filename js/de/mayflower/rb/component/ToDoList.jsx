
    /*******************************************************************************************************************
    *   Represents the entire application component.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class ToDoList extends React.Component
    {

        // assign title to state

        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render()
        {
            console.log( "ToDoList render() being invoked" );

            return <div>
                <h1>{ this.props.title }</h1>
                <input type="text" />
                <button onClick={ this.onCreateButtonClicked }>Create new task</button>

            </div>;
        }

        /***************************************************************************************************************
        *   Tests state updating forcing this component to re-render.
        ***************************************************************************************************************/
        onCreateButtonClicked()
        {
            console.log( "The create button has been clicked" );



        }

        /***************************************************************************************************************
        *   Tests state updating forcing this component to re-render.
        ***************************************************************************************************************/
        test()
        {
            console.log( "ToDoList test() being invoked" );

            this.setState( { testValue: 5 } );


        }

    }
