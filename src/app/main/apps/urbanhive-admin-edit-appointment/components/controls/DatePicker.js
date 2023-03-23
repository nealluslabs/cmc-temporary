import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function DatePicker(props) {

    const { name, label, value, onChange } = props
      
   // this is so that we can use event.target. value i the parent element of this element
    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                label={label}
                format="dd/MM/yyyy"
                name={name}
                value={value}
                onChange={date =>(onChange(date))}
                /*onChange={date =>(onChange(convertToDefEventPara(name,date)))}*/
            />
        </MuiPickersUtilsProvider>
    )
}