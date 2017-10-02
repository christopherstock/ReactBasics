
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
                    return <li key={ index }>
                        <div>
                            { item }

                            { /* Button 'Delete' */ }
                            <button
                                onClick={ () => { this.props.onTaskDelete(   index ); } }
                                className="button"
                            >
                                &#10006;
                            </button>

                            { /* Button 'Move Down' */ }
                            <button
                                onClick={ () => { this.props.onTaskMoveDown( index ); } }
                                className={ ( index === this.props.taskList.length - 1 ? "button.disabled" : "button" ) }
                            >
                                &#9660;
                            </button>

                            { /* Button 'Move Up' */ }
                            <button
                                onClick={ () => { this.props.onTaskMoveUp(   index ); } }
                                className={ ( index === 0 ? "button.disabled" : "button" ) }
                            >
                                &#9650;
                            </button>
                        </div>
                    </li>;
                },
                this
            );
        }
    }
