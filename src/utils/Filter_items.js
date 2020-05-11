
const Filter_items = (TableNumber, Tablevalue, data, value) => {         // Filter_items
    if (TableNumber === 1) {    // Name
        switch (Tablevalue) {
            case 1:
                return data.filter((el) => el.name.toLowerCase() === value.toLowerCase())
            case 2:
                return data.filter((el) => el.name.toLowerCase().includes(value.toLowerCase()))

        }
    } else if (TableNumber === 2) {     // Count
        switch (Tablevalue) {
            case 1:
               return data.filter((el) => el.count === +value)
            case 2:
                return data.filter((el) => el.count.toString().includes(value.toString()))
            case 3:
                return data.filter((el) => el.count > +value)
            case 4:
                return data.filter((el) => el.count < +value)
        }
    } else if (TableNumber === 3) {      // Distance
        switch (Tablevalue) {
            case 1:
                return data.filter((el) => el.distance === +value)
            case 2:
               return data.filter((el) => el.distance.toString().includes(value.toString()))
            case 3:
                return data.filter((el) => el.distance > +value)
            case 4:
                return data.filter((el) => el.distance < +value)
        }
    }
}

export default Filter_items