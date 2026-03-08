"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CommonVariableContext = createContext();

export function useCommonVariableContext() {
  return useContext(CommonVariableContext);
}

export function CommonVariableProvider({ children }) {

  const [rowsCount, setRowsCount] = useState("10");
  const [sysSetUpCompo, setSysSetUpCompo] = useState(false);
  const [employeeEditData, setEmployeeEditData] = useState("");
  const [EditID, setEditID] = useState("");
  const [editId, setEditId] = useState("");
  const [color, setColor] = useState("#008fcc");
  const [isToaster, setIsToaster] = useState(false);


  const [isEventScheduleCal, setIsEventScheduleCal] = useState(false);
  const [isUpcomingEvent, setIsUpcomingEvent] = useState(false);



  return (
    <CommonVariableContext.Provider value={{ rowsCount, sysSetUpCompo, setSysSetUpCompo, employeeEditData, setEmployeeEditData, EditID, setEditID, editId, setEditId, color, setColor, isToaster, setIsToaster, isUpcomingEvent, setIsUpcomingEvent, isEventScheduleCal, setIsEventScheduleCal}}>
      {children}
    </CommonVariableContext.Provider>
  );
}
` `;
