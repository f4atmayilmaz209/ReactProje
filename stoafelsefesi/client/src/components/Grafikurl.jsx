import axios from "axios"
import { useState } from 'react';
import React, { useMemo } from 'react';
import {Bar} from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);


const Grafikurl = () => {
    const [data, setData] = useState([])


    var i,toplamIndex=[];
    for(i=1;i<=100;i++){
        toplamIndex.push(i)

    }
    const month=data?.map(function(index){

        return index.url.toString().slice(index.url.toString().lastIndexOf("."))
    })
    const elementCounts = {};

    month.forEach(element => {
    elementCounts[element] = (elementCounts[element] || 0) + 1;
    });

    const values=Object.values(elementCounts)
    const keys=Object.keys(elementCounts)



    
    const getUsom = async () => {
        try {
            const res1 = await axios.get("https://www.usom.gov.tr/api/address/index?&page=1")
            const res2 = await axios.get("https://www.usom.gov.tr/api/address/index?&page=2")
            const res3 = await axios.get("https://www.usom.gov.tr/api/address/index?&page=3")
            const res4 = await axios.get("https://www.usom.gov.tr/api/address/index?&page=4")
            const res5 = await axios.get("https://www.usom.gov.tr/api/address/index?&page=5")


            Promise.all([res1, res2, res3, res4, res5]).then(function (values) {
                const a = res1.data['models']
                const b = res2.data['models']
                const c = res3.data['models']
                const d = res4.data['models']
                const e = res5.data['models']
    
                const conbir = [...a, ...b, ...c, ...d, ...e]
                setData(conbir)
            });






        } catch (error) {
            console.log(error)

        }
    }
    getUsom();

    const dataR = {
        labels:keys,
        datasets:[
            {
                label:"uzanti",
                data:values,
                backgroundColor:"#CC9966"
            },
        ],
      };



    
  return (
    <div>
        <Bar data={dataR} style={{width:"50%",height:"50%",marginLeft:"15%",marginRight:"10%"}}></Bar>

    </div>
  )
}

export default Grafikurl