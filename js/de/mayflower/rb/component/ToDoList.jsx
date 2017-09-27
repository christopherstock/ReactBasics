
    /*******************************************************************************************************************
    *   Represents the entire application component.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class ToDoList extends React.Component
    {



        render()
        {
            console.log( "ToDoList render() being invoked" );

            return <h1>
                { this.props.name }
            </h1>;
        }

        test()
        {
            console.log( "ToDoList test() being invoked" );

            this.setState( { testValue: 5 } );


        }

    }
