
// ENUM

enum PatientStatus {
  Admitted,
  Discharged,
  UnderObservation,
}


// INTERFACE

interface Patient {
  id: number;
  name: string;
  age: number;
  status: PatientStatus;
  vitals: [number, number];
}


// ARRAY OF PATIENTS

let patients: Patient[] = [
  {
    id: 1,
    name: "Alice",
    age: 30,
    status: PatientStatus.Admitted,
    vitals: [120, 80],
  },
  {
    id: 2,
    name: "Bob",
    age: 45,
    status: PatientStatus.UnderObservation,
    vitals: [130, 85],
  },
];

console.log("Patients list:");
console.log(patients);


// CLASS

class Nurse {
  constructor(public name: string) {}

  takeVitals(patient: Patient, vitals: [number, number]): void {
    patient.vitals = vitals;
    console.log(`${this.name} updated vitals for ${patient.name}`);
  }
}

let nurse = new Nurse("Carol");


nurse.takeVitals(patients[0]!, [118, 76]);


// ENUM FOR STAFF ROLES

enum Role {
  Doctor,
  Nurse,
  Admin,
}


// STAFF INTERFACE

interface Staff {
  id: number;
  name: string;
  role: Role;
}


// STAFF ARRAY

let staffList: Staff[] = [
  { id: 1, name: "Dr. Smith", role: Role.Doctor },
  { id: 2, name: "Nancy", role: Role.Nurse },
  { id: 3, name: "John", role: Role.Admin },
];


// FUNCTION TO PRINT STAFF

function printStaff(): void {
  console.log("\nStaff List:");
  for (let s of staffList) {
    console.log(`Name: ${s.name}, Role: ${Role[s.role]}`);
  }
}

printStaff();
