import React, { useEffect, useState } from "react";
import { Axios } from "../services/api";
import { Operator, HookApiResponse } from "./types";

const UseAPI = () => {
  const [data, setData] = useState<Operator[]>([]);

  const loadDataFromServer = async(url: string) => {
    try{
      const response: HookApiResponse = await Axios.get(url);
      console.log(response);
      setData(response.data);
    }catch(err){
      console.log(err)
    }
  }
  
  return [data, setData, loadDataFromServer] as const;
};

export default UseAPI;
