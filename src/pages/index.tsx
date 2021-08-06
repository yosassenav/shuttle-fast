import React, { Fragment } from "react";
import { Chips } from "@/components/chip";
import { Module } from "@/components/module";
import { DataTable } from "@/components/datatable/datatable";

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
