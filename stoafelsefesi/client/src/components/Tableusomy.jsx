import axios from "axios"
import React, { useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import {
  Box,
} from '@mui/material';
import {Search} from "@material-ui/icons"
import { useEffect } from 'react';
import {Link} from "react-router-dom";

const Tableusomy = () => {
    const [data, setData] = useState([])



    const columns = useMemo(
        () => [
        {
            header: 'Id',
            accessorKey: 'id',
        },
        {
            header: 'Url',
            accessorKey: 'url',
            filterFn: 'endsWith',
        },
        {
            header: 'Description',
            accessorKey: 'desc',
        },
        {
            header: 'Date',
            accessorKey: 'date',
            type: 'date',

        },


    ]);
    
    const getUsom = async () => {
        try {
            const res1 = await axios.get("https://www.usom.gov.tr/api/address/index?&page=1")
            const res2 = await axios.get("https://www.usom.gov.tr/api/address/index?&page=2")
            const res3 = await axios.get("https://www.usom.gov.tr/api/address/index?&page=3")
            const res4 = await axios.get("https://www.usom.gov.tr/api/address/index?&page=4")
            const res5 = await axios.get("https://www.usom.gov.tr/api/address/index?&page=5")

            const a = res1.data['models']
            const aa=a.map(function(deger){
                const ty=[]
                ty.id=deger['id']
                ty.url=deger['url']
                ty.desc=deger['desc']
                ty.date=deger['date'].split(" ")[0]
                return ty;
            })
            const b = res2.data['models']
            const bb=b.map(function(deger){
                const ty=[]
                ty.id=deger['id']
                ty.url=deger['url']
                ty.desc=deger['desc']
                ty.date=deger['date'].split(" ")[0]
                return ty;
            })
            const c = res3.data['models']
            const cc=c.map(function(deger){
                const ty=[]
                ty.id=deger['id']
                ty.url=deger['url']
                ty.desc=deger['desc']
                ty.date=deger['date'].split(" ")[0]
                return ty;
            })
            const d = res4.data['models']
            const dd=d.map(function(deger){
                const ty=[]
                ty.id=deger['id']
                ty.url=deger['url']
                ty.desc=deger['desc']
                ty.date=deger['date'].split(" ")[0]
                return ty;
            })
            const e = res5.data['models']
            const ee=e.map(function(deger){
                const ty=[]
                ty.id=deger['id']
                ty.url=deger['url']
                ty.desc=deger['desc']
                ty.date=deger['date'].split(" ")[0]
                return ty;
            })

            const conbir = [...aa, ...bb, ...cc, ...dd, ...ee]
            setData(conbir)



        } catch (error) {
            console.log(error)

        }
    }
    getUsom();

    return (
        <>
        <MaterialReactTable
            columns={columns}
            data={data}
            enableColumnResizing
            enableGrouping
            enableStickyHeader
            enableStickyFooter
            initialState={{
                density: 'compact',
                expanded: true, //expand all groups by default
                // grouping: ['id'], //an array of columns to group by by default (can be multiple)
                pagination: { pageIndex: 0, pageSize: 10 },
                // sorting: [{ id: 'id', desc: false }], //sort by state by default
            }}
            muiToolbarAlertBannerChipProps={{ color: 'green' }}
            filterFns={{
                customFilterFn: (row, id, filterValue) => {
                  return row.getValue(id) === filterValue;
                },
              }}
            muiTableContainerProps={{ sx: { maxHeight: 500 } }}
            enableRowActions
            renderRowActions={({ row ,table}) => (
              <Box>
                <Link to={`ipbilgileri/${row.original.url}`}>
                    <Search />
                </Link>
              </Box>
            )}
        />
        </>
    );

}

export default Tableusomy