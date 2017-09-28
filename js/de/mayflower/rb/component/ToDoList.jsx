
    /*******************************************************************************************************************
    *   Represents the entire application component.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class ToDoList extends React.Component
    {
        // assign title to state
        constructor( props )
        {
            super( props );

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
            console.log( "ToDoList.render() being invoked" );

            return <div>
                <h1>{ this.props.title }</h1>
                <input id="userInput" type="text" />
                <button onClick={ () => { this.onCreateButtonClicked() } }>Create new task</button>

                <div>{ this.state.taskList }</div>

            </div>;
        }

        /***************************************************************************************************************
        *   Tests state updating forcing this component to re-render.
        ***************************************************************************************************************/
        onCreateButtonClicked()
        {
            console.log( "The create button has been clicked" );

            let inputField  = document.getElementById( "userInput" );
            let enteredText = inputField.value.trim();

            // check entered text
            console.log( "Trimmed text in the box is [" + enteredText + "]" );
            if ( enteredText.length === 0 )
            {
                alert( "Please enter a text in the task definition field!" );
                return;
            }

            //clear the input field
            inputField.value = "";

            // set new state - force the component to render
            this.setState(
                {
                    taskList: this.state.taskList + "<br />" + enteredText
                }
            );
/*
            this.state = {
                taskList: this.state.taskList + "<br />" + enteredText
            };
*/
            this.render();
        };

        /***************************************************************************************************************
        *   Tests state updating forcing this component to re-render.
        ***************************************************************************************************************/
        test()
        {
            console.log( "ToDoList test() being invoked" );

            this.setState( { testValue: 5 } );


        }

    }
