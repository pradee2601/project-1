export const Students = (props) => {
    return (
        <div className='student'>
            <table>
                <tr>
                    <th>Name</th>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <th>age</th>
                    <td>{props.age}</td>
                </tr>
                <tr>
                    <th>ispass</th>
                    <td>{props.ispass?"pass":"fail"}</td>
                </tr>
            </table>
        </div>
    );
};
