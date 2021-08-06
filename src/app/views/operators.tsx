import React, { Fragment } from "react";
import { Operator } from "@prisma/client";

interface IViewOperatorsProps{
    operators: Operator[] | null;
}


const ViewOperators = (props: IViewOperatorsProps) => {
    const { operators } = props;

    const loading = <div>Loading...</div>;

    const render = (
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>available</td>
                    <td>phone</td>
                    <td>shuttle</td>
                </tr>
            </thead>
            <tbody>
                {operators && operators.map((operator, i) => {
                    return(
                        <tr key={i}>
                            <td>{operator.id}</td>
                            <td>{operator.available}</td>
                            <td>{operator.phone}</td>
                            <td>{operator.shuttleId}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );

    return operators === null ? loading : render;
};

export { ViewOperators };