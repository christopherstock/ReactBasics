
    /*******************************************************************************************************************
    *   Represents the entire application component.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class ToDoList extends React.Component
    {

        // assign title to state
        constructor()
        {
            super();

            this.state = {
                taskList: "1st entry",
            }
        }

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
                <input id="userInput" type="text" />
                <button onClick={ this.onCreateButtonClicked }>Create new task</button>

                <div>{ this.state.taskList }</div>

            </div>;
        }

        /***************************************************************************************************************
        *   Tests state updating forcing this component to re-render.
        ***************************************************************************************************************/
        onCreateButtonClicked()
        {
            console.log( "The create button has been clicked" );

            let inputField = document.getElementById( "userInput" );


            // check item
            console.log( "Text in the box is [" + inputField.value + "]" );




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
