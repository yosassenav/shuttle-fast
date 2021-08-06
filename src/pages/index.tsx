import React, { Fragment } from "react";
import { Chips } from "src/components/chip";
import { Module } from "src/components/module";
import { DataTable } from "src/components/datatable/datatable";

/* Home of main page*/
export default function Home() {
  return (
    <Fragment>
      <Module />
      <Chips />

      <DataTable data={} />
    </Fragment>
  );
}
