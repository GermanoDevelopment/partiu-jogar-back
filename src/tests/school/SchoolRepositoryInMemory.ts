import { FindSchoolDto } from "src/modules/school/dto/FindSchoolDto";


export interface School{
    id: String;
    name: String;
    address: String;
    location: String;
}

export class SchoolRepositoryInMemory {
    private schools: School[] = [
        {id: "1", name: "Escola A", address: "Rua A, 123", location: "São Paulo"},
        {id: "2", name: "Escola B", address: "Rua B, 456", location: "Rio de Janeiro"},
        {id: "3", name: "Escola C", address: "Rua C, 789", location: "Belo Horizonte"},
        {id: "4", name: "Escola D", address: "Rua D, 123", location: "São Paulo"}
    ];

    async findBy(options: Partial<FindSchoolDto>): Promise<School[]> {
        let result = this.schools;
        if (options.id) {
            result = result.filter(s => s.id === options.id);
        }
        if (options.name) {
            result = result.filter(s => s.name === options.name);
        }
        if (options.address) {
            result = result.filter(s => s.address === options.address);
        }
        if (options.location) {
            result = result.filter(s => s.location === options.location);
        }
        return result;
    }
}
