
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

            // TODO move to lower div! ( make two separate divs with rounded rects etc. )
            document.getElementById( "mainContainer" ).style.height = ( 150 + ( this.props.taskList.length * 55 ) ) + "px";

            return <div>

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
            return this.props.taskList.map(
                function( item, index )
                {
                    console.log( ">> " + index );

                    return <li key={ index }>
                        <div>
                            { item }
                            <button onClick={ () => { this.props.onTaskDelete(   index ); } }>DEL { index }</button>
                            <button onClick={ () => { this.props.onTaskMoveUp(   index ); } }>UP</button>
                            <button onClick={ () => { this.props.onTaskMoveDown( index ); } }>DOWN</button>
                        </div>
                    </li>;
                },
                this
            );
        }
    }
