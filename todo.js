/* eslint-disable no-undef */
const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }

    let today = new Date().toLocaleDateString("en-CA");
  
    const overdue = () => {
        return all.filter((element) => {
            return element.dueDate < today;
          });
      
    }
  
    const dueToday = () => {
        return all.filter((element) => {
            return element.dueDate === today;
          });
    }
  
    const dueLater = () => {
        return all.filter((element) => {
            return element.dueDate > today;
          });
    }
  
    const toDisplayableList = (list) => {
        return list
      .map((element) => {
        _status = element.completed ? "[x]" : "[ ]";
        date = element.dueDate == today ? "" : element.dueDate;

        return `${_status} ${element.title} ${date}`;
      })
      .join("\n");
      
}
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  module.exports = todoList;
