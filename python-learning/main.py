from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def read_root():
    return {"message":"Hello World! from FastAPI - This is my first API using FastAPI framework."}
employees = {
    "emp1": {
        "id": 1,
    "name": "Darshan",
    "designation": "Software Engineer",
    },
    "emp2": {
            "id": 2,
        "name": "John Doe",
        "designation": "Product Manager",
        }
}

@app.get("/employees/{emp_id}")
def get_employee(emp_id: str):
    employee = employees.get(emp_id)
    
    if employee:
        return {"name": employee["name"]}
    return {"error": "Employee not found"}