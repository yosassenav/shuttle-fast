import { ViewOperators } from "@/views/operators";
import { Operator } from "@prisma/client";
import React, { useEffect, useState } from "react";


const WaitPromise = (ms: number) => new Promise((r) => setTimeout(r, ms));

interface IContainerOperatorProps{
    operators: Operator[];
}

/* Se encarga de la lógica, estados, y eventos. */
const ContainerOperators = (props: IContainerOperatorProps) => {
    const { operators } = props;

    const [operatorsList, setOperatorList] = useState<Operator[]>(null);

    /*Para qué es el useEffect?? */
    useEffect(() => {

        /*llamada a la promesa 'wait' ??*/
        wait();
    }, []);

    const wait = async () => {
        await WaitPromise(5000);

        setOperatorList(operators);

    };

    return <ViewOperators operators={operatorsList}/>

};

export { ContainerOperators };