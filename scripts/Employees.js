import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target
        console.log(itemClicked)

            if (itemClicked.id.startsWith("employee")) { 
                const [, employeeId] = itemClicked.id.split("--")

                let employeeClicked = null
                for (let employee of employees) {
                    if (employee.id === parseInt(employeeId)) {
                        employeeClicked = employee
                    }
                }

                const productsSoldByEmployee = []

                for (const order of orders) {
                    if (order.employeeId === parseInt(employeeId)) {
                        productsSoldByEmployee.push(order)
                    }
                        
                    }
                    window.alert(`${employeeClicked.name} sold ${productsSoldByEmployee.length} products`)
                }
            }
    
)