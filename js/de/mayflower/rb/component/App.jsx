
    /*******************************************************************************************************************
    *   Represents the entire application component.
    *   This is an example for a stateful component.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class App extends React.Component
    {
        /***************************************************************************************************************
        *   Creates a new App component..
        *
        *   @param props The initial properties being passed in the component tag.
        ***************************************************************************************************************/
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
            console.log( "App.render() being invoked" );

            return <div>

                { /* title */ }
                <h1 id="appTitle">{ this.props.title }</h1>

                { /* task input form */ }
                <TaskInput
                    onCreateNewTask={ ( newTask ) => this.createNewTask( newTask ) }
                />

                { /* task list */ }
                <TaskList
                    taskList={ this.state.taskList }
                />

            </div>;
        }

        /***************************************************************************************************************
        *   Creates a new task in the TaskList.
        *
        *   @param taskName The name of the task to create.
        ***************************************************************************************************************/
        createNewTask( taskName )
        {
            console.log( "App.createNewTask( " + taskName + " ) being invoked" );

            // copy original array
            let newTaskList = this.state.taskList.slice();
            newTaskList.push( taskName );

            document.getElementById( "userInput" ).className = "";
            document.getElementById( "mainContainer" ).style.height = ( 150 + ( newTaskList.length * 55 ) ) + "px";

            // set new state forcing the component to re-render
            this.setState(
                {
                    taskList: newTaskList,
                }
            )
        }

        /***************************************************************************************************************
        *   Being invoked before this component has been mounted.
        ***************************************************************************************************************/
        componentWillMount()
        {
            console.log( "App.componentWillMount() being invoked" );
        }

        /***************************************************************************************************************
        *   Being invoked after this component has been mounted.
        ***************************************************************************************************************/
        componentDidMount()
        {
            console.log( "App.componentDidMount() being invoked" );
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
            console.log( "App.componentWillUpdate() being invoked" );
        }

        /***************************************************************************************************************
        *   Being invoked before this component receives props.
        *
        *   @param nextProps   The props to set on updating.
        *   @param nextContext The context to set on updating.
        ***************************************************************************************************************/
        componentWillReceiveProps( nextProps, nextContext )
        {
            console.log( "App.componentWillReceiveProps() being invoked" );
        }

        /***************************************************************************************************************
        *   Being invoked after this component has been updated.
        ***************************************************************************************************************/
        componentDidUpdate()
        {
            console.log( "App.componentDidUpdate() being invoked" );
        }

        /***************************************************************************************************************
        *   Being invoked before this component has been unmounted.
        ***************************************************************************************************************/
        componentWillUnmount()
        {
            console.log( "App.componentWillUnmount() being invoked" );
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
            console.log( "App.shouldComponentUpdate() being invoked" );

            return true;
        }
    }
