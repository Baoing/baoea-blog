"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { log } from "console";
import { postRequest } from "@/lib/request";

const tokenList = [
  "NIIvMpdcdxqTE01adboYUTVFWJJlGUMEKgrp937M6eSKGiHDYpZ1FexN6Ft"
]

const rows = [
  {
    token: "NIIvMpdcdxqTE01adboYUTVFWJJlGUMEKgrp937M6eSKGiHDYpZ1FexN6Ft".substring(0, 30)+ "...",
    phone: "",
    balance: 0,
  },
];

const columns = [
  // {
  //   key: "token",
  //   label: "Token",
  //   maxWidth: 300
  // },
  {
    key: "phone",
    label: "手机号",
  },
  {
    key: "balance",
    label: "积分余额",
  },
];

export default function App() {
  postRequest("/api/bestwehotel/getInfos",{
    tokens: tokenList
  }).then(res=>{
    console.log(res)
  })
  return (
    <div className="container">
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.token}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
