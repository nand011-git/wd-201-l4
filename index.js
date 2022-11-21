const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
        list = [];
        for(let i=0;i<5;i++){
            if(all[i].dueDate == yesterday){
                list.push(all[i]);
            }
        }
        return list
      
    }
  
    const dueToday = () => {
        list = [];
        for(let i=0;i<5;i++){
            if(all[i].dueDate == today){
                list.push(all[i]);
            }
        }
        return list
      
    }
  
    const dueLater = () => {
        list = [];
        for(let i=0;i<5;i++){
            if(all[i].dueDate == tomorrow){
                list.push(all[i]);
            }
        }
        return list
      
    }
  
    const toDisplayableList = (list) => {
        var check = '';
        var OUTPUT_STRING = '';
        for(let i = 0;i<list.length;i++){
            if(list[i].completed == true){
                check = '[x]';
            }
            else if(list[i].completed == false){
                check = '[ ]';
            }
            if(list[i].dueDate != today){
                OUTPUT_STRING += check+' '+list[i].title+' '+list[i].dueDate;
            }
            else if(list[i].dueDate == today){
                OUTPUT_STRING += check+' '+list[i].title+' ';
            }
            OUTPUT_STRING = OUTPUT_STRING+'\n';
    
        }
        return OUTPUT_STRING;
      
}
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  module.exports = todoList;