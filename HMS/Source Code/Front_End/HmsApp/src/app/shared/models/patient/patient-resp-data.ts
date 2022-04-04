export class Patient {
    patientId: number;
    patientCode: string;
    name: string;
    address1: string;
    address2: string;
    city: string;
    phone: string;
    guardianPhone: string;
    email: string;
    disease: number;
    gender: string;


    constructor() {
        this.patientId = 0;
        this.patientCode = '';
        this.name = '';
        this.address1 = '';
        this.address2 = '';
        this.city = '';
        this.phone = '';
        this.guardianPhone = '';
        this.email = '';
        this.disease = 0.0;
        this.gender = '';
    }
}

