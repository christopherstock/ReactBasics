
    /*******************************************************************************************************************
    *   Represents the Input component that creates new tasks.
    *   This is an example for a stateful component ( TODO state for input class! ).
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class TaskInput extends React.Component
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render()
        {
            console.log( "TaskInput.render() being invoked" );

            return <div>

                <form onSubmit={ ( event ) => { this.onFormSubmit( event ); } }>
                    <input id="userInput" type="text" maxLength="50" />
                    <br />
                    <input id="submitButton" type="submit" value="Create Task" />
                </form>

            </div>;
        }

        /***************************************************************************************************************
        *   Being invoked when the form is submitted.
        *
        *   @event The form submission event.
        ***************************************************************************************************************/
        onFormSubmit( event )
        {
            // suppress page reload
            event.preventDefault();

            console.log( "TaskInput.onFormSubmit being invoked" );

            // get input field and entered text
            let inputField  = document.getElementById( "userInput" );
            let enteredText = inputField.value.trim();

            // clear input field
            inputField.value = "";

            // check entered text
            console.log( "Trimmed text in the box is [" + enteredText + "]" );
            if ( enteredText.length === 0 )
            {
                console.log( "Empty text input detected." );

                // set userInput class to 'error' .. TODO to props!
                document.getElementById( "userInput" ).className = "error";

                return;
            }

            // reset userInput class TODO to props!
            document.getElementById( "userInput" ).className = "";

            // invoke parent listener
            this.props.onTaskCreate( enteredText );
        };
    }
