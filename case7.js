// ENUM
var PatientStatus;
(function (PatientStatus) {
    PatientStatus[PatientStatus["Admitted"] = 0] = "Admitted";
    PatientStatus[PatientStatus["Discharged"] = 1] = "Discharged";
    PatientStatus[PatientStatus["UnderObservation"] = 2] = "UnderObservation";
})(PatientStatus || (PatientStatus = {}));
// ARRAY OF PATIENTS
var patients = [
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
var Nurse = /** @class */ (function () {
    function Nurse(name) {
        this.name = name;
    }
    Nurse.prototype.takeVitals = function (patient, vitals) {
        patient.vitals = vitals;
        console.log("".concat(this.name, " updated vitals for ").concat(patient.name));
    };
    return Nurse;
}());
var nurse = new Nurse("Carol");
nurse.takeVitals(patients[0], [118, 76]);
// ENUM FOR STAFF ROLES
var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Nurse"] = 1] = "Nurse";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
// STAFF ARRAY
var staffList = [
    { id: 1, name: "Dr. Smith", role: Role.Doctor },
    { id: 2, name: "Nancy", role: Role.Nurse },
    { id: 3, name: "John", role: Role.Admin },
];
// FUNCTION TO PRINT STAFF
function printStaff() {
    console.log("\nStaff List:");
    for (var _i = 0, staffList_1 = staffList; _i < staffList_1.length; _i++) {
        var s = staffList_1[_i];
        console.log("Name: ".concat(s.name, ", Role: ").concat(Role[s.role]));
    }
}
printStaff();
