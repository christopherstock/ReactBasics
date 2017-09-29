
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
                inputFieldClass: "",
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
                <input id="userInput" className={ this.state.inputFieldClass } type="text" /><br />
                <button id="userButton" onClick={ () => { this.onCreateButtonClicked() } }>Create ToDo</button>
                <ul>{ this.state.taskList }</ul>
            </div>;
        }

        /***************************************************************************************************************
        *   Tests state updating forcing this component to re-render.
        ***************************************************************************************************************/
        onCreateButtonClicked()
        {
            console.log( "The create button has been clicked" );

            // get input field and entered text
            let inputField  = document.getElementById( "userInput" );
            let enteredText = inputField.value.trim();

            // clear input field
            inputField.value = "";

            // check entered text
            console.log( "Trimmed text in the box is [" + enteredText + "]" );
            if ( enteredText.length === 0 )
            {
                // set new state forcing the component to re-render
                this.setState(
                    {
                        taskList:        this.state.taskList,
                        inputFieldClass: "error"
                    }
                );
            }
            else
            {
                // set new state forcing the component to re-render
                this.setState(
                    {
                        taskList:        this.state.taskList + ", " + enteredText,
                        inputFieldClass: ""
                    }
                );
            }
        };
    }
