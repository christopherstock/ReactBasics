
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
                taskList: [],
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

            return <div id="test">

                { /* title */ }
                <h1 id="title">{ this.props.title }</h1>

                { /* input field */ }
                <form onSubmit={ ( event ) => { this.onFormSubmit( event ); } }>
                    <input id="userInput" type="text" />
                    <br />
                    <input id="submitButton" type="submit" value="Create Task" />
                </form>

                { /* task list */ }
                <ul id="todoList">
                {
                    this.createToDoListItems()
                }
                </ul>

            </div>;
        }

        /***************************************************************************************************************
        *   Creates and returns all items of the task list.
        ***************************************************************************************************************/
        createToDoListItems()
        {
            let itemKey = 0;

            return this.state.taskList.map(
                function( item )
                {
                    return <li key={ itemKey++ }>{ item }</li>;
                }
            );
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

            console.log( "Create task form submitted" );

            // get input field and entered text
            let inputField  = document.getElementById( "userInput" );
            let enteredText = inputField.value.trim();

            // clear input field
            inputField.value = "";

            // check entered text
            console.log( "Trimmed text in the box is [" + enteredText + "]" );
            if ( enteredText.length === 0 )
            {
                document.getElementById( "userInput" ).className = "error";
                return;
            }

            // copy original array
            let newTaskList = this.state.taskList.slice();
            newTaskList.push( enteredText );

            document.getElementById( "userInput" ).className = "";
            document.getElementById( "mainContainer" ).style.height = ( 150 + ( newTaskList.length * 55 ) ) + "px";

            // set new state forcing the component to re-render
            this.setState(
                {
                    taskList: newTaskList,
                }
            )
        };

        /***************************************************************************************************************
        *   Being invoked before this component has been mounted.
        ***************************************************************************************************************/
        componentWillMount()
        {
            console.log( "ToDoList.componentWillMount() being invoked" );
        }

        /***************************************************************************************************************
        *   Being invoked after this component has been mounted.
        ***************************************************************************************************************/
        componentDidMount()
        {
            console.log( "ToDoList.componentDidMount() being invoked" );
        }

        /***************************************************************************************************************
        *   Being invoked before this component has been unmounted.
        *
        *   @param nextProps   The props to set on updating.
        *   @param nextState   The state to set on updating.
        *   @param nextContext The context to set on updating.
        ***************************************************************************************************************/
        componentWillUpdate( nextProps, nextState, nextContext )
        {
            console.log( "ToDoList.componentWillUpdate() being invoked" );
        }

        /***************************************************************************************************************
        *   Being invoked before this component receives props.
        *
        *   @param nextProps   The props to set on updating.
        *   @param nextContext The context to set on updating.
        ***************************************************************************************************************/
        componentWillReceiveProps( nextProps, nextContext )
        {
            console.log( "ToDoList.componentWillReceiveProps() being invoked" );
        }

        /***************************************************************************************************************
        *   Being invoked after this component has been updated.
        ***************************************************************************************************************/
        componentDidUpdate()
        {
            console.log( "ToDoList.componentDidUpdate() being invoked" );
        }

        /***************************************************************************************************************
        *   Being invoked before this component has been unmounted.
        ***************************************************************************************************************/
        componentWillUnmount()
        {
            console.log( "ToDoList.componentWillUnmount() being invoked" );
        }

        /***************************************************************************************************************
        *   Being invoked before this component has been unmounted.
        *
        *   @param nextProps   The props to set on updating.
        *   @param nextState   The state to set on updating.
        *   @param nextContext The context to set on updating.
        *
        *   @return boolean
        ***************************************************************************************************************/
        shouldComponentUpdate( nextProps, nextState, nextContext )
        {
            console.log( "ToDoList.shouldComponentUpdate() being invoked" );

            return true;
        }
    }
