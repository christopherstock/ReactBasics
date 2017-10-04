
    /*******************************************************************************************************************
    *   Represents the input component that lets the user create new tasks.
    *   This is an example for a stateful component.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class TaskInput extends React.Component
    {
        /***************************************************************************************************************
        *   Initializes this component by setting the initial state.
        *
        *   @param {Object} props The initial properties being passed in the component tag.
        ***************************************************************************************************************/
        constructor( props )
        {
            super( props );

            this.state = {
                inputError: false,
            }
        }

        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return {JSXTransformer} The rendered JSX.
        ***************************************************************************************************************/
        render()
        {
            console.log( "TaskInput.render() being invoked" );

            return <form onSubmit={ ( event ) => { this.onFormSubmit( event ); } }>
                <input id="newTask" type="text" maxLength="50" className={ ( this.state.inputError ? "input error" : "input" ) } />
                <br />
                <input id="submitButton" type="submit" value="Create Task" className="button" />
            </form>;
        }

        /***************************************************************************************************************
        *   Being invoked when the form is submitted.
        *
        *   @param {Event} event The form submission event.
        ***************************************************************************************************************/
        onFormSubmit( event )
        {
            console.log( "TaskInput.onFormSubmit being invoked" );

            // suppress page reload
            event.preventDefault();

            // get input field and trim entered text
            let inputField  = document.getElementById( "newTask" );
            let enteredText = inputField.value.trim();

            // clear input field
            inputField.value = "";

            // check entered text
            console.log( "Trimmed text in the box is [" + enteredText + "]" );
            if ( enteredText.length === 0 )
            {
                console.log( "Empty text input detected." );

                // set error state
                this.setState(
                    {
                        inputError: true,
                    }
                );
            }
            else
            {
                // clear error state
                this.setState(
                    {
                        inputError: false,
                    }
                );

                // invoke parent listener
                this.props.onTaskCreate( enteredText );
            }
        };
    }
