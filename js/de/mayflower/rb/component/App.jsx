
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
                taskList: [
                    "TestTask1",
                    "TestTask2",
                    "TestTask3",
                ],
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
                    onTaskCreate={ ( newTask ) => this.createTask( newTask ) }
                />

                { /* task list */ }
                <TaskList
                    taskList={ this.state.taskList }
                    onTaskDelete={   ( taskIndex ) => this.deleteTask(   taskIndex ) }
                    onTaskMoveUp={   ( taskIndex ) => this.moveTaskUp(   taskIndex ) }
                    onTaskMoveDown={ ( taskIndex ) => this.moveTaskDown( taskIndex ) }
                />

            </div>;
        }

        /***************************************************************************************************************
        *   Creates a new task in the TaskList.
        *
        *   @param taskName The name of the task to create.
        ***************************************************************************************************************/
        createTask(taskName )
        {
            console.log( "App.createTask( " + taskName + " ) being invoked" );

            // copy original array
            let newTaskList = this.state.taskList.slice();
            newTaskList.push( taskName );

            // set new state forcing the component to re-render
            this.setState(
                {
                    taskList: newTaskList,
                }
            )
        }

        /***************************************************************************************************************
        *   Deletes the task with the specified index.
        *
        *   @param taskIndex The index of the task to delete.
        ***************************************************************************************************************/
        deleteTask( taskIndex )
        {
            console.log( "App.deleteTask( " + taskIndex + " ) being invoked" );

            // copy original array
            let newTaskList = this.state.taskList.slice();
            newTaskList.splice( taskIndex, 1 );

            // set new state forcing the component to re-render
            this.setState(
                {
                    taskList: newTaskList,
                }
            )
        }

        /***************************************************************************************************************
        *   Rearrranges the task with the specified index up.
        *
        *   @param taskIndex The index of the task to move up.
        ***************************************************************************************************************/
        moveTaskUp( taskIndex )
        {
            console.log( "App.moveTaskUp( " + taskIndex + " ) being invoked" );

            if ( taskIndex > 0 )
            {
                // copy original array
                let newTaskList = this.state.taskList.slice();

                let taskToMoveUp   = newTaskList[ taskIndex     ];
                let taskToMoveDown = newTaskList[ taskIndex - 1 ];

                newTaskList[ taskIndex - 1 ] = taskToMoveUp;
                newTaskList[ taskIndex     ] = taskToMoveDown;

                // set new state forcing the component to re-render
                this.setState(
                    {
                        taskList: newTaskList,
                    }
                )
            }
        }

        /***************************************************************************************************************
        *   Rearrranges the task with the specified index down.
        *
        *   @param taskIndex The index of the task to move down.
        ***************************************************************************************************************/
        moveTaskDown( taskIndex )
        {
            console.log( "App.moveTaskDown( " + taskIndex + " ) being invoked" );

            if ( taskIndex < this.state.taskList.length - 1 )
            {
                // copy original array
                let newTaskList = this.state.taskList.slice();

                let taskToMoveDown = newTaskList[ taskIndex     ];
                let taskToMoveUp   = newTaskList[ taskIndex + 1 ];

                newTaskList[ taskIndex + 1  ] = taskToMoveDown;
                newTaskList[ taskIndex      ] = taskToMoveUp;

                // set new state forcing the component to re-render
                this.setState(
                    {
                        taskList: newTaskList,
                    }
                )
            }
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
