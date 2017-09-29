
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
                taskList: [ "Entry 1", "Entry 2" ],

                // TODO replace ?
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

            let itemKey = 0;

            return <div>
                <h1>{ this.props.title }</h1>
                <input id="userInput" className={ this.state.inputFieldClass } type="text" /><br />
                <button id="userButton" onClick={ () => { this.onCreateButtonClicked() } }>Create ToDo</button>
                <ul>
                {
                    this.state.taskList.map( function( item ) { return <li key={ itemKey++ }>{ item }</li>; } )
                }
                </ul>
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

                        // TODO prune?

                        taskList:        this.state.taskList,

                        inputFieldClass: "error",
                    }
                );
            }
            else
            {
                console.log( "1 >> " + this.state.taskList.length );

                // copy original array
                let newTaskList = this.state.taskList.slice();
                newTaskList.push( enteredText );

                console.log( "2 >> " + newTaskList.length );

                // set new state forcing the component to re-render
                this.setState(
                    {
                        taskList:        newTaskList,
                        inputFieldClass: ""
                    }
                );
            }
        };
    }
