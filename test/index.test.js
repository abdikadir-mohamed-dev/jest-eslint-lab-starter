const { capitalizeWords, filterActiveUsers, logAction } = require('../index');
test("capitalizes normal sentence", () => {
    expect(capitalizeWords ("hello world")).toBe("Hello World");
});

test("handles empty string", () => {
    expect(capitalizeWords("")).toBe("");
});
test("handles single word", () => {
    expect(capitalizeWords("hello")).toBe("Hello");
});
test("handles special characters", () => {
    expect(capitalizeWords("hello-world")).toBe("Hello-World");
});

test("filters mixed active and inactive users", () => {
    const users = [
        {name: "A", active: true},
        {name: "B", active: false},
        {name: "C", active: true}
    ];
    expect(filterActiveUsers(users)).toEqual([
        {name: "A", active: true},
         {name: "C", active: true}
    ]);
});
test("returns empty array when all users are inactive", () => {
  const users = [
    { name: "A", active: false },
    { name: "B", active: false }
  ];

  expect(filterActiveUsers(users)).toEqual([]);
});

test("handles empty array", () => {
  expect(filterActiveUsers([])).toEqual([]);
});

test("generates correct log string", () => {
    const result = logAction("login", "John");
    expect(result).toContain("User John performed login"); 
});

test("handles missing action", () => {
  expect(logAction("", "John")).toBe("Invalid input");
});

test("handles missing username", () => {
  expect(logAction("login", "")).toBe("Invalid input");
});

test("handles both inputs missing", () => {
  expect(logAction("", "")).toBe("Invalid input");
});

