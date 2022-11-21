/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();
let today = new Date().toLocaleDateString("en-CA");

describe("TodoList test suite", () => {
  beforeAll(() => {
    add({
      title: "assignment completion",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("creating new todo", () => {
    const itemscount = all.length;
    add({
      title: "go walking",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(itemscount + 1);
  });

  test("mark as complete todo", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("due yesterday", () => {
    let duelist = overdue();

    expect(
      duelist.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("due today", () => {
    let duelist = dueToday();

    expect(
      duelist.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("due tomorrow", () => {
    let duelist = dueLater();

    expect(
      duelist.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
