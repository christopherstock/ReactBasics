
    /*******************************************************************************************************************
    *   Represents the TaskList component.
    *   This is an example for a stateless component.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class TaskList extends React.Component
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render()
        {
            console.log( "TaskList.render() being invoked" );

            return <div>

                { /* task list */ }
                <ul id="taskList">
                {
                    this.createTaskListItems()
                }
                </ul>

            </div>;
        }

        /***************************************************************************************************************
        *   Creates and returns all items of the task list.
        ***************************************************************************************************************/
        createTaskListItems()
        {
            let itemKey = 0;

            return this.props.taskList.map(
                function( item )
                {
                    return <li key={ itemKey++ }>{ item }</li>;
                }
            );
        }
    }
